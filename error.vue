<template>
  <div class="flex justify-center content-center text-center h-100vh mx-2">
    <div>
      <v-img
        v-if="error.statusCode === 404"
        :src="`/images/background/${error.statusCode.toString()}.svg`"
        style="max-width: 500px"
        :alt="error.statusCode.toString()"
        role="img"
        aria-hidden="true"
      />
      <h1 class="text-h1 pt-3">Oops!!!</h1>
      <p class="text-h4 my-8">{{ errorMessage }}</p>
      <v-btn
        @click="handleError"
        flat
        color="primary"
        class="mb-4"
        aria-label="Go back to home page"
        >Go Back to Home</v-btn
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { NuxtError } from "#app";
import { useHead } from "@unhead/vue";

const props = defineProps({
  error: Object as () => NuxtError,
});

// Handle different error messages based on the status code
const getErrorMessage = (statusCode: number) => {
  switch (statusCode) {
    case 404:
      return "This page you are looking for could not be found.";
    case 500:
      return "Internal server error. Please try again later.";
    case 403:
      return "Access denied. You do not have permission to view this page.";
    case 401:
      return "Unauthorized. Please log in to view this page.";
    default:
      return "An unexpected error occurred. Please try again later.";
  }
};

// Ensure the status code and message are defined and fallback to defaults if not
const statusCode = props.error.statusCode || 520;
const statusMessage = props.error.statusMessage || getErrorMessage(statusCode);

// Set the page title and meta tags
const title = ref(`${statusCode} - ${statusMessage}`);
useHead({
  meta: [{ name: "description", content: title.value }],
  titleTemplate: (titleChunk) => {
    return title.value;
  },
});

// Error message based on status code
const errorMessage = getErrorMessage(statusCode);

// Optional: Handle error, e.g., redirect or clear error state
const handleError = () => {
  // Implement your error handling logic here, e.g., redirect or clear error state
  clearError({ redirect: "/" });
};
</script>
