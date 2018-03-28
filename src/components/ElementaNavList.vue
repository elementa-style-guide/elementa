<template>
  <ul :class="$options.name">
    <li
      v-for="item in items"
      :key="item.slug"
      :class="{
        [`${$options.name}__item`]: true,
        [`${$options.name}__item--subTitleItem`]: !item.route,
      }"
    >
      <router-link
        v-if="item.route"
        :class="`${$options.name}__title ${$options.name}__title--link`"
        :to="item.route"
        active-class="is-active"
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
      type: Array,
      required: true,
    },
  },
};
</script>
