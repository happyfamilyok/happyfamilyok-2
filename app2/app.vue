<script setup lang="ts">
const { payload } = useNuxtApp()
const nonce = payload.cspNonce

useHead({
  script: [
    {
      innerHTML: `console.log("✅ CSP Nonce working in both dev and production");`,
      nonce,
    },
  ],
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
