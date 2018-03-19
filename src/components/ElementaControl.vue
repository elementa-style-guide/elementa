<template>
  <div :class="$options.name">
    <label :class="`${$options.name}__label`" for="">{{ control.label }}</label>
    <select
      v-if="control.type === `select`"
      :class="`${$options.name}__control`"
      v-model="control.value"
    >
      <option v-for="option in control.options" :key="option">{{ option }}</option>
    </select>
    <input v-else :class="`${$options.name}__control`" v-model="control.value">
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
};
</script>
