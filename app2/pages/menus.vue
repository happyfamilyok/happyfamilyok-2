<template>
    <div class="flex h-screen flex-col">
<!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
<!-- <script src="https://cdn.class="bg-slate-500"jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
<header>
  <nav aria-label="Global" class="mx-auto flex items-center justify-between p-6 lg:px-8 bg-black">
    <div class="flex lg:flex-1">
      <div @click="navigateToHome" class="-m-1.5 p-1.5 cursor-pointer">
        <span class="sr-only">Happy Family Menu</span>
        <img src="/public/favicon.png" alt="" class="h-8 w-auto" />
      </div>
    </div>
      <div @click="navigateToHome" class="text-sm/6 font-semibold text-white cursor-pointer">Back to Home</div>
  </nav>
</header>

        <section
          class="relative flex min-h-0 flex-1 select-none items-center justify-center overflow-hidden bg-[#202124]"
          @touchstart.passive="onTouchStart"
          @touchend.passive="onTouchEnd"
        >
          <button
            type="button"
            class="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white shadow-sm backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:left-6"
            aria-label="Previous image"
            @click="goPrev"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6">
              <path d="M15 6 9 12l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <button
            v-show="currentIndex === 1"
            type="button"
            class="group absolute left-0 top-1/2 z-[5] h-[62%] w-16 -translate-y-1/2 overflow-hidden rounded-r-md bg-black/30 shadow-lg ring-1 ring-white/10 transition hover:w-20 sm:w-24 sm:hover:w-28 lg:w-32 lg:hover:w-36"
            :aria-label="`Preview of ${otherImage.alt}`"
            @click="goTo(otherIndex)"
          >
            <img
              :src="otherImage.src"
              :alt="otherImage.alt"
              class="h-full w-full object-cover object-right saturate-150 opacity-70 transition group-hover:opacity-95"
              draggable="false"
            />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-[#202124]/50"></div>
          </button>

          <div class="flex h-full w-full items-center justify-center px-16 pb-16 pt-4">
            <img
              :src="currentImage.src"
              :alt="currentImage.alt"
              class="max-h-full max-w-full object-contain saturate-150"
              draggable="false"
            />
          </div>

          <button
            v-show="currentIndex === 0"
            type="button"
            class="group absolute right-0 top-1/2 z-[5] h-[62%] w-16 -translate-y-1/2 overflow-hidden rounded-l-md bg-black/30 shadow-lg ring-1 ring-white/10 transition hover:w-20 sm:w-24 sm:hover:w-28 lg:w-32 lg:hover:w-36"
            :aria-label="`Preview of ${otherImage.alt}`"
            @click="goTo(otherIndex)"
          >
            <img
              :src="otherImage.src"
              :alt="otherImage.alt"
              class="h-full w-full object-cover object-left saturate-150 opacity-70 transition group-hover:opacity-95"
              draggable="false"
            />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent to-[#202124]/50"></div>
          </button>

          <button
            type="button"
            class="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white shadow-sm backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:right-6"
            aria-label="Next image"
            @click="goNext"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6">
              <path d="m9 6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <div class="pointer-events-auto absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:bottom-6">
            <div
              class="flex items-center gap-3 rounded-full bg-black/55 px-4 py-1.5 text-[15px] font-medium tracking-wide text-white/90 shadow-sm backdrop-blur-sm"
              role="status"
              aria-live="polite"
            >
              <button
                type="button"
                class="min-w-4 transition"
                :class="currentIndex === 0 ? 'text-white' : 'text-white/40 hover:text-white/70'"
                aria-label="Show image 1"
                @click="goTo(0)"
              >1</button>
              <span class="text-white/55" aria-hidden="true">&lt;-&gt;</span>
              <button
                type="button"
                class="min-w-4 transition"
                :class="currentIndex === 1 ? 'text-white' : 'text-white/40 hover:text-white/70'"
                aria-label="Show image 2"
                @click="goTo(1)"
              >2</button>
              <span class="sr-only">Image {{ currentIndex + 1 }} of {{ images.length }}</span>
            </div>
            <button
              type="button"
              class="flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-[15px] font-medium text-white shadow-sm backdrop-blur-sm transition hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 disabled:cursor-wait disabled:opacity-60"
              :aria-label="`Download ${currentImage.alt}`"
              :disabled="isDownloading"
              @click="downloadCurrent"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-5 w-5">
                <path d="M12 4v12m0 0 4-4m-4 4-4-4M5 20h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span class="hidden sm:inline">{{ isDownloading ? 'Saving…' : 'Download' }}</span>
            </button>
          </div>
        </section>
    </div>
</template>

<script>
import menuFront from '~/images/menus/menu_front.png'
import menuBack from '~/images/menus/menu_back.png'

export default {
  data() {
    return {
      currentIndex: 0,
      touchStartX: 0,
      isDownloading: false,
      images: [
        { src: menuFront, alt: 'Menu Front', filename: 'happy-family-menu-front.png' },
        { src: menuBack, alt: 'Menu Back', filename: 'happy-family-menu-back.png' }
      ]
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex]
    },
    otherIndex() {
      return this.currentIndex === 0 ? 1 : 0
    },
    otherImage() {
      return this.images[this.otherIndex]
    }
  },
  mounted() {
    window.addEventListener('keydown', this.onKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.onKeydown)
  },
  methods: {
    navigateToHome() {
      this.$router.push('/')
    },
    goPrev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    goNext() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    goTo(index) {
      this.currentIndex = index
    },
    async downloadCurrent() {
      if (this.isDownloading) return
      this.isDownloading = true
      const { src, filename } = this.currentImage
      try {
        const response = await fetch(src)
        if (!response.ok) throw new Error('Download failed')
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = filename
        document.body.appendChild(link)
        link.click()
        link.remove()
        URL.revokeObjectURL(url)
      } catch {
        const link = document.createElement('a')
        link.href = src
        link.download = filename
        document.body.appendChild(link)
        link.click()
        link.remove()
      } finally {
        this.isDownloading = false
      }
    },
    onKeydown(event) {
      if (event.key === 'ArrowLeft') this.goPrev()
      if (event.key === 'ArrowRight') this.goNext()
    },
    onTouchStart(event) {
      this.touchStartX = event.changedTouches[0].screenX
    },
    onTouchEnd(event) {
      const deltaX = event.changedTouches[0].screenX - this.touchStartX
      if (Math.abs(deltaX) < 50) return
      if (deltaX > 0) this.goPrev()
      else this.goNext()
    }
  }
}
</script>

<style>

</style>
