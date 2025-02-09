<script lang="ts" setup>
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-vue";

// const { data } = await useAsyncData("home", () =>
//   queryContent("/aktuelles").sort({ _id: -1 }).find()
// );

const route = useRoute();
const { data: data } = await useAsyncData(route.path, () => {
  return queryCollection("news").order('date', 'DESC').all();
});

const elementPerPage = ref(5);
const pageNumber = ref(1);
const searchTest = ref("");

const formattedData = computed(() => {
  return (
    data.value?.map((articles) => {
      console.log(articles);
      return {
        path: articles.path,
        title: articles.title || "no-title available",
        description: articles.description || "no-description available",
        image: articles.meta.image || "/not-found.jpg",
        alt: articles.meta.alt || "no alter data available",
        ogImage: articles.meta.ogImage || "/not-found.jpg",
        date: articles.date || "not-date-available",
        tags: articles.tags || [],
        published: articles.meta.published || false,
      };
    }) || []
  );
});

const searchData = computed(() => {
  return (
    formattedData.value.filter((data) => {
      const lowerTitle = data.title.toLocaleLowerCase();
      if (lowerTitle.search(searchTest.value) !== -1) return true;
      else return false;
    }) || []
  );
});

const paginatedData = computed(() => {
  return (
    searchData.value.filter((data, idx) => {
      const startInd = (pageNumber.value - 1) * elementPerPage.value;
      const endInd = pageNumber.value * elementPerPage.value - 1;

      if (idx >= startInd && idx <= endInd) return true;
      else return false;
    }) || []
  );
});

function onPreviousPageClick() {
  if (pageNumber.value > 1) pageNumber.value -= 1;
}

const totalPage = computed(() => {
  const ttlContent = searchData.value.length || 0;
  const totalPage = Math.ceil(ttlContent / elementPerPage.value);
  return totalPage;
});

function onNextPageClick() {
  if (pageNumber.value < totalPage.value) pageNumber.value += 1;
}

// // Generate OGuseHead Image
// const siteData = useSiteConfig();
// defineOgImage({
//   props: {
//     title: "TODO",
//     description:
//       "TODO",
//     siteName: siteData.url,
//   },
// });
</script>

<template>
  <SharedHero :title="$t('newsPage.title')" :description="$t('newsPage.description')" />

  <div class="md:px-6">
    <input
      v-model="searchTest"
      :placeholder="$t('search')"
      type="text"
      class="block w-full bg-[#F1F2F4] dark:bg-slate-900 dark:placeholder-zinc-500 rounded-md border-gray-300 dark:border-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
  </div>

  <div v-auto-animate class="space-y-5 my-5 md:px-4">
    <template v-for="post in paginatedData" :key="post.title">
      <ArchiveCard
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

    <NewsEmpty
      v-if="paginatedData.length <= 0"
      title="Post Not Found"
      image="/not-found.jpg"
    />
  </div>

  <div class="flex justify-center items-center space-x-6">
    <button :disabled="pageNumber <= 1" @click="onPreviousPageClick">
      <IconChevronLeft
        size="30"
        :class="{ 'text-sky-700 dark:text-sky-400': pageNumber > 1 }"
      />
    </button>
    <p>{{ pageNumber }} / {{ totalPage }}</p>
    <button :disabled="pageNumber >= totalPage" @click="onNextPageClick">
      <IconChevronRight
        size="30"
        :class="{ 'text-sky-700 dark:text-sky-400': pageNumber < totalPage }"
      />
    </button>
  </div>
</template>
