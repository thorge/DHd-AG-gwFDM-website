<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="md:px-6">
        <h1
          class="dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5"
        >
          {{ $t('categoryPage.title') }}
        </h1>
        <p class="dark:text-zinc-300">
          {{ $t('categoryPage.description') }}
        </p>
      </div>
      <!-- <div class="md:px-6 justify-self-center">
        <LogoDogs />
      </div> -->
    </div>
  </div>
</template>
