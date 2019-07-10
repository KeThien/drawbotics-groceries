import Vue from 'vue'
import Vuex from 'vuex'
import shoppingList from './modules/shoppingList'
import { longStackSupport } from 'q'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shoppingList
  },
  state: {
    isLogged: false,
    currentUserId: null,
    users: [
      { id: 0, name: 'Mario', isAdmin: true, password: '1234' },
      { id: 1, name: 'Yoshi', isAdmin: false, password: '1234' },
      { id: 2, name: 'Hermione', isAdmin: false, password: '1234' },
      { id: 3, name: 'Harry', isAdmin: false, password: '1234' },
      { id: 4, name: 'Geralt', isAdmin: false, password: '1234' },
      { id: 5, name: 'Yennefer', isAdmin: false, password: '1234' }
    ]
  },
  actions: {},
  mutations: {
    logUser(state, payload) {
      payload.username
      payload.password
      state.users.forEach(user => {
        if (
          user.name === payload.username &&
          user.password === payload.password
        ) {
          state.currentUserId = user.id
          state.isLogged = true
        }
      })
    },
    logout(state) {
      state.currentUserId = null
      state.isLogged = false
    }
  }
})
