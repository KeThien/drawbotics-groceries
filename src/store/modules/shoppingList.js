// initial state
const state = {
  items: [
    {
      id: 0,
      name: 'Pamplemousse',
      completed: false,
      price: null,
      user: null,
      categoryID: 0
    },
    {
      id: 1,
      name: 'Banana',
      completed: false,
      price: null,
      user: null,
      categoryID: 0
    },
    {
      id: 2,
      name: 'Fraise',
      completed: false,
      price: null,
      user: null,
      categoryID: null
    },
    {
      id: 3,
      name: 'Pleurotte',
      completed: false,
      price: null,
      user: null,
      categoryID: 2
    },
    {
      id: 4,
      name: 'Courgette',
      completed: true,
      price: 3.5,
      user: null,
      categoryID: 1
    }
  ],
  categories: [
    { id: 0, name: 'Fruits' },
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
    return state.items.filter(item => item.completed === false)
  }
}
// actions
// const actions = {}

// mutations
const mutations = {
  checking(state, id) {
    console.log('item checked')
    let isCompleted = state.items.find(item => item.id == id).completed
    state.items.find(item => item.id === id).completed = !isCompleted
  },
  editItem(state, payload) {
    console.log('item edited')
    const item = state.items.find(item => item.id === payload.id)
    Object.assign(item, payload)
  },
  addItem(state, newName) {
    console.log(newName)
    let newItem = {
      id: state.items[state.items.length - 1].id + 1,
      name: newName,
      completed: false,
      price: null,
      user: null,
      categoryID: null
    }
    state.items.push(newItem)
    console.log('item added')
  },
  deleteItem(state, id) {
    console.log('item deleted')
    let newArray = state.items.filter(item => item.id !== id)
    state.items = newArray
    console.log(state.items)
  },
  addEditCategory(state, payload) {
    console.log(payload)
    if (payload.isEdit) {
      // payload.id
      // payload.newName
      let category = state.categories.filter(c => c.id == payload.id)
      category[0].name = payload.newName
      console.log('category edited')
    } else {
      let newCategory = {
        id: state.categories[state.categories.length - 1].id + 1,
        name: payload.newName
      }
      state.categories.push(newCategory)
      console.log('category added')
    }
  }
}
export default {
  state,
  getters,
  mutations
}
