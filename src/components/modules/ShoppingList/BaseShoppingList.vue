<template>
  <v-layout column my-4>
    <AddShoppingItem />

    <BaseShoppingListItem
      v-for="(item, index) in itemsActive"
      :key="index"
      :item="item"
      @toggleItem="toggleItem(item)"
    />
    <v-flex my-4>
      <v-expansion-panel mandatory expand v-model="completedPanel">
        <v-expansion-panel-content>
          <div slot="header">Completed</div>
          <BaseShoppingListItem
            v-for="(item, index) in itemsCompleted"
            :key="index"
            :item="item"
            @toggleItem="toggleItem(item)"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import BaseShoppingListItem from "./BaseShoppingListItem";
import AddShoppingItem from "./AddShoppingItem";

export default {
  name: "BaseShoppingList",
  components: {
    BaseShoppingListItem,
    AddShoppingItem
  },
  data() {
    return {
      completedPanel: [true],
      itemsActive: [],
      itemsCompleted: []
    };
  },
  computed: {
    items() {
      return this.$store.state.shoppingList.items;
    }
  },
  mounted() {
    this.itemsActive = this.items.filter(item => item.completed === false);
    this.itemsCompleted = this.items.filter(item => item.completed === true);
  },
  methods: {
    toggleItem(item) {
      console.log(item);
      if (!item.completed) {
        // push item to itemsCompleted
        this.itemsCompleted.unshift(item);
        // item to remove from itemsActive
        this.itemsActive = this.itemsActive.filter(e => e !== item);
      } else {
        this.itemsActive.push(item);
        this.itemsCompleted = this.itemsCompleted.filter(e => e !== item);
      }
      this.$store.commit("checking", item.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-expansion-panel {
  box-shadow: none;
  .v-expansion-panel__container {
    background-color: #f5f5f5 !important;
  }
}
</style>

