<template>
  <v-layout column my-4>
    <AddShoppingListItem @shoppingListChange="handleShoppingListChange" />

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
import AddShoppingListItem from "./AddShoppingListItem";

export default {
  name: "BaseShoppingList",
  components: {
    BaseShoppingListItem,
    AddShoppingListItem
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
  created() {
    // this.itemsActive = this.items.filter(item => item.completed === false);
    // this.itemsCompleted = this.items.filter(item => item.completed === true);
    this.itemsActive = this.$store.getters.itemsActive;
    this.itemsCompleted = this.$store.getters.itemsCompleted;
  },
  methods: {
    toggleItem(item) {
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
    },
    handleShoppingListChange() {
      this.itemsActive = this.$store.getters.itemsActive;
      this.itemsCompleted = this.$store.getters.itemsCompleted;
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

