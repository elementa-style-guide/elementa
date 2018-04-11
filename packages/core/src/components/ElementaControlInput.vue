<template>
  <input
    :id="id"
    :class="$options.name"
    v-model="control.value"
  >
</template>

<script>
export default {
  name: `ElementaControlInput`,
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
