<template>
  <v-layout align-center>
    <v-flex xs9 offset-xs1>
      <v-select :items="categories" label="Category"></v-select>
    </v-flex>
    <v-flex xs1>
      <v-btn flat icon color="pink">
        <v-icon>add</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      categories: ["Foo", "Bar", "Fizz", "Buzz"]
    };
  }
};
</script>

<style>
</style>
