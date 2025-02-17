<script setup lang="ts">
import { NewsBreadcrumbs } from '#components';
import type { NewsPost } from '@/types/news'

const route = useRoute();
const i18n = useI18n();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection(`news_${i18n.locale.value}`).path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

const data = computed<NewsPost>(() => {
  return {
    title: page.value?.title || 'no title available',
    description: page.value?.description || 'no-description available',
    image: page.value?.meta?.image || '/not-found.jpg',
    alt: page.value?.meta?.alt || 'no alter data available',
    ogImage: page.value?.meta?.ogImage || '/not-found.jpg',
    date: page.value?.date || 'no date available',
    tags: page.value?.tags || [],
    published: page.value?.meta?.published || false,
  }
})

definePageMeta({
  layout: "news"
})


useHead({
  title: data.value.title || '',
  meta: [
    {
      name: 'description',
      content: data.value.description,
    },
  ],
})

</script>

<template>
  <NewsBreadcrumbs :title="data.title" />
  <div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12">
    <div class="col-span-12 lg:col-span-9">
      <NewsHeader
        :title="data.title"
        :image="data.image"
        :alt="data.alt"
        :date="data.date"
        :description="data.description"
        :tags="data.tags"
      />
      <div
        class="prose prose-sm md:prose-base w-full max-w-4xl grow pt-10"
      >
        <ContentRenderer v-if="page" :value="page">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
    </div>
    <NewsToc />
  </div>
</template>
