<script setup lang="ts">
</script>

<template>
  <div class="container mx-auto mb-5">
    <div class="grid grid-cols-1 items-center">
      <div class="md:px-4">
        <h1
          class="font-semibold leading-tight text-4xl md:text-5xl my-5"
        >
          {{ $t('newsPage.title') }}
        </h1>
        <p class="text-base-content/70">
          {{ $t('newsPage.description') }}
        </p>
      </div>
    </div>
  </div>
</template>
