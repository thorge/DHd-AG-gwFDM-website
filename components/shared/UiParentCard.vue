<template>
  <v-card elevation="10" class="withbg">
    <v-card-item class="p-0">
      <div class="mb-6 px-6 pt-8">
        <div class="d-sm-flex align-center justify-space-between">
          <div>
            <h5 class="text-h5">{{ title }}</h5>
            <v-card-subtitle v-if="subtitle">{{ subtitle }}</v-card-subtitle>
          </div>
          <slot name="action"></slot>
        </div>
        <div class="pt-3">
          <slot />
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>
<script setup lang="ts">
const props = defineProps({
  title: String,
  subtitle: String,
  class: String,
});
</script>
