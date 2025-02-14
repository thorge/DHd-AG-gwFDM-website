<script setup lang="ts">
const route = useRoute()

// take category from route params & make first char upper
const category = computed(() => {
  const name = route.params.category || ''
  let strName = ''

  if (Array.isArray(name)) strName = name.at(0) || ''
  else strName = name
  return strName
})
</script>

<template>
  <div class="container mx-auto">
    <div class="badge text-base-content/70 border-base-content/50 p-6 my-4 mx-2">
      <h1 class="font-semibold leading-tight text-xl md:text-2xl">
        #{{ category }}
      </h1>
    </div>
  </div>
</template>
