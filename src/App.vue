<template>
  <v-app>
    <TheHeading />
    <v-content>
      <v-container>
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
export default {
  name: "App",
  components: {
    TheHeading,
    TheNavbar,
    BaseShoppingList
  },
  data() {
    return {
      //
    };
  }
};
</script>
