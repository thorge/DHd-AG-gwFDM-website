<template>
  <div class="container">
    <SharedHero :title="$t('imprintPage.title')" />
    <div class="md:px-6 max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12">
      <div class="col-span-12">
        <SharedSimplePage />
      </div>
    </div>
  </div>
</template>