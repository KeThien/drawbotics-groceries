<template>
  <v-layout column my-4>
    <AddShoppingItem />
    <BaseShoppingListItem />
    <BaseShoppingListItem />
    <BaseShoppingListItem />
  </v-layout>
</template>

<script>
import BaseShoppingListItem from "./BaseShoppingListItem";
import AddShoppingItem from "./AddShoppingItem";

export default {
  name: "BaseShoppingList",
  components: {
    BaseShoppingListItem,
    AddShoppingItem
  }
};
</script>

<style>
</style>
