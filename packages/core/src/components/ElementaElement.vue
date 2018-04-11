<template>
  <div :class="$options.name">
    <h2 v-if="$slots.title" :class="`${$options.name}__title`">
      <slot name="title"></slot>
    </h2>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: `ElementaElement`,
};
</script>
