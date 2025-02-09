<script setup>
const localePath = useLocalePath();
</script>
<template>
  <div class="container">
    <SharedHero
      :title="$t('aboutPage.title')"
      :description="$t('aboutPage.description')"
      :action="{ to: localePath('/kontakt'), label: $t('contactPage.title') }"
    />
    <div class="md:px-6 max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12">
      <div class="col-span-12 lg:col-span-9">
        <SharedSimplePage />
      </div>
      <SharedToc />
    </div>
  </div>
</template>