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
          :items="categories"
          item-text="name"
          item-value="id"
          label="Category"
          color="pink"
          no-data-text="No category"
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
        <v-select
          v-model="selectedUser"
          :items="itemUser"
          item-text="name"
          item-value="id"
          label="Who"
          no-date-text="No User"
          clearable
        ></v-select>
      </v-card-text>
      <v-card-actions>
        <v-layout row justify-space-around align-center wrap>
          <v-btn color="red darken-1" flat @click="handleDelete">Delete</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="teal darken-1" small outline @click="handleCheck">{{isChecked}}</v-btn>
          <v-btn color="teal darken-1" flat @click="handleEdit">OK</v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "PriceItemModal",
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
      },
      isChanged: false,
      selectedCat: null,
      selectedUser: null
    };
  },
  mounted() {
    this.selectedUser = this.item.user;
    this.selectedCat = this.item.categoryID;
    this.itemPrice = this.item.price;
    this.itemUser = this.$store.state.users.map(obj => obj.name);
  },
  methods: {
    handleCheck() {
      // handler to check as completed
      this.dialog = false;
      this.$emit("toggleCheck");
    },
    handleEdit() {
      // handler to submit/edit price, user,categoryID to the store
      this.dialog = false;
      const payload = {
        id: this.item.id,
        price: Number(this.itemPrice),
        categoryID: this.selectedCat,
        user: this.selectedUser
      };
      this.$store.commit("editItem", payload);
    },
    handleDelete() {
      // handler to delete an item from the store
      this.dialog = false;
      this.$store.commit("deleteItem", this.item.id);
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
    }
  }
};
</script>

<style>
</style>
