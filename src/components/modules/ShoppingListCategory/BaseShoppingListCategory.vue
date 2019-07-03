<template>
  <v-layout align-center my-3>
    <v-flex xs9 offset-xs1>
      <v-select
        v-model="selectedCat"
        :items="categories"
        label="Category"
        color="pink"
        no-data-text="no category"
        clearable
      ></v-select>
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
      selectedCat: null
    };
  },
  computed: {
    categories() {
      console.log(this.$store.state.shoppingList.categories);
      let categoryListName = this.$store.state.shoppingList.categories.map(
        category => category.name
      );
      return categoryListName;
    }
  },
  mounted() {}
};
</script>

<style>
</style>
