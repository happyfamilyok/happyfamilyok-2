<template>
    <div>
<!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
<header class="bg-slate-500">
  <nav aria-label="Global" class="mx-auto flex items-center justify-between p-6 lg:px-8 bg-slate-500">
    <div class="flex lg:flex-1">
      <div @click="navigateToHome" class="-m-1.5 p-1.5 cursor-pointer">
        <span class="sr-only">Happy Family Menu</span>
        <img src="/public/favicon.png" alt="" class="h-8 w-auto" />
      </div>
    </div>
      <div @click="navigateToHome" class="text-sm/6 font-semibold text-white cursor-pointer">Back to Home</div>
  </nav>
</header>

        <img src="/images/menus/menu_front.png" alt="Menu Front">
        <img src="/images/menus/menu_back.png" alt="Menu Back">
    </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>