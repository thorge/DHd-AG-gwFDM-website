<template>
  <MainNavbar />
  <main class="p-6">
    <div class="container max-w-8xl mx-auto">
      <nav v-if="breadcrumbItems.length > 1" aria-label="Breadcrumbs">
        <div class="breadcrumbs text-sm">
          <ul>
            <li v-for="item in breadcrumbItems" v-bind:key="item.label">
              <NuxtLink :to="localePath(item.to)">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
      <NuxtPage />
    </div>
  </main>
  <MainFooter />
</template>
<script setup lang="ts">

const siteConfig = useSiteConfig();
const title = ref(siteConfig.name);
const localePath = useLocalePath();

const homeLabel = ref(
  siteConfig.breadcrumb?.home?.label
    ? siteConfig.breadcrumb.home.label
    : "Untitled"
);

// Define computed overrides for breadcrumbs
const overrides = computed(() => {
  const items = [
    {
      label: homeLabel.value, // dynamic home label
      to: "/", // Link to root
    },
  ];
  return items;
});

const breadcrumbItems = useBreadcrumbItems({
  overrides: overrides,
});

useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} – ${title.value}` : title.value;
  },
});
</script>