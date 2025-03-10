<template>
  <div class="drawer z-20 sticky top-0">
    <input v-model="isDrawerOpen" id="side-drawer" type="checkbox" class="drawer-toggle" />
    <div
      class="drawer-content flex flex-col bg-base-100/90 text-base-content z-30 flex h-16 w-full justify-center backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm"
    >
      <!-- Navbar -->
      <div class="navbar w-full">
        <div class="flex flex-1 md:gap-1 lg:gap-2 items-center">
          <div class="flex-none lg:hidden">
            <label
              for="side-drawer"
              aria-label="open sidebar"
              class="btn btn-square btn-ghost swap swap-rotate z-21"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="swap-off h-5 w-5 [:checked~*_&]:!opacity-0"
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
              <svg
                class="swap-on fill-current [:checked~*_&]:!rotate-0 [:checked~*_&]:!opacity-100 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon
                  points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
                />
              </svg>
            </label>
          </div>
          <div class="flex items-center gap-2">
            <LogoBrand />
          </div>
        </div>
        <div class="flex">
          <ul class="menu menu-horizontal max-lg:hidden">
            <!-- Navbar menu content here -->
            <li v-for="item in sidebarItems" v-bind:key="item">
              <NuxtLink :to="localePath(item.to)">{{
                $t(item.title)
              }}</NuxtLink>
            </li>
          </ul>
          <ul class="menu menu-horizontal">
            <li>
              <MainThemeToggle />
            </li>
            <li class="dropdown dropdown-bottom dropdown-end">
              <div tabindex="0" role="button" class="btn btn-ghost btn-sm">
                <IconLanguage size="20" stroke-width="1.5" />
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
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="drawer-side z-20">
      <label
        for="side-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <div class="bg-base-200 min-h-full w-60 pt-15">
        <ul class="menu p-4">
          <li v-for="item in sidebarItems" v-bind:key="item">
            <NuxtLink :to="localePath(item.to)" @click="isDrawerOpen = !isDrawerOpen">
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
        <ul tabindex="0" class="menu menu-horizontal">
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
          <li>
            <MainThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import sidebarItems from "~/components/main/sidebarItem";
import { IconLanguage } from "@tabler/icons-vue";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const siteConfig = useSiteConfig();

const config = useRuntimeConfig();

const isDrawerOpen = ref(false);

</script>