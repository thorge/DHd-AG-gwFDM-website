<template>
  <div class="container">
    <SharedHero
      :title="$t('publicationsPage.title')"
      :description="$t('publicationsPage.description')"
    />
    <div
      class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
    >
      <SharedSimplePage />
    </div>
  </div>
</template>