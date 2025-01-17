<script setup>
import Icon from "../Icon.vue";
const props = defineProps({ item: Object, level: Number });
const localePath = useLocalePath();
</script>

<template>
  <!---Single Item-->
  <v-list-item
    :to="localePath(item.to)"
    rounded
    class="mb-1"
    color="primary"
    :disabled="item.disabled"
    :target="item.type === 'external' ? '_blank' : ''"
    :active="(item.to === localePath('/') && $route.path === localePath('/')) || (item.to !== '/' && $route.path.startsWith(localePath(item.to)))"
  >
    <!---If icon-->
    <template v-if="item.icon" v-slot:prepend>
      <Icon :item="item.icon" :level="level" />
    </template>
    <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
    <!---If Caption-->
    <v-list-item-subtitle
      v-if="item.subCaption"
      class="text-caption mt-n1 hide-menu"
    >
      {{ item.subCaption }}
    </v-list-item-subtitle>
    <!---If any chip or label-->
    <template v-slot:append v-if="item.chip">
      <v-chip
        :color="item.chipColor"
        class="sidebarchip hide-menu"
        :size="'small'"
        :variant="item.chipVariant"
        :prepend-icon="item.chipIcon"
      >
        {{ item.chip }}
      </v-chip>
    </template>
  </v-list-item>
</template>
