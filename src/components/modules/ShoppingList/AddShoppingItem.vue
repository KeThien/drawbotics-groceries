<template>
  <v-flex my-1 xs12>
    <v-btn block flat class="dashed-border-btn" @click="addItem">
      <span>Add an item</span>
      <v-icon small>add</v-icon>
    </v-btn>
  </v-flex>
</template>

<script>
export default {
  methods: {
    addItem: () => {
      console.log("addItem methods");
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

