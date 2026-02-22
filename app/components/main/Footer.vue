<script setup>
import sidebarItems from "~/components/main/sidebarItem";

const localePath = useLocalePath();
</script>
<template>
  <footer
    class="footer sm:footer-horizontal bg-base-200 text-base-content p-10 mt-10"
  >
    <div class="max-w-100">
      <h6 class="footer-title">{{ $t("footerAbout.title") }}</h6>
      <p class="py-2">
        {{ $t("footerAbout.description") }}
      </p>
      <span class="text-base-content/70">
        © {{ new Date().getFullYear() }} – AG gwFDM
      </span>
    </div>
    <nav>
      <h6 class="footer-title">Links</h6>
      <NuxtLink
        v-for="item in sidebarItems"
        v-bind:key="item"
        :to="localePath(item.to)"
        >{{ $t(item.title) }}</NuxtLink
      >

      <NuxtLink
        to="https://dhd-ag-datenzentren-dienstekatalog.github.io/"
        class="link link-hover"
        target="_blank"
      >
        {{ $t("serviceCatalogue") }}
      </NuxtLink>
      <NuxtLink :to="localePath('/impressum')" class="link link-hover">
        {{ $t("breadcrumb.items.imprint.label") }}
      </NuxtLink>
    </nav>
    <div class="max-w-100">
      <h6 class="footer-title">
        {{ $t("newsletter.title") }}
      </h6>
      <p class="text-base-content">
        {{ $t("newsletter.description") }}
      </p>
      <NuxtLink
        to="https://listserv.gwdg.de/mailman/listinfo/dhd-ag-datenzentren"
        target="_blank"
        class="btn btn-primary text-white border-primary"
      >
        {{ $t("newsletter.subscribe") }}
      </NuxtLink>
      <p class="mt-2 text-xs text-base-content/70">
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
  </footer>
</template>
