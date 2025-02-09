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
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <SharedHero :title="$t('homePage.title')" :description="$t('homePage.description')" />
    <MainRecent />
  </main>
</template>