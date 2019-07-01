// initial state
const state = {
  items: [
    { id: 0, name: 'Pamplemousse', completed: false },
    { id: 1, name: 'Banana', completed: false },
    { id: 2, name: 'Fraise', completed: false },
    { id: 3, name: 'Kiwi', completed: false },
    { id: 4, name: 'Courgette', completed: true }
  ]
}
// getters
const getters = {
  itemsCompleted: state => {
    return state.items.filter(item => item.completed)
  },
  itemsActive: state => {
    return state.items.filter(item => !item.completed)
  }
}
// actions
const actions = {}
// mutations
const mutations = {
  checking(state, id) {
    let isCompleted = state.items.find(item => item.id == id).completed
    state.items.find(item => item.id === id).completed = !isCompleted
  }
}
export default {
  state,
  getters,
  mutations
}
