// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import store from './store/index';

import Frame from './components/Frame';
import Search from './components/Search';
import Cover from './components/Cover';
import Rater from './components/Rater';
import Spinner from './components/Spinner';
import ShowCourse from './components/ShowCourse';
import CourseInfo from './components/CourseInfo';
import Form from './components/Form';
import CommentCard from './components/CommentCard';
import Footer from './components/Footer';
import Reporter from './components/Reporter';
import Register from './components/Register';

Vue.use(VueMaterial);
// Vue主题颜色设置
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
});
Vue.use(ElementUI);
Vue.component('Frame', Frame);
Vue.component('Search', Search);
Vue.component('Cover', Cover);
Vue.component('Rater', Rater);
Vue.component('Spinner', Spinner);
Vue.component('ShowCourse', ShowCourse);
Vue.component('CourseInfo', CourseInfo);
Vue.component('Form', Form);
Vue.component('CommentCard', CommentCard);
Vue.component('Footer', Footer);
Vue.component('Reporter', Reporter);
Vue.component('Register', Register);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});

