<template>
  <div class="container">
    <SharedHero :title="$t('contactPage.title')" :description="$t('contactPage.description')" />
    <div class="md:px-6 max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12">
      <div class="col-span-12">
        <SharedSimplePage />
      </div>
    </div>
  </div>
</template>