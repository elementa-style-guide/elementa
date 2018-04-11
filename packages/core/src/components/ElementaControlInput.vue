<template>
  <input
    :class="$options.name"
    v-model="control.value"
  >
</template>

<script>
export default {
  name: `ElementaControlInput`,
  props: {
    control: {
      type: Object,
    },
  },
};
</script>
