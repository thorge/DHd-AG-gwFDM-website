<template>
  <v-chip
    :class="'bg-' + color(valid)"
    color="white"
    :size="size"
    :label="label"
  >
    {{ valid === true ? "Valid" : valid === false ? "Invalid" : "Undefined" }}
  </v-chip>
</template>

<script setup lang="ts">
const props = defineProps({
  valid: { 
    type: Boolean, 
    required: false,
    default: undefined 
  },
  size: { 
    type: String, 
    required: false, 
    default: 'default' 
  },
  label: { 
    type: Boolean, 
    required: false, 
    default: false 
  },
});

const color = (valid: boolean | undefined): string => {
  if (valid === true) return "success";   // Green for valid
  if (valid === false) return "error";    // Red for invalid
  return "warning";                          // Gray for undefined
};
</script>
