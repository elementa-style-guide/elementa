<template>
  <select
    :class="$options.name"
    v-model="control.value"
  >
    <option v-for="option in control.options" :key="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: `ElementaControlSelect`,
  props: {
    control: {
      type: Object,
    },
  },
};
</script>
