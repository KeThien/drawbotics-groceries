import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import shoppingList from './modules/shoppingList'

Vue.use(Vuex)
const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage,
  reducer: state => ({
    currentUserId: state.currentUserId,
    isLogged: state.isLogged
  })
})

export default new Vuex.Store({
  modules: {
    shoppingList
  },
  state: {
    isLogged: false,
    currentUserId: null,
    users: [
      {
        id: 0,
        name: 'Mario',
        isAdmin: true,
        password: '1234',
        avatar: require('../assets/avatar_mario.jpg')
      },
      {
        id: 1,
        name: 'Yoshi',
        isAdmin: false,
        password: '1234',
        avatar: require('../assets/avatar_yoshi.png')
      },
      {
        id: 2,
        name: 'Hermione',
        isAdmin: false,
        password: '1234',
        avatar: require('../assets/avatar_hermione.jpg')
      },
      {
        id: 3,
        name: 'Harry',
        isAdmin: false,
        password: '1234',
        avatar: require('../assets/avatar_harry.jpg')
      },
      {
        id: 4,
        name: 'Geralt',
        isAdmin: false,
        password: '1234',
        avatar: require('../assets/avatar_geralt.jpg')
      },
      {
        id: 5,
        name: 'Yennefer',
        isAdmin: false,
        password: '1234',
        avatar: require('../assets/avatar_yennefer.jpg')
      }
    ]
  },
  actions: {},
  mutations: {
    logUser(state, payload) {
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
    },
    addUser(state, payload) {
      let newUser = {
        id: state.users[state.users.length - 1].id + 1,
        name: payload.newName,
        password: '1234',
        isAdmin: false,
        avatar: 'https://i.pravatar.cc/300'
      }
      state.categories.push(newUser)
      console.log('user added')
    },
    editUser(state, payload) {
      let user = state.users.filter(user => user.id == payload.id)
      user[0].name = payload.name
      let userItems = state.shoppingList.items.filter(
        item => item.user == payload.oldName
      )
      userItems.forEach(item => (item.user = payload.name))
      console.log(userItems)

      console.log('user edited')
    },
    deleteUser(state, id) {
      console.log('user deleted')
      let newArray = state.users.filter(user => user.id !== id)
      state.users = newArray
    }
  },
  getters: {
    getCurrentUser: state => {
      const currentUserId = state.currentUserId
      const users = state.users
      const currentUser = users.find(user => user.id == currentUserId) || {
        isAdmin: false
      }
      return currentUser
    }
  },
  plugins: [vuexPersist.plugin]
})
