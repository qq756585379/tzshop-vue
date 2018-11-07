import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
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
