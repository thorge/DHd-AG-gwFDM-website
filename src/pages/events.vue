<template>
  <div class="container">
    <SharedHero
      :title="$t('eventsPage.title')"
      :description="$t('eventsPage.description')"
    />
    <div class="grid grid-cols-12 mx-auto lg:max-w-content">
      <div class="col-span-12 lg:col-span-9">
        <SharedSimplePage />
      </div>
      <SharedToc />
    </div>
  </div>
</template>