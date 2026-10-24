<template>
  <div class="relative isolate min-h-dvh">
    <div aria-hidden="true" class="page-background">
      <div class="page-background-crop">
        <img :src="pageBackground" alt="" draggable="false" />
      </div>
    </div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup>
import pageBackground from '~/images/bg/image178.png'
</script>

<style>
.page-background {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

/* The 1086px source has artwork between x=141 and x=871.
   Cover the viewport using that 730 × 1197 region, excluding its white gutters. */
.page-background-crop {
  position: absolute;
  left: 50%;
  top: 50%;
  width: max(100vw, calc(100dvh * 730 / 1197));
  height: max(calc(100vw * 1197 / 730), 100dvh);
  overflow: hidden;
  transform: translate(-50%, -50%);
}

.page-background-crop img {
  position: absolute;
  top: 0;
  left: calc(-100% * 141 / 730);
  width: calc(100% * 1086 / 730);
  max-width: none;
  height: 100%;
}
</style>
