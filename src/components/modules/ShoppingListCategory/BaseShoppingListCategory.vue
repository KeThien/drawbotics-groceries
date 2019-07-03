<template>
  <v-layout align-center my-3>
    <v-flex xs9 offset-xs1>
      <v-select
        v-model="selectedCat"
        :items="categories"
        item-text="name"
        item-value="id"
        label="Category"
        color="pink"
        no-data-text="no category"
        clearable
      ></v-select>
    </v-flex>
    <v-flex xs1>
      <v-btn flat icon color="pink" @click="handleAddCategory">
        <v-icon>add</v-icon>
      </v-btn>
    </v-flex>
    <v-dialog v-model="dialog" persistent full-width>
      <v-card>
        <v-card-title>
          <h3>Add a category</h3>
        </v-card-title>
        <v-card-text>
          <v-form @submit="handleSubmitCategory">
            <v-text-field v-model="newName" autofocus label="Name" clearable></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="teal darken-1" flat @click="dialog = false">Cancel</v-btn>
          <v-btn color="teal darken-1" flat @click="handleSubmitCategory">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      selectedCat: null,
      dialog: false,
      newName: null
    };
  },
  computed: {
    categories() {
      return this.$store.state.shoppingList.categories;
    }
  },
  methods: {
    handleAddCategory() {
      this.dialog = true;
    },
    handleSubmitCategory() {
      this.dialog = false;
      this.$store.commit("addCategory", this.newName);
      this.newName = null;
    }
  }
};
</script>

<style>
</style>
