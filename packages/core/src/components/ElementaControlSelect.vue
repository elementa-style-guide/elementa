<template>
  <select
      :id="id"
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
    id: {
      type: String,
    },
    control: {
      type: Object,
    },
  },
};
</script>
