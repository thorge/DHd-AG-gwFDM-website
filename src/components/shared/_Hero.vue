<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  action: {
    type: Object as () => { to: string; label: string },
    required: false,
  },
});

</script>

<template>
  <div class="hero bg-base-200 min-h-screen-50 mt-4 mb-8">
    <div class="hero-content text-center my-8">
      <div class="max-w-sm lg:max-w-md">
        <h1 class="text-2xl sm:text-4xl md:text-5xl font-bold">{{ title }}</h1>
        <p v-if="description" class="py-6">
          {{ description }}
        </p>
        <RouterLink
          v-if="action"
          :to="action.to"
          class="btn btn-primary text-white"
        >
          {{ action.label }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>
