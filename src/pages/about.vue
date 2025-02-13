<script setup>
const localePath = useLocalePath();
</script>
<template>
  <div>
    <SharedHero
      :title="$t('aboutPage.title')"
      :description="$t('aboutPage.description')"
      :action="{ to: localePath('/kontakt'), label: $t('contactPage.title') }"
    />
    <div class="grid grid-cols-12 mx-auto lg:max-w-content">
      <div class="col-span-12 lg:col-span-9">
        <SharedSimplePage />
      </div>
      <SharedToc />
    </div>
  </div>
</template>