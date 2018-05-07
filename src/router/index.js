import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

export default new Router({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    console.log('to', to);
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
});
