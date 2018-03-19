<template>
  <div id="app">
    <elementa-layout>
      <router-view></router-view>
    </elementa-layout>
  </div>
</template>

<script>
// TODO change this path via webpack define?
import ElementaLayout from './components/ElementaLayout.vue';

export default {
  name: `ElementaRoot`,
  components: {
    ElementaLayout,
  },
};
</script>
