<template>
  <div :class="$options.name">
    <label :class="`${$options.name}__label`" :for="`control-${_uid}`">{{ control.label }}</label>
    <select
      v-if="control.type === `select`"
      :id="`control-${_uid}`"
      :class="`${$options.name}__control ${$options.name}__control--${control.type}`"
      v-model="control.value"
    >
      <option v-for="option in control.options" :key="option">{{ option }}</option>
    </select>
    <input
      v-else
      :id="`control-${_uid}`"
      :class="`${$options.name}__control ${$options.name}__control--${control.type}`"
      v-model="control.value"
    >
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
