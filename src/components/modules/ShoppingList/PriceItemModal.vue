<template>
  <v-dialog v-model="dialog" persistent full-width>
    <v-card>
      <v-card-title>
        <h3>{{item.name}}</h3>
      </v-card-title>
      <v-card-text>
        <div>Price</div>
        <div>Who</div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="teal darken-1" flat @click="dialog = false">Cancel</v-btn>
        <v-btn color="teal darken-1" flat @click="dialog = false">Edit</v-btn>
        <v-btn color="teal darken-1" small outline @click="handleBuy">{{isChecked}}</v-btn>
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
      // dialog: false
    };
  },
  methods: {
    handleBuy(value) {}
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
