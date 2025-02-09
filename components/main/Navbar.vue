<template>
  <div class="drawer">
    <input id="side-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="navbar bg-base-100 w-full">
        <div class="flex-none lg:hidden">
          <label
            for="side-drawer"
            aria-label="open sidebar"
            class="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <div class="mx-2 flex-1 px-2">
          <LogoBrand />
        </div>
        <div class="navbar-end">
          <ul class="menu menu-horizontal max-lg:hidden">
            <!-- Navbar menu content here -->
            <li v-for="item in sidebarItems" v-bind:key="item">
              <NuxtLink :to="localePath(item.to)">{{
                $t(item.title)
              }}</NuxtLink>
            </li>
          </ul>
          <div class="dropdown dropdown-bottom dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost rounded-field">
              <IconLanguage size="24" stroke-width="1.5" />
            </div>
            <ul
              tabindex="0"
              class="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm"
            >
              <li
                v-for="locale in locales"
                :key="locale.code"
                color="primary"
                :aria-label="`Switch language to ${locale.code}`"
              >
                <NuxtLink :to="switchLocalePath(locale.code)">
                  {{ locale.code.toUpperCase() }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label
        for="side-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <li v-for="item in sidebarItems" v-bind:key="item">
          <NuxtLink :to="localePath(item.to)">
            <component
              :is="item.icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            />
            {{ $t(item.title) }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import sidebarItems from "~/components/main/sidebarItem";
import {
  IconLanguage,
} from "@tabler/icons-vue";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const siteConfig = useSiteConfig();

const config = useRuntimeConfig();
// const website = useWebsiteStore();
</script>