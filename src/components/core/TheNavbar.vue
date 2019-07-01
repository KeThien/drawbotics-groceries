<template>
  <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
    <v-btn color="teal" flat value="list">
      <span>List</span>
      <v-icon>list</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="stats">
      <span>Stats</span>
      <v-icon>pie_chart</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="Recipes">
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
