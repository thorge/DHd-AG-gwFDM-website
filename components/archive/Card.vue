<script lang="ts" setup>
interface Props {
  path?: string
  title?: string
  date?: string
  description?: string
  image?: string
  alt?: string
  ogImage?: string
  tags?: Array<string>
  published?: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'No title found',
  date: 'No date available',
  description: 'no-description',
  image: '/news-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/news-img/blog.jpg',
  tags: () => [],
  published: false,
})

const localePath = useLocalePath();
const config = useRuntimeConfig()

</script>

<template>
  <article
    class="group border dark:border-gray-800 md:mx-2 my-2 rounded-2xl overflow-hidden shadow-sm"
  >
    <NuxtLink :to="localePath(path)" class="grid grid-cols-1 sm:grid-cols-10 gap-1">
      <div class="sm:col-span-3">
        <img
          class="h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.02] transition-all duration-500"
          width="300"
          :src="config.public.baseURL + image || ''"
          :alt="alt"
        />
      </div>
      <div class="sm:col-span-7 p-5">
        <h2
          class="text-xl font-semibold pb-1 text-primary group-hover:text-secondary dark:group-hover:text-secondary"
        >
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2">
          {{ description }}
        </p>
        <div class="text-sm mt-2 mb-1 md:flex md:space-x-6">
          <div class="flex items-center">
            <LogoDate />
            <p>{{ formatDate(date) || '' }}</p>
          </div>
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag />
            <p
              v-for="tag in tags"
              :key="tag"
              class="bg-grey200 dark:bg-slate-900 rounded-md px-2 py-1 font-semibold"
            >
              {{ tag }}
            </p>
          </div>
        </div>
        <div class="flex group-hover:underline text-primary dark:text-secondary items-center pt-2">
          <p>{{ $t('read_more') }}</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
