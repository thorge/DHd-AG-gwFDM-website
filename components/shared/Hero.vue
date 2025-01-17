<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
});
</script>
<template>
  <div class="mx-auto mb-5">
    <div class="grid grid-cols-1 items-center">
      <div class="md:px-6 mb-6">
        <h1
          class="text-primary dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5"
        >
          {{ title }}
        </h1>
        <p v-if="description" class="dark:text-zinc-300">
          {{ description }}
        </p>
      </div>
      <!-- <div class="px-6 justify-self-center">
        <LogoDogpow />
      </div> -->
    </div>
  </div>
</template>