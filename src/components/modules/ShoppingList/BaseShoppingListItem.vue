<template>
  <v-flex my-1 xs12>
    <v-card flat @click="$emit('toggleItem')">
      <v-layout row fill-height align-center pa-2>
        <v-flex xs10 pl-2>
          <h3>{{ item.name }}</h3>
        </v-flex>
        <v-flex>
          <v-btn flat icon color="grey">
            <v-icon>create</v-icon>
          </v-btn>
        </v-flex>
        <v-flex>
          <v-checkbox v-model="isChecked" hide-details color="pink"></v-checkbox>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "ShoppingListItem",
  data() {
    return {
      isChecked: null
    };
  },
  props: {
    item: Object
  },
  mounted() {
    this.isChecked = this.item.completed;
  }
};
</script>

<style lang="scss" scoped>
//Margin and Padding Top for checkbox reset to 0
.v-input--selection-controls {
  margin-top: 0;
  padding-top: 0;
}
.v-card {
  cursor: pointer;
}
</style>