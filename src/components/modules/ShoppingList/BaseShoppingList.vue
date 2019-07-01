<template>
  <v-layout column my-4>
    <AddShoppingItem />

    <BaseShoppingListItem v-for="(item, index) in itemsActive" :key="index" :item="item" />
    <v-flex my-4>
      <v-expansion-panel flat>
        <v-expansion-panel-content>
          <template v-slot:header>
            <div>Completed</div>
          </template>
          <BaseShoppingListItem v-for="(item, index) in itemsCompleted" :key="index" :item="item" />
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
  },
  computed: {
    items() {
      return this.$store.state.shoppingList.items;
    },
    itemsActive() {
      return this.items.filter(item => !item.completed);
    },
    itemsCompleted() {
      return this.items.filter(item => item.completed);
    }
  },
  mounted() {}
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

