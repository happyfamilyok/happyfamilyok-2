// Function to calculate a scale factor for CSS
function calculateScaleFactor(originalSize, targetSize) {
    if (originalSize === 0) {
        throw new Error("Original size cannot be zero.");
    }
    return targetSize / originalSize;
}

// Example usage:
const originalWidth = 1920; // Original width of the design
const targetWidth = 1280;  // Target width for scaling
const scaleFactor = calculateScaleFactor(originalWidth, targetWidth);

console.log(`Scale Factor: ${scaleFactor}`);
// Use the scale factor in your CSS calculations

top: calc((1vh/(580/1503))*20); left: calc((1vw/(500/1210))*11);