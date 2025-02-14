<script lang="ts" setup>

const { data } = await useAsyncData('all-news-post-for-category', () =>
  queryContent('/aktuelles').sort({ _id: -1 }).find(),
)

const allTags = new Map()

data.value?.forEach((news) => {
  const tags: Array<string> = news.tags || []
  tags.forEach((tag) => {
    if (allTags.has(tag)) {
      const cnt = allTags.get(tag)
      allTags.set(tag, cnt + 1)
    } else {
      allTags.set(tag, 1)
    }
  })
})

// useHead({
//   title: 'TODO',
//   meta: [
//     {
//       name: 'description',
//       content:
//         'TODO',
//     },
//   ],
// })

// // Generate OG Image
// const siteData = useSiteConfig()
// defineOgImage({
//   props: {
//     title: 'Kategorien',
//     description:
//       'Below All the topics are listed on which either I have written a news or will write a news in near future.',
//     siteName: siteData.url,
//   },
// })
</script>

<template>
  <main class="container max-w-5xl mx-auto text-base-content/70">
    <CategoryHero />
    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <CategoryCard
        v-for="topic in allTags"
        :key="topic[0]"
        :title="topic[0]"
        :count="topic[1]"
      />
    </div>
  </main>
</template>
