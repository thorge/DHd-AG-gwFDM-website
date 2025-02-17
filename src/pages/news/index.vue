<script lang="ts" setup>
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-vue";

const route = useRoute();
const i18n = useI18n();

const { data: data } = await useAsyncData(route.path, () => {
  return queryCollection(`news_${i18n.locale.value}`).order("date", "DESC").all();
});

const elementPerPage = ref(5);
const pageNumber = ref(1);
const searchField = ref("");

const formattedData = computed(() => {
  return (
    data.value?.map((articles) => {
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
      if (lowerTitle.search(searchField.value.toLocaleLowerCase()) !== -1) return true;
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

</script>

<template>
  <SharedHero
    :title="$t('breadcrumb.items.news.label')"
    :description="$t('newsPage.description')"
  />

  <div class="md:px-6">
    <label class="input">
      <svg
        class="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        v-model="searchField"
        type="search"
        class="grow"
        :placeholder="$t('search')"
      />
    </label>
  </div>

  <div class="space-y-5 my-5 md:px-4">
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
  </div>

  <div v-if="totalPage > 1" class="flex justify-center items-center space-x-6">
    <button :disabled="pageNumber <= 1" @click="onPreviousPageClick">
      <IconChevronLeft
        size="30"
        :class="{ 'text-base-content': pageNumber > 1 }"
      />
    </button>
    <p>{{ pageNumber }} / {{ totalPage }}</p>
    <button :disabled="pageNumber >= totalPage" @click="onNextPageClick">
      <IconChevronRight
        size="30"
        :class="{
          'text-base-content': pageNumber < totalPage,
        }"
      />
    </button>
  </div>
</template>
