<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!-- <v-snackbar
    v-model="website.snackbar.active"
    timeout="6000"
    :color="website.snackbar.color"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    aria-label="Notification"
  >
    {{ website.snackbar.text }}
    <template v-slot:actions>
      <v-btn
        dark
        variant="text"
        @click="website.snackbar.active = false"
        aria-label="Close notification"
      >
        {{ $t("close") }}
      </v-btn>
    </template>
  </v-snackbar> -->
</template>
<script setup lang="ts">
// const website = useWebsiteStore();

onMounted(async () => {
  console.log("Mounted app");
});
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

html.dark {
  color-scheme: dark;
}
</style>