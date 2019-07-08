<template>
  <v-container>
    <BaseShoppingListCategory @chooseFilter="chooseFilter" />
    <BaseShoppingList :selectedCat="selectedCat" />
  </v-container>
</template>

<script>
import BaseShoppingList from "@/components/modules/ShoppingList/BaseShoppingList";
import BaseShoppingListCategory from "@/components/modules/ShoppingListCategory/BaseShoppingListCategory";

export default {
  name: "ListModule",
  components: {
    BaseShoppingList,
    BaseShoppingListCategory
  },
  data() {
    return {
      selectedCat: null
    };
  },
  methods: {
    chooseFilter(categoryID) {
      this.selectedCat = categoryID;
    }
  }
};
</script>

<style>
</style>
