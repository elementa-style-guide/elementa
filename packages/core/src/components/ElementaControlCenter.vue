<template>
  <ul :class="$options.name">
    <li
      :class="`${$options.name}__control`"
      v-for="control in controls"
      :key="control.label"
    >
      <elementa-control :control="control"></elementa-control>
    </li>
  </ul>
</template>

<script>
import ElementaControl from './ElementaControl.vue';

export default {
  name: `ElementaControlCenter`,
  components: {
    ElementaControl,
  },
  props: {
    controls: {
      type: Object,
    },
  },
};
</script>
