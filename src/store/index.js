import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    blogs: [{title: 'Blog 1', description: 'description', select: 'select'}]
  },
  mutations: {
    updateInput(state, payload) {
      state.name = payload;
    },
    submitForm(state, payload){
      state.blogs = [...state.blogs, payload];
      router.push('/');
    }
  },
  actions: {
    // submitForm(context){
    //   context.commit('submitForm')
    // }
  },
  modules: {}
});
