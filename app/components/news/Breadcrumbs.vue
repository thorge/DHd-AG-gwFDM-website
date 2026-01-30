<script setup lang="ts">
const props = defineProps({
  title: String,
})

const siteConfig = useSiteConfig();
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
    undefined, // News
    {
      label: props.title,
    },
  ];
  return items;
});

const breadcrumbItems = useBreadcrumbItems({
  overrides: overrides,
});
</script>

<template>
  <nav v-if="breadcrumbItems.length > 1" aria-label="Breadcrumbs">
    <div class="breadcrumbs text-sm">
      <ul>
        <li v-for="item in breadcrumbItems" v-bind:key="item.label">
          <NuxtLink :to="localePath(item.to)">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
