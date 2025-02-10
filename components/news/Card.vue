<script lang="ts" setup>
interface Props {
  path: string;
  title: string;
  date: string;
  description: string;
  image: string;
  alt: string;
  ogImage: string;
  tags: Array<string>;
  published: boolean;
}

withDefaults(defineProps<Props>(), {
  path: "/",
  title: "No title found",
  date: "No date available",
  description: "no-description",
  image: "/news-img/blog.jpg",
  alt: "no-alt",
  ogImage: "/news-img/blog.jpg",
  tags: () => [],
  published: false,
});

const localePath = useLocalePath();
const config = useRuntimeConfig();
</script>

<template>
  <article class="card bg-base-100 group m-2 shadow-sm">
    <NuxtLink :to="localePath(path)">
      <figure>
        <img
          class="object-cover object-center group-hover:scale-[1.02] transition-all duration-500"
          :src="config.public.baseURL + image || ''"
          :alt="alt"
        />
      </figure>
      <div class="card-body">
        <div class="flex items-center">
          <LogoDate />
          {{ formatDate(date) || "" }}
        </div>
        <h2 class="card-title">
          {{ title }}
        </h2>
        <p>{{ description }}</p>
        <div class="card-actions justify-end">
          <div v-for="tag in tags" :key="tag" class="badge badge-outline m-1">
            {{ tag }}
          </div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
