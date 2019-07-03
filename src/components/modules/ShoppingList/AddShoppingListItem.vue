<template>
  <v-flex my-1 xs12>
    <v-btn block flat class="dashed-border-btn" @click="handleAddItem">
      <span>Add an item</span>
      <v-icon small>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" persistent full-width>
      <v-card>
        <v-card-title>
          <h3>Add an item</h3>
        </v-card-title>
        <v-card-text>
          <v-form @submit="handleSubmitItem">
            <v-text-field v-model="newName" autofocus label="Name" clearable></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="teal darken-1" flat @click="dialog = false">Cancel</v-btn>
          <v-btn color="teal darken-1" flat @click="handleSubmitItem">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      newName: null
      // newItem: {
      //   id: null,
      //   name: null,
      //   completed: false,
      //   price: null,
      //   user: null,
      //   category: null
      // }
    };
  },
  mounted() {},
  methods: {
    handleAddItem() {
      this.dialog = true;
    },
    handleSubmitItem() {
      this.dialog = false;
      this.$store.commit("addItem", this.newName);
      this.newName = null;
      this.$emit("shoppingListChange");
    }
  }
};
</script>

<style lang="scss" scoped>
.dashed-border-btn {
  background-color: transparent;
  border: 2px dashed lightgrey;
  cursor: pointer;
}
</style>