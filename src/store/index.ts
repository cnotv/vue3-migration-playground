import { createStore } from "vuex";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    test: {
      namespaced: true,
      state: {},
      mutations: {},
      actions: {},
      getters: {
        getTest: () => "this is a getter test"
      }
    }
  }
});
