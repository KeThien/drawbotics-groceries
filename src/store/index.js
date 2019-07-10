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
      { id: 0, name: 'Mario' },
      { id: 1, name: 'Yoshi' },
      { id: 2, name: 'Hermione' },
      { id: 3, name: 'Harry' },
      { id: 4, name: 'Geralt' },
      { id: 5, name: 'Yennefer' }
    ]
  },
  actions: {},
  mutations: {}
})
