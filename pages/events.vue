<template>
  <div class="container">
    <SharedHero
      :title="$t('eventsPage.title')"
      :description="$t('eventsPage.description')"
    />
    <div class="md:px-6 max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12">
      <div class="col-span-12 lg:col-span-9">
        <SharedSimplePage />
      </div>
      <SharedToc />
    </div>
  </div>
</template>