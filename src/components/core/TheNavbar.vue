<template>
  <v-bottom-nav :value="true" absolute color="transparent">
    <v-btn color="teal" flat value="list" to="/">
      <span>List</span>
      <v-icon>list</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="stats" to="/stats">
      <span>Stats</span>
      <v-icon>pie_chart</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="Recipes" to="/recipes">
      <span>Recipes</span>
      <v-icon>local_dining</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {};
</script>

<style>
</style>
