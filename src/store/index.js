import Vue from 'vue'
import Vuex from 'vuex'
import shoppingList from './modules/shoppingList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shoppingList
  },
  state: {
    users: [
      { id: 0, name: 'Mario', isAdmin: true },
      { id: 1, name: 'Yoshi', isAdmin: false },
      { id: 2, name: 'Hermione', isAdmin: false },
      { id: 3, name: 'Harry', isAdmin: false },
      { id: 4, name: 'Geralt', isAdmin: false },
      { id: 5, name: 'Yennefer', isAdmin: false }
    ]
  },
  mutations: {},
  actions: {}
})
