<template>
  <v-layout column>
    <BaseShoppingListItem />
    <BaseShoppingListItem />
    <BaseShoppingListItem />
  </v-layout>
</template>

<script>
import BaseShoppingListItem from "./BaseShoppingListItem";

export default {
  name: "BaseShoppingList",
  components: {
    BaseShoppingListItem
  }
};
</script>

<style>
</style>
