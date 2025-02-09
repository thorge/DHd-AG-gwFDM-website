<template>
  <div>
    <p class="dark:text-zinc-300 text-base font-semibold">
      {{ $t("newsletter.title") }}
    </p>
    <p class="dark:text-zinc-300">
      {{ $t("newsletter.description") }}
    </p>
    <NuxtLink
      to="https://listserv.gwdg.de/mailman/listinfo/dhd-ag-datenzentren"
      target="_blank"
    >
      <v-btn block variant="flat" color="primary" class="mt-2">
        {{ $t("newsletter.subscribe") }}
      </v-btn>
    </NuxtLink>
    <p class="mt-2 text-xs dark:text-zinc-300">
      <i18n-t keypath="newsletter.visitArchive" scope="global">
        <template #link>
          <NuxtLink
            class="underline"
            to="https://listserv.gwdg.de/mailman/private/dhd-ag-datenzentren/"
            target="_blank"
          >
            {{ $t("newsletter.dhdArchive") }}
          </NuxtLink>
        </template>
      </i18n-t>
    </p>
  </div>
</template>
