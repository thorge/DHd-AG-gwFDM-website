<template>
  <!------Sidebar-------->
  <v-navigation-drawer
    left
    elevation="0"
    app
    class="leftSidebar"
    v-model="sDrawer"
    aria-label="Sidebar Navigation"
  >
    <!---Logo part -->
    <div class="px-5 pt-5" :aria-label="siteConfig.subtitle ? siteConfig.subtitle : 'Brand Logo'">
      <LayoutFullLogo />
    </div>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <!-- <perfect-scrollbar class="scrollnavbar"> -->
    <div class="scrollnavbar">
      <v-list class="!p-6">
        <!---Menu Loop -->
        <template v-for="(item, i) in sidebarMenu">
          <!---Item Sub Header -->
          <LayoutFullVerticalSidebarNavGroup
            :item="item"
            v-if="item.header"
            :key="item.title"
            :aria-label="`Navigation Header Group ${item.title}`"
          />
          <!---Single Item-->
          <LayoutFullVerticalSidebarNavItem
            v-if="!item.header"
            :item="item"
            :key="item.title"
            class="leftPadding"
            :aria-label="`Navigation Item ${item.title}`"
          />
          <!---End Single Item-->
        </template>
      </v-list>
    </div>
  </v-navigation-drawer>
  <!------Header-------->
  <v-app-bar elevation="0" height="70">
    <div class="flex content-center justify-between w-100 maxWidth">
      <div>
        <v-btn
          class="hidden-lg-and-up ms-md-3 ms-sm-5 ms-3 text-muted"
          @click="sDrawer = !sDrawer"
          icon
          variant="flat"
          size="small"
          aria-label="Toggle Sidebar"
        >
          <IconMenu2 size="20" stroke-width="1.5" />
        </v-btn>
      </div>
      <div>
        <!-- Locale -->
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="primary" icon size="small"
              ><IconLanguage size="24" stroke-width="1.5"
            /></v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="locale in locales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              color="primary"
              :aria-label="`Switch language to ${locale.code}`"
            >
              <v-list-item-title class="text-body-1">
                {{ locale.code.toUpperCase() }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- Help -->
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="primary" icon size="small" class="mr-4">
              <IconHelpCircle size="24" stroke-width="1.5" />
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              :to="localePath('/ueber-uns')"
              color="primary"
              :aria-label="$t('aboutPage.title')"
            >
              <template v-slot:prepend>
                <IconInfoCircle stroke-width="1.5" size="20" />
              </template>
              <v-list-item-title class="!pl-4 text-body-1">
                {{ $t("aboutPage.title") }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              :to="localePath('/kontakt')"
              color="primary"
              :aria-label="$t('contactPage.title')"
            >
              <template v-slot:prepend>
                <IconMessages stroke-width="1.5" size="20" />
              </template>
              <v-list-item-title class="!pl-4 text-body-1">
                {{ $t("contactPage.title") }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </v-app-bar>
</template>
<script setup lang="ts">
import sidebarItems from "@/components/layout/full/vertical-sidebar/sidebarItem";
import { IconMenu2, IconHelpCircle, IconInfoCircle, IconMessages, IconLanguage } from "@tabler/icons-vue";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const siteConfig = useSiteConfig();

const config = useRuntimeConfig();
const website = useWebsiteStore();

const sidebarMenu = shallowRef(sidebarItems);
const sDrawer = ref(true);


</script>