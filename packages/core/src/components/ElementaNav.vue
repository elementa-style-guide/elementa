<template>
  <nav :class="$options.name">
    <button
      :class="`${$options.name}__menuToggle`"
      aria-label="Open navigation"
      @click="active = !active"
    >
    </button>
    <div :class="{
      [`${$options.name}__list`]: true,
      'is-active': active,
    }">
      <elementa-nav-list :items="items"></elementa-nav-list>
    </div>
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
      active: false,
      items,
    };
  },
};
</script>
