// plugins/csp-nonce.global.ts
export default defineNuxtPlugin((nuxtApp) => {
  const nonce = nuxtApp.ssrContext?.event.context.nonce || ''
  nuxtApp.payload.cspNonce = nonce
  nuxtApp.vueApp.config.globalProperties.$nonce = nonce
})
