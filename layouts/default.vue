<template>
  <v-locale-provider>
    <v-app>
      <LayoutFullMain />
      <v-main>
        <v-container fluid class="page-wrapper">
          <div class="container max-w-5xl mx-auto">
            <nav aria-label="Breadcrumbs" class="mb-4">
              <v-breadcrumbs :items="breadcrumbItems">
                <template v-slot:prepend>
                  <IconHome2 size="16" />
                </template>
                <template v-slot:title="{ item }">
                  <NuxtLink v-bind="item">
                    {{ item.label }}
                  </NuxtLink>
                </template>
              </v-breadcrumbs>
            </nav>
            <NuxtPage />
          </div>
        </v-container>
      </v-main>
      <v-footer absolute inset app>
        <MainFooter />
      </v-footer>
    </v-app>
  </v-locale-provider>
</template>
<script setup lang="ts">
import { IconHome2 } from "@tabler/icons-vue";

const siteConfig = useSiteConfig();
const title = ref(siteConfig.name);

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