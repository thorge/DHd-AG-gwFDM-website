<script lang="ts" setup>

const route = useRoute();
const i18n = useI18n();

const { data: data } = await useAsyncData(route.path, () => {
  return queryCollection(`news_${i18n.locale.value}`).limit(3).order('date', 'DESC').all();
});

const formattedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles.path,
      title: articles.title || 'no title available',
      description: articles.description || 'no-description available',
      image: articles.meta.image || '/not-found.jpg',
      alt: articles.meta.alt || 'no alter data available',
      ogImage: articles.meta.ogImage || '/not-found.jpg',
      date: articles.date || 'no date available',
      tags: articles.tags || [],
      published: articles.meta.published || false,
    }
  })
})

</script>

<template>
  <div class="pb-10 px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-base-content">{{ $t('recentPosts') }}</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <template v-for="post in formattedData" :key="post.title">
        <NewsCard
          :path="post.path"
          :title="post.title"
          :date="post.date"
          :description="post.description"
          :image="post.image"
          :alt="post.alt"
          :og-image="post.ogImage"
          :tags="post.tags"
          :published="post.published"
        />
      </template>
      <template v-if="data?.length === 0">
        {{ $t('noPostsFound') }}
      </template>
    </div>
  </div>
</template>
