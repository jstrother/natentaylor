import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    route: '/',
    routeName: 'Illustration',
  },
  mutations: {
    updateRoute(state, payload) {
      state.route = payload.route;
      state.routeName = payload.routeName;
    },
  },
});
