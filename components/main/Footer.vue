<template>
  <div class="py-5 border-t dark:border-gray-800 mt-12 dark:text-zinc-300">
    <div class="px-6 container max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <FooterSite />
        <FooterLink />
        <FooterConnect />
      </div>

      <div class="border-t dark:border-gray-800 mt-5 text-center p-2">
        © {{ new Date().getFullYear() }} – AG gwFDM
      </div>
    </div>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
