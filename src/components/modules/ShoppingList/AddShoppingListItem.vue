<template>
  <v-flex my-1 xs12>
    <v-btn block flat class="dashed-border-btn" @click="handleAddItem">
      <span>Add an item</span>
      <v-icon small>add</v-icon>
    </v-btn>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      pouet: "pouet couin"
    };
  },
  mounted() {
    console.log(this.$store.state);
  },
  methods: {
    handleAddItem() {
      console.log(this.$store.state);
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