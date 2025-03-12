<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const themeStore = useThemeStore();

useHead({
  script: [
    {
      children: `(function() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
      })();`,
      type: "text/javascript",
    },
  ],
});

onMounted(async () => {
  console.log("Mounted app");

  // Initialize the theme on component mount
  themeStore.initializeTheme();
});

</script>