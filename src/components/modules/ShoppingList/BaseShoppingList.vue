<template>
  <v-container fluid>
    <v-layout column>
      <v-flex>
        <p>This is the Shopping List component</p>
      </v-flex>
      <BaseShoppingListItem />
      <BaseShoppingListItem />
      <BaseShoppingListItem />
    </v-layout>
  </v-container>
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
