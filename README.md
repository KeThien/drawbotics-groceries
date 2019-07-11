# 🍉 Front-end Project - Groceries

This is a Pet Project recruitment for Drawbotics. 

The goal is to provide a simple but complete app for managing groceries of a company. Basically, a list that everyone in the company can contribute to or check.  

The fake database is used with Vuex store for the purpose of this demo. That's why the password is not secure for user.
There is also few items and categories to play with.

All password are '1234'  
Mario is the admin and the rest are simple users

[**DEMO**](https://quirky-saha-ab0f86.netlify.com/#/) build in [Netlify](https://www.netlify.com/) 

Fake users to play with the demo:
```
  users: [
      { id: 0, name: 'Mario', isAdmin: true, password: '1234' },
      { id: 1, name: 'Yoshi', isAdmin: false, password: '1234' },
      { id: 2, name: 'Hermione', isAdmin: false, password: '1234' },
      { id: 3, name: 'Harry', isAdmin: false, password: '1234' },
      { id: 4, name: 'Geralt', isAdmin: false, password: '1234' },
      { id: 5, name: 'Yennefer', isAdmin: false, password: '1234' }
    ]
```


## Table of contents  <!-- omit in toc -->
- [🍉 Front-end Project - Groceries](#-Front-end-Project---Groceries)
  - [⌨️ Technologies](#️-Technologies)
  - [🚀 Install and launch the local server](#-Install-and-launch-the-local-server)
  - [📁 Source Folder Structure](#-Source-Folder-Structure)
    - [Shopping List Module](#Shopping-List-Module)
    - [Shopping List Category Component](#Shopping-List-Category-Component)
    - [Shopping Stats Module](#Shopping-Stats-Module)
    - [Store (Vuex)](#Store-Vuex)
  - [Admin Panel feature](#Admin-Panel-feature)
  - [💡 Possible Future features](#-Possible-Future-features)
  - [⌛ Features to add for a full-flegded app](#-Features-to-add-for-a-full-flegded-app)
  - [🌊 Workflow](#-Workflow)
  - [🎯 Challenges / Difficulties](#-Challenges--Difficulties)

## ⌨️ Technologies
[Vue.js](https://vuejs.org/) framework with [Vue-CLI](https://cli.vuejs.org/)  
[Vuetify](https://vuetifyjs.com/en/), [Vuex](https://vuex.vuejs.org/) and [Chartkick.js](https://chartkick.com/vue) plugin

## 🚀 Install and launch the local server 
```
npm install
npm run serve
```

## 📁 Source Folder Structure
```
├── assets
├── components
|   |── core
|   └── modules
|       ├── ShoppingList          
|       ├── ShoppingListCategory  
|       └── ShoppingStats         
├── plugins
├── store
|   └── modules                   
├── views
| App.vue
| main.js
| router.js
```

### Shopping List Module
The main module where you can:
- Browse through the shopping list
- Browse through the list of completed items
- Mark an item as bought and specify its cost
- Add new items to the shopping list
- Edit items from the shopping list
- Delete items from the shopping list
- Now Show only items for logged user (or all for the admin)

### Shopping List Category Component
- The app has categories for items
- Filter the views by Category
- Add new Category and add items in it
- Edit Category per item
- Delete Category and dissociate the items
  
### Shopping Stats Module
- Show stats graph: spending by users
- Show stats graph: spending by items

### Store (Vuex)
Use of the store to have variables around all the app and for this exercices, used like a local database.

Mutations to modify the "database" and have a CRUD-like to create, read, update and delete for items and categories

Getters to get computed variables with filtered objects or arrays
e.g. I just need the items that is mark as completed.

```javascript
const getters = {
  itemsCompleted: state => catId => {
    if (catId === null) {
      return state.items.filter(i => i.completed)
    } else {
      return state.items.filter(
        item => item.completed && item.categoryID === catId
      )
    }
  }
...
```
## Admin Panel feature
Last addition, now we can create new user and delete users with the admin account.  
username: Mario  
password: 1234

## 💡 Possible Future features
- Suggests recipes based on your shopping list 
- The app suggests recipes based on your shopping list

## ⌛ Features to add for a full-flegded app
- ~~Logins~~
- ~~Have a admin panel to create, delete user~~
- Have feedback: snackbar when succesful or error
- Have user panel / profile
- Have a Backend API for a real database online

## 🌊 Workflow
I'm not familiar with any workflow  so I use a
[Trello Board](https://trello.com/invite/b/T4loXLrl/5cc897cba3d5cedeb8cabcc18c385310/drawbotics-pet-project-groceries)
with kanban-like to overview what to do and what has been done.
Focus on each task and have milestones.
On github, I made branches per new features. So I can code and try without worrying breaking the main, core app.

## 🎯 Challenges / Difficulties
I didn't know how to use Vuex and is store before this project. So I'm very happy to have learn it from scratch and by typing the code.
Also learn about the basic of LocalStorage and play with the router for the auth feature.

