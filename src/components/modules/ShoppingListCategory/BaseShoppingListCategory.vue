<template>
  <v-layout justify-center align-center my-3>
    <v-flex shrink>
      <v-btn flat color="pink">Show All</v-btn>
    </v-flex>
    <v-flex xs6 grow>
      <v-select
        v-model="selectedCat"
        :items="categories"
        item-text="name"
        item-value="id"
        label="Category"
        color="pink"
        no-data-text="no category"
      ></v-select>
    </v-flex>

    <v-flex xs1>
      <v-btn flat icon color="pink" @click="handleAddCategory">
        <v-icon>add</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs1>
      <v-btn :disabled="selectedCat == null" flat icon color="pink" @click="handleEditCategory">
        <v-icon>edit</v-icon>
      </v-btn>
    </v-flex>
    <v-dialog v-model="dialog" persistent full-width>
      <v-card>
        <v-card-title>
          <h3>{{ title }} a category</h3>
        </v-card-title>
        <v-card-text>
          <v-form @submit="handleSubmitCategory">
            <v-text-field v-model="newName" autofocus label="Name" clearable></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            v-if="title == 'Edit'"
            color="red darken-1"
            flat
            @click="handleDeleteCategory"
          >Delete</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="teal darken-1" flat @click="dialog = false">Cancel</v-btn>
          <v-btn color="teal darken-1" flat @click="handleSubmitCategory">{{title}}</v-btn>
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
      newName: null,
      title: ""
    };
  },
  computed: {
    categories() {
      return this.$store.state.shoppingList.categories;
    }
  },
  methods: {
    handleAddCategory() {
      this.title = "Add";
      this.dialog = true;
    },
    handleSubmitCategory() {
      this.dialog = false;
      this.$store.commit("addCategory", this.newName);
      this.newName = null;
    },
    handleEditCategory() {
      this.title = "Edit";
      this.dialog = true;
    },
    handleDeleteCategory() {
      this.dialog = false;
      console.log("delete");
    }
  }
};
</script>

<style>
</style>
