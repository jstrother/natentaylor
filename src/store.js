import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    routeName: 'Illustration',
  },
  mutations: {
    updateRoute(state, routeName) {
      state.routeName = routeName;
    },
  },
  actions: {
    setRoute({ commit }, routeName) {
      console.log('setRoute');
      commit('updateRoute', routeName);
    },
  },
});
