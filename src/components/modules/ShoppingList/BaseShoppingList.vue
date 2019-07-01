<template>
  <v-layout column my-4>
    <AddShoppingItem />
    <BaseShoppingListItem />
    <BaseShoppingListItem />
    <BaseShoppingListItem />
    <v-flex my-4>
      <v-expansion-panel flat>
        <v-expansion-panel-content>
          <template v-slot:header>
            <div>Completed</div>
          </template>
          <BaseShoppingListItem />
          <BaseShoppingListItem />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
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

<style lang="scss" scoped>
.v-expansion-panel {
  box-shadow: none;
  .v-expansion-panel__container {
    background-color: transparent !important;
  }
}
</style>

