<template>
  <div class="logo">
    <NuxtLink :to="localePath('/')">
      <img src="/assets/images/logo.png" alt="Brand Logo" width="175px" />
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const localePath = useLocalePath();
</script>
