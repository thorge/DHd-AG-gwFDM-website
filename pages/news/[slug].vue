<script setup lang="ts">
import type { NewsPost } from '@/types/news'

const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("news").path(route.path).first();
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

useHead({
  title: data.value.title || '',
  meta: [
    {
      name: 'description',
      content: data.value.description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    // { property: 'og:site_name', content: navbarData.homeTitle },
    // { hid: 'og:type', property: 'og:type', content: 'website' },
    // {
    //   property: 'og:url',
    //   content: `${seoData.mySite}/${path}`,
    // },
    // {
    //   property: 'og:title',
    //   content: data.value.title,
    // },
    // {
    //   property: 'og:description',
    //   content: data.value.description,
    // },
    // {
    //   property: 'og:image',
    //   content: data.value.ogImage || data.value.image,
    // },
    // // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    // { name: 'twitter:site', content: '@qdnvubp' },
    // { name: 'twitter:card', content: 'summary_large_image' },
    // {
    //   name: 'twitter:url',
    //   content: `${seoData.mySite}/${path}`,
    // },
    // {
    //   name: 'twitter:title',
    //   content: data.value.title,
    // },
    // {
    //   name: 'twitter:description',
    //   content: data.value.description,
    // },
    // {
    //   name: 'twitter:image',
    //   content: data.value.ogImage || data.value.image,
    // },
  ],
  // link: [
  //   {
  //     rel: 'canonical',
  //     href: `${seoData.mySite}/${path}`,
  //   },
  // ],
})

// // Generate OG Image
// defineOgImageComponent('Test', {
//   headline: 'Greetings 👋',
//   title: data.value.title || '',
//   description: data.value.description || '',
//   link: data.value.ogImage,
// })
</script>

<template>
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
