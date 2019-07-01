<template>
  <v-app>
    <TheHeading />
    <v-content>
      <router-view />
    </v-content>
    <TheNavbar />
  </v-app>
</template>
<script>
import TheHeading from "./components/core/TheHeading";
import TheNavbar from "./components/core/TheNavbar";

export default {
  name: "App",
  components: {
    TheHeading,
    TheNavbar
  },
  data() {
    return {
      //
    };
  }
};
</script>