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
  <NuxtLink :to="localePath(path)">
    <article
      class="card bg-base-100 border border-base-content/10 group m-2"
    >
      <figure>
        <img
          class="group-hover:scale-[1.02] transition-all duration-500"
          :src="config.public.baseURL + image || ''"
          :alt="alt"
        />
      </figure>
      <div class="card-body">
        <div class="flex items-center text-base-content/70">
          <LogoDate />
          {{ formatDate(date) || "" }}
        </div>
        <h2 class="card-title">
          {{ title }}
        </h2>
        <p>{{ description }}</p>
        <div class="card-actions mt-2">
          <div
            v-for="tag in tags"
            :key="tag"
            class="badge text-base-content/70 border-base-content/50 mr-1 mt-1"
          >
            {{ tag }}
          </div>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>
