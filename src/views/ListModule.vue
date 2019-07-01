<template>
  <v-container>
    <BaseShoppingListCategory />
    <BaseShoppingList />
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
      //
    };
  }
};
</script>

<style>
</style>
