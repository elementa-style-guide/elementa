<template>
  <nav :class="$options.name">
    <elementa-nav-list :items="items"></elementa-nav-list>
  </nav>
</template>

<script>
import ElementaNavList from './ElementaNavList.vue';

import items from '../navigation.json';

export default {
  name: `ElementaNav`,
  components: {
    ElementaNavList,
  },
  data() {
    return {
      items,
    };
  },
};
</script>
