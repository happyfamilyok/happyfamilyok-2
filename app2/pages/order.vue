<template>
  <div class="flex h-dvh w-full shrink-0 flex-col overflow-hidden bg-white">
    <header class="flex shrink-0 items-center justify-between border-b border-gray-200 px-4 py-3">
      <NuxtLink
        to="/"
        class="text-sm font-semibold text-gray-900 hover:text-gray-600"
      >
        ← Happy Family
      </NuxtLink>
      <a
        href="https://order.online/business/happy-family-chinese-restaurant-15185683"
        target="_blank"
        rel="nofollow noopener"
        class="text-sm text-gray-500 hover:text-gray-900"
      >
        Open in a new tab
      </a>
    </header>
    <div class="relative flex min-h-0 min-w-0 flex-1 overflow-hidden">
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
