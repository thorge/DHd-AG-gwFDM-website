<script lang="ts" setup>
interface Props {
  path: string
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  tags: Array<string>
  published: boolean
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
</script>

<template>
  <article
    class="group border dark:border-gray-800 m-2 overflow-hidden rounded-2xl shadow-sm dark:text-zinc-300"
  >
    <NuxtLink :to="localePath(path)">
      <NuxtImg
        class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500"
        width="300"
        :src="image"
        :alt="alt"
      />
      <div class="px-3 pb-4">
        <div class="dark:text-zinc-300 pt-3 pb-2">
          <div class="flex items-center">
            <LogoDate />
            {{ date }}
          </div>
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag />
            <template v-for="tag in tags" :key="tag">
              <span class="bg-grey200 dark:bg-slate-900 rounded-md px-2 py-1 font-semibold">{{
                tag
              }}</span>
            </template>
          </div>
        </div>
        <h2
          class="text-xl font-semibold text-primary dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"
        >
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2 text-base">
          {{ description }}
        </p>
        <div class="flex group-hover:underline text-primary dark:text-sky-400 items-center py-2">
          <p>{{ $t('read_more') }}</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
