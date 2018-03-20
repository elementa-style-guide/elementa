<template>
  <ul :class="$options.name">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="`${$options.name}__item`"
    >
      <router-link
        v-if="item.route"
        :class="`${$options.name}__title ${$options.name}__title--link`"
        :to="item.route"
      >
        {{ item.title }}
      </router-link>
      <span
        v-else
        :class="`${$options.name}__title ${$options.name}__title--noLink`"
      >
        {{ item.title }}
      </span>

      <elementa-nav-list
        v-if="item.children"
        :items="item.children"
        :class="`${$options.name}--sub`"
      >
      </elementa-nav-list>
    </li>
  </ul>
</template>

<script>
export default {
  name: `ElementaNavList`,
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
};
</script>
