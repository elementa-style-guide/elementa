<template>
  <div :class="$options.name">
    <h3 v-if="$slots.title" :class="`${$options.name}__title`">
      <slot name="title"></slot>
    </h3>

    <div :class="`${$options.name}__component`">
      <slot></slot>
    </div>

    <div :class="`${$options.name}__controlCenter`">
      <h4>Control Center</h4>
      <elementa-control-center :controls="controls"></elementa-control-center>
    </div>
  </div>
</template>

<script>
import ElementaControlCenter from './ElementaControlCenter.vue';

export default {
  name: `ElementaDemo`,
  components: {
    ElementaControlCenter,
  },
  props: {
    controls: {
      type: Object,
    },
  },
};
</script>
