import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

import movies from './movies/movies';
import user from './user/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    user
  },
  plugins: [vuexLocal.plugin],
});
