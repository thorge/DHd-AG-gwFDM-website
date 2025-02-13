<template>
  <div>
    <SharedHero
      :title="$t('contactPage.title')"
      :description="$t('contactPage.description')"
    />
    <div class="mx-auto lg:max-w-content">
      <SharedSimplePage />
    </div>
  </div>
</template>