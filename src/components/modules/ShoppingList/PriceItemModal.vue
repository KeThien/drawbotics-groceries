<template>
  <v-dialog v-model="dialog" persistent full-width>
    <v-card>
      <v-card-title>
        <h3>{{item.name}}</h3>
        <p>{{item.category}}</p>
      </v-card-title>
      <v-card-text>
        <v-select
          v-model="selectedCat"
          :items="categories.map(category => category.name)"
          label="Category"
          color="pink"
          no-data-text="no category"
          clearable
        ></v-select>
        <v-text-field
          v-model="itemPrice"
          label="Price"
          clearable
          prefix="€"
          autofocus
          :rules="[rules.number]"
        ></v-text-field>
        <v-autocomplete :items="itemUser" label="Who"></v-autocomplete>
      </v-card-text>
      <v-card-actions>
        <v-layout row justify-space-around align-center wrap>
          <v-btn color="red darken-1" flat @click="handleDelete">Delete</v-btn>
          <v-btn color="grey darken-1" flat @click="dialog = false">Cancel</v-btn>
          <v-btn color="teal darken-1" flat @click="handleEdit">Edit</v-btn>
          <v-btn color="teal darken-1" small outline @click="handleCheck">{{isChecked}}</v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { log } from "util";
export default {
  props: {
    item: Object,
    open: Boolean
  },
  data() {
    return {
      itemPrice: null,
      itemUser: [],
      rules: {
        number: value => {
          if (value == null || value == "") {
            return true;
          } else {
            const pattern = /^[0-9]+(\.[0-9]{0,2})?$/;
            return pattern.test(value) || "Must be a number.";
          }
        }
      }
    };
  },
  mounted() {
    this.itemPrice = this.item.price;
    this.itemUser = this.$store.state.shoppingList.users.map(obj => obj.name);
  },
  methods: {
    handleCheck() {
      this.dialog = false;
      this.$emit("toggleCheck");
    },
    handleEdit() {
      // submit price and user to database
      console.log("edited");

      this.dialog = false;
      this.$store.commit("editPrice", this.item.id, this.itemPrice);
    },
    handleDelete() {
      this.dialog = false;
      this.$store.commit("deleteItem", this.item.id);
      this.$emit("clickDelete");
    }
  },
  computed: {
    dialog: {
      get() {
        return this.open;
      },
      set(newValue) {
        this.$emit("closeModal", newValue);
      }
    },
    isChecked() {
      return this.item.completed ? "uncheck" : "check";
    },
    categories() {
      return this.$store.state.shoppingList.categories;
    },
    selectedCat: {
      get() {
        let categoryID = this.item.categoryID;
        if (categoryID !== null) {
          let categoryName = this.categories.filter(c => c.id == categoryID)[0]
            .name;
          return categoryName;
        } else {
          return null;
        }
      },
      set(newValue) {
        return newValue;
      }
    }
  }
};
</script>

<style>
</style>
