// initial state
const state = {
  items: [
    {
      id: 0,
      name: 'Pamplemousse',
      completed: false,
      price: null,
      user: null,
      category: null
    },
    {
      id: 1,
      name: 'Banana',
      completed: false,
      price: null,
      user: null,
      category: null
    },
    {
      id: 2,
      name: 'Fraise',
      completed: false,
      price: null,
      user: null,
      category: null
    },
    {
      id: 3,
      name: 'Kiwi',
      completed: false,
      price: null,
      user: null,
      category: null
    },
    {
      id: 4,
      name: 'Courgette',
      completed: true,
      price: 3.5,
      user: null,
      category: null
    }
  ],
  categories: [
    { id: 0, name: 'Fruit' },
    { id: 1, name: 'Legumes' },
    { id: 2, name: 'Champignons' }
  ],
  users: [{ id: 0, name: 'Mario' }, { id: 1, name: 'Yoshi' }]
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
    console.log('item checked')
    let isCompleted = state.items.find(item => item.id == id).completed
    state.items.find(item => item.id === id).completed = !isCompleted
  },
  editPrice(state, id, price) {
    console.log('price edited')
    state.items.find(item => item.id === id).price = price
  }
}
export default {
  state,
  getters,
  mutations
}
