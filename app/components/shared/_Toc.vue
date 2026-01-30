<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(`page-${route.path}`, () => {
  return queryCollection("pages").path(route.path).first();
});

const links = page.value?.body?.toc?.links || []
</script>

<template>
  <div class="hidden lg:block lg:col-span-3 sticky top-28 h-96 justify-self-end">
    <div class="border border-base-content/30 p-3 rounded-md min-w-[200px]">
      <h1 class="text-sm font-bold mb-3 border-b border-base-content/30 pb-2">{{ $t('overview') }}</h1>
      <NuxtLink
        v-for="link in links"
        :key="link.id"
        :to="`#${link.id}`"
        class="block text-xs mb-3 hover:underline"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
  </div>
</template>
