import Vue from 'vue';
import Vuex from 'vuex';
import footer from './modules/footer';
import home from './modules/home';
import live from './modules/live';
import loginInfo from './modules/loginInfo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    footer,
    home,
    live,
    loginInfo
  }
});
