<script lang="ts" setup>
// // Generate OG Image
// defineOgImageComponent('About', {
//   headline: 'Greetings 👋',
//   title: "Foo",
//   description: 'Dive into web development with me and learn Js, Ts, Vue, Nuxt, Docker, k8s',
//   link: '/riyad.jpg',
// })
</script>

<template>
  <div class="mx-auto lg:max-w-content">
    <SharedHero
      :title="$t('homePage.title')"
      :description="$t('homePage.description')"
    />
    <MainRecent />
  </div>
</template>