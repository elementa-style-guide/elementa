<template>
  <div id="app">
    <elementa-theme>
      <router-view></router-view>
    </elementa-theme>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved, import/extensions
import ElementaTheme from 'ELEMENTA_THEME';

export default {
  name: `ElementaRoot`,
  components: {
    ElementaTheme,
  },
};
</script>
