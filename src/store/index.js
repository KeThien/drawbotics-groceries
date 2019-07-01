import Vue from 'vue'
import Vuex from 'vuex'
import shoppingList from './modules/shoppingList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shoppingList
  },
  state: { count: 0 },
  mutations: {},
  actions: {}
})
