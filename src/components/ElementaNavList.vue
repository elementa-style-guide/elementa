<template>
  <ul :class="$options.name">
    <li v-for="(item, index) in items" :key="index">
      <router-link v-if="item.route" :to="item.route">
        {{ item.title }}
      </router-link>
      <span v-else>{{ item.title }}</span>
      <elementa-nav-list v-if="item.children" :items="item.children"></elementa-nav-list>
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
