const http = require("http");
const path = require("path");
const express = require("express");
const { WebSocketServer } = require("ws");
const { chromium } = require("playwright");

const STORE_URL =
  "https://order.online/store/36737771?pickup=true&redirected=true";
const PORT = Number(process.env.PORT) || 3000;
const DEFAULT_VIEWPORT = { width: 1280, height: 900 };

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: "/embed-live" });

let browser;
let page;
let cdp;
let screencastOn = false;
let latestFrame = null;
const viewport = { ...DEFAULT_VIEWPORT };
let scaleFactor = 2;

function framePixelSize() {
  let maxWidth = Math.round(viewport.width * scaleFactor);
  let maxHeight = Math.round(viewport.height * scaleFactor);
  const scale = Math.min(1, 2880 / maxWidth, 1800 / maxHeight);
  return {
    maxWidth: Math.max(1, Math.round(maxWidth * scale)),
    maxHeight: Math.max(1, Math.round(maxHeight * scale)),
  };
}

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/health", (_req, res) => {
  res.json({
    ready: Boolean(page),
    url: page ? page.url() : null,
    clients: wss.clients.size,
  });
});

function broadcast(payload) {
  const data = JSON.stringify(payload);
  for (const client of wss.clients) {
    if (client.readyState === 1) client.send(data);
  }
}

async function launchBrowser() {
  const args = [
    "--disable-blink-features=AutomationControlled",
    "--disable-dev-shm-usage",
  ];
  try {
    return await chromium.launch({ channel: "chrome", headless: true, args });
  } catch {
    return await chromium.launch({ headless: true, args });
  }
}

async function waitForStore(target) {
  await target.goto(STORE_URL, {
    waitUntil: "domcontentloaded",
    timeout: 90_000,
  });
  await target.waitForFunction(
    () => {
      const title = document.title || "";
      return title.length > 0 && !/just a moment|attention required|cloudflare/i.test(title);
    },
    { timeout: 90_000 }
  );
  await target.waitForSelector("text=Featured Items", { timeout: 60_000 });
}

async function startScreencast() {
  if (!cdp || screencastOn) return;
  const { maxWidth, maxHeight } = framePixelSize();
  await cdp.send("Page.startScreencast", {
    format: "jpeg",
    quality: 92,
    maxWidth,
    maxHeight,
    everyNthFrame: 1,
  });
  screencastOn = true;
}

async function stopScreencast() {
  if (!cdp || !screencastOn) return;
  try {
    await cdp.send("Page.stopScreencast");
  } catch {
    /* page may already be closed */
  }
  screencastOn = false;
}

async function ensureScreencast() {
  if (wss.clients.size === 0) {
    await stopScreencast();
    return;
  }
  await startScreencast();
}

async function handleInput(msg) {
  if (!page) return;
  const x = Number(msg.x) || 0;
  const y = Number(msg.y) || 0;

  switch (msg.type) {
    case "move":
      await page.mouse.move(x, y);
      break;
    case "down":
      await page.mouse.move(x, y);
      await page.mouse.down({ button: msg.button || "left" });
      break;
    case "up":
      await page.mouse.move(x, y);
      await page.mouse.up({ button: msg.button || "left" });
      break;
    case "click":
      await page.mouse.click(x, y, {
        button: msg.button || "left",
        clickCount: msg.clickCount || 1,
      });
      break;
    case "wheel":
      await page.mouse.move(x, y);
      await page.mouse.wheel(Number(msg.deltaX) || 0, Number(msg.deltaY) || 0);
      break;
    case "key":
      if (msg.text) {
        await page.keyboard.insertText(msg.text);
      } else if (msg.key) {
        await page.keyboard.press(msg.key);
      }
      break;
    case "resize": {
      const width = Math.max(1, Math.round(Number(msg.width) || viewport.width));
      const height = Math.max(1, Math.round(Number(msg.height) || viewport.height));
      const dpr = Math.min(3, Math.max(1, Number(msg.dpr) || scaleFactor));
      const changed =
        width !== viewport.width || height !== viewport.height || dpr !== scaleFactor;
      if (!changed) break;
      viewport.width = width;
      viewport.height = height;
      scaleFactor = dpr;
      await page.setViewportSize({ width, height });
      if (cdp) {
        await cdp.send("Emulation.setDeviceMetricsOverride", {
          width,
          height,
          deviceScaleFactor: scaleFactor,
          mobile: false,
        });
      }
      await stopScreencast();
      await ensureScreencast();
      break;
    }
    default:
      break;
  }
}

async function startStore() {
  browser = await launchBrowser();
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: scaleFactor,
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    locale: "en-US",
  });
  page = await context.newPage();
  await waitForStore(page);
  cdp = await context.newCDPSession(page);
  cdp.on("Page.screencastFrame", async (frame) => {
    latestFrame = {
      type: "frame",
      data: frame.data,
      metadata: frame.metadata,
      viewport,
    };
    broadcast(latestFrame);
    try {
      await cdp.send("Page.screencastFrameAck", { sessionId: frame.sessionId });
    } catch {
      /* ignore stale acks */
    }
  });
  console.log(`Store ready: ${page.url()}`);
}

wss.on("connection", async (ws) => {
  ws.send(
    JSON.stringify({
      type: "hello",
      viewport,
      ready: Boolean(page),
      url: STORE_URL,
    })
  );
  if (latestFrame) ws.send(JSON.stringify(latestFrame));
  await ensureScreencast();

  ws.on("message", async (raw) => {
    const text = raw.toString().trim();
    if (!text || text === "connected" || (text[0] !== "{" && text[0] !== "[")) return;
    try {
      await handleInput(JSON.parse(text));
    } catch (err) {
      ws.send(JSON.stringify({ type: "error", message: String(err.message || err) }));
    }
  });

  ws.on("close", () => {
    setTimeout(() => {
      ensureScreencast().catch(() => {});
    }, 250);
  });
});

async function shutdown() {
  await stopScreencast();
  if (browser) await browser.close().catch(() => {});
  server.close();
}

process.on("SIGINT", () => shutdown().then(() => process.exit(0)));
process.on("SIGTERM", () => shutdown().then(() => process.exit(0)));

server.listen(PORT, async () => {
  console.log(`Open http://localhost:${PORT} to view the embedded store`);
  try {
    await startStore();
    broadcast({ type: "hello", viewport, ready: true, url: STORE_URL });
    await ensureScreencast();
  } catch (err) {
    console.error("Failed to load store:", err);
    broadcast({ type: "error", message: String(err.message || err) });
  }
});
