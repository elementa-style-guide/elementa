<template>
  <div id="app">
    <elementa-theme>
      <router-view></router-view>
    </elementa-theme>
  </div>
</template>

<script>
import ElementaTheme from 'ELEMENTA_THEME';

export default {
  name: `ElementaRoot`,
  components: {
    ElementaTheme,
  },
};
</script>
