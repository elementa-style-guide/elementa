<template>
  <div :class="$options.name">
    <label :class="`${$options.name}__label`" :for="id">
      {{ control.label }}
    </label>
    <component :is="component" :id="id" :control="control"></component>
  </div>
</template>

<script>
export default {
  name: `ElementaControl`,
  props: {
    control: {
      type: Object,
    },
  },
  computed: {
    component() {
      return `${this.control.type}Control`;
    },
    id() {
      // eslint-disable-next-line no-underscore-dangle
      return `control-${this._uid}`;
    },
  },
};
</script>
