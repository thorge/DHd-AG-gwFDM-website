<script lang="ts" setup>
const props = defineProps({
  showToc: Boolean,
});

const route = useRoute();

const normalizedPath = computed(() =>
  route.path.replace(/\/$/, '') || '/'
);

const { data: page } = await useAsyncData(
  `page-${normalizedPath.value}`,
  () => queryCollection("pages").path(normalizedPath.value).first()
);

provide('page', page);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}

useHead({
  title: page.value.title || "No title",
  meta: [
    {
      name: "description",
      content: page.value.description || "No description",
    },
  ],
});
</script>

<template>
  <div>
    <SharedHero
      :title="page?.title || 'No title'"
      :description="page?.description || ''"
    />
    <div
      v-if="page?.body?.value.length > 0"
      class="mx-auto lg:max-w-content"
      :class="{ 'grid grid-cols-12 gap-6': showToc }"
    >
      <div :class="{ 'col-span-12 lg:col-span-9': showToc }">
        <article
          class="prose prose-sm md:prose-base w-full max-w-3xl grow pt-2 mx-auto"
        >
          <ContentRenderer v-if="page" :value="page" />
        </article>
      </div>
      <SharedToc v-if="showToc" />
    </div>
  </div>
</template>
