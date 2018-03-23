import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: `history`,
  routes: [
    {
      component: () => import(`./components/ElementaRoot.vue`),
      name: `home`,
      path: `/`,
    },
    ## routes-placeholder ##
  ],
  scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition;
      }

      return { x: 0, y: 0 };
  },
});
