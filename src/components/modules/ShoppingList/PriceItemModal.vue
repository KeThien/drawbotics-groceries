<template>
  <v-dialog v-model="dialog" persistent full-width>
    <v-card>
      <v-card-title>
        <h3>{{item.name}}</h3>
        <p>{{item.category}}</p>
      </v-card-title>
      <v-card-text>
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
        <v-spacer></v-spacer>
        <v-btn color="teal darken-1" flat @click="dialog = false">Cancel</v-btn>
        <v-btn color="teal darken-1" flat @click="handleEdit">Edit</v-btn>
        <v-btn color="teal darken-1" small outline @click="handleCheck">{{isChecked}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
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
      this.dialog = false;
      this.$store.commit("editPrice", this.item.id, this.itemPrice);
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
    }
  }
};
</script>

<style>
</style>
