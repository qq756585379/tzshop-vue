// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
// 轮播图插件 https://www.npmjs.com/package/vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Loading from './components/Loading';
import store from './vuex/store';

Vue.use(Vuex);
Vue.use(Loading);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Vuex,
  components: {App},
  template: '<App/>'
});

// router.push('/home');
