import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    routeName: 'Illustration',
    menuHidden: true,
    modalHidden: true,
    fullsizeImage: '',
    fullsizeName: '',
  },
  getters: {
    getMenuStatus(state) {
      return state.menuHidden;
    },
    getModalStatus(state) {
      return state.modalHidden;
    },
    getFullsizeImage(state) {
      return state.fullsizeImage;
    },
    getFullsizeName(state) {
      return state.fullsizeName;
    },
  },
  mutations: {
    menuItemSelect(state, routeName) {
      state.routeName = routeName;
      state.menuHidden = true;
      state.modalHidden = true;
    },
    showMenu(state) {
      state.menuHidden = !state.menuHidden;
    },
    showModal(state) {
      state.modalHidden = !state.modalHidden;
    },
    closeModal(state) {
      state.fullsizeImage = '';
      state.fullsizeName = '';
      state.modalHidden = true;
    },
    closeMenu(state) {
      state.menuHidden = true;
    },
    fullsizeImage(state, payload) {
      state.fullsizeImage = payload;
    },
    fullsizeName(state, payload) {
      state.fullsizeName = payload;
    },
    storeClicked(state) {
      state.menuHidden = true;
    },
  },
});
