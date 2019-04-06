import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    routeName: 'Illustration',
    menuHidden: true,
    subMenuHidden: true,
  },
  getters: {
    getMenuStatus(state) {
      return state.menuHidden;
    },
    getSubMenuStatus(state) {
      return state.subMenuHidden;
    },
  },
  mutations: {
    menuItemSelect(state, routeName) {
      state.routeName = routeName;
      state.menuHidden = true;
      state.subMenuHidden = true;
    },
    showMenu(state) {
      state.menuHidden = !state.menuHidden;
    },
    showSubMenu(state) {
      state.subMenuHidden = !state.subMenuHidden;
    },
  },
  actions: {
    storeClicked({ state }) {
      state.menuHidden = true;
      state.subMenuHidden = true;
    },
  },
});
