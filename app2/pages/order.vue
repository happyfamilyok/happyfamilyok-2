<template>
  <div class="flex h-dvh flex-col bg-white">
    <header class="flex shrink-0 items-center justify-between border-b border-gray-200 px-4 py-3">
      <NuxtLink
        to="/"
        class="text-sm font-semibold text-gray-900 hover:text-gray-600"
      >
        ← Happy Family
      </NuxtLink>
      <a
        href="https://www.doordash.com/store/happy-family-chinese-restaurant-norman-36737771/82709946/"
        target="_blank"
        rel="nofollow noopener"
        class="text-sm text-gray-500 hover:text-gray-900"
      >
        Open in DoorDash
      </a>
    </header>
    <div class="min-h-0 flex-1">
      <ClientOnly>
        <OnlineOrderEmbed />
        <template #fallback>
          <div class="grid h-full place-items-center text-center text-gray-500">
            Loading online ordering…
          </div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>
