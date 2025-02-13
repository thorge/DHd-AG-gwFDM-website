<script setup lang="ts">
import { homePage } from '~/data'
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 items-center">
      <div class="px-4 pb-6">
        <h1
          class="text-primary dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5"
        >
          {{ $t('homePage.title') }}
        </h1>
        <p class="dark:text-zinc-300">
          {{ $t('homePage.description') }}
        </p>
      </div>
    </div>
  </div>
</template>
