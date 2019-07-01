<template>
  <v-app>
    <TheHeading />
    <v-content>
      <v-container>
        <BaseShoppingListCategory />
        <BaseShoppingList />
      </v-container>
    </v-content>
    <TheNavbar />
  </v-app>
</template>

<script>
import TheHeading from "./components/core/TheHeading";
import TheNavbar from "./components/core/TheNavbar";
import BaseShoppingList from "./components/modules/ShoppingList/BaseShoppingList";
import BaseShoppingListCategory from "./components/modules/ShoppingListCategory/BaseShoppingListCategory";

export default {
  name: "App",
  components: {
    TheHeading,
    TheNavbar,
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
