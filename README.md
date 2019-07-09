# 🍉 Front-end Project - Groceries

This is a Pet Project recruitment for Drawbotics. 

The goal is to provide a simple but complete app for managing groceries of a company. Basically, a list that everyone in the company can contribute to or check.

[**DEMO**](https://quirky-saha-ab0f86.netlify.com/#/) build in [Netlify](https://www.netlify.com/)



## Table of contents  <!-- omit in toc -->
- [🍉 Front-end Project - Groceries](#-Front-end-Project---Groceries)
  - [⌨️ Technologies](#️-Technologies)
  - [🚀 Install and launch the local server](#-Install-and-launch-the-local-server)
  - [📁 Source Folder Structure](#-Source-Folder-Structure)
    - [1. Shopping List Module](#1-Shopping-List-Module)
    - [2. Shopping List Category Component](#2-Shopping-List-Category-Component)
    - [3. Shopping Stats Module](#3-Shopping-Stats-Module)
    - [4. Store (Vuex)](#4-Store-Vuex)
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
|       ├── ShoppingList          <-- 1*
|       ├── ShoppingListCategory  <-- 2*
|       └── ShoppingStats         <-- 3*
├── plugins
├── store
|   └── modules                   <-- 4*
├── views
| App.vue
| main.js
| router.js
```

### 1. Shopping List Module
The main module where you can:
- Browse through the shopping list
- Browse through the list of completed items
- Mark an item as bought and specify its cost
- Add new items to the shopping list
- Edit items from the shopping list
- Delete items from the shopping list

### 2. Shopping List Category Component
- The app has categories for items
- Filter the views by Category
- Add new Category and add items in it
- Edit Category per item
- Delete Category and dissociate the items
  
### 3. Shopping Stats Module
- Show stats graph: spending by users
- Show stats graph: spending by items

### 4. Store (Vuex)
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

## 💡 Possible Future features
- Suggests recipes based on your shopping list 
- The app suggests recipes based on your shopping list

## ⌛ Features to add for a full-flegded app
- Logins
- Create users
- Have a admin panel to create user
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