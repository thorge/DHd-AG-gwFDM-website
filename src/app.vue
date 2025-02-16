<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const themeStore = useThemeStore();

onMounted(async () => {
  console.log("Mounted app");

  // Initialize the theme on component mount
  themeStore.initializeTheme();
});
</script>