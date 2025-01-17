<script setup>
const localePath = useLocalePath();
</script>
<template>
  <div
    class="flex flex-col dark:text-zinc-300 my-5 md:my-0 md:justify-self-center"
  >
    <p class="dark:text-zinc-300 text-base font-semibold">Links</p>
    <NuxtLink :to="localePath('/aktuelles')" class="hover:underline">
      {{ $t("newsPage.title") }}
    </NuxtLink>
    <NuxtLink :to="localePath('/veranstaltungen')" class="hover:underline">
      {{ $t("eventsPage.title") }}
    </NuxtLink>
    <NuxtLink :to="localePath('/publikationen')" class="hover:underline">
      {{ $t("publicationsPage.title") }}
    </NuxtLink>
    <NuxtLink :to="localePath('/ueber-uns')" class="hover:underline">
      {{ $t("aboutPage.title") }}
    </NuxtLink>
    <NuxtLink
      to="https://dhd-ag-datenzentren-dienstekatalog.github.io/"
      class="hover:underline"
      target="_blank"
    >
      {{ $t("serviceCatalogue") }}
    </NuxtLink>
    <NuxtLink :to="localePath('/impressum')" class="hover:underline">
      {{ $t("imprintPage.title") }}
    </NuxtLink>
  </div>
</template>
