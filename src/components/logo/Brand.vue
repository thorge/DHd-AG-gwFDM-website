<template>
  <div class="logo">
    <NuxtLink :to="localePath('/')" class="flex-0 btn btn-ghost gap-1 px-2 md:gap-2">
      <img src="/android-chrome-192x192.png" alt="Brand Logo" class="h-5 md:h-6" />
      <span class="font-title text-base-content text-lg md:text-xl">DHd AG – gwFDM</span>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const localePath = useLocalePath();
</script>
