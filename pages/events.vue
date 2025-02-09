<template>
  <div class="container">
    <SharedHero :title="$t('eventsPage.title')" :description="$t('eventsPage.description')" />
    <div class="md:px-6 max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12">
      <div class="col-span-12 lg:col-span-9">
        <div
          class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
        >
          <SharedSimplePage />
        </div>
      </div>
      <SharedToc />
    </div>
  </div>
</template>