<template>
  <div>
    <SharedHero
      :title="$t('publicationsPage.title')"
      :description="$t('publicationsPage.description')"
    />
    <div class="mx-auto lg:max-w-content">
      <SharedSimplePage />
    </div>
  </div>
</template>