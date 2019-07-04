<template>
  <v-layout column my-4>
    <AddShoppingListItem @shoppingListChange="handleShoppingListChange" />
    <div style="max-height: 400px" class="scroll-y">
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
    </div>
  </v-layout>
</template>

<script>
import BaseShoppingListItem from "./BaseShoppingListItem";
import AddShoppingListItem from "./AddShoppingListItem";

export default {
  name: "BaseShoppingList",
  props: {
    selectedCat: Number
  },
  components: {
    BaseShoppingListItem,
    AddShoppingListItem
  },
  data() {
    return {
      completedPanel: [true]
    };
  },
  computed: {
    items() {
      return this.$store.getters.getFilteredList(this.selectedCat);
    },
    itemsActive: {
      get() {
        return this.items.filter(item => item.completed === false);
      },
      set(newValue) {
        return newValue;
      }
    },
    itemsCompleted: {
      get() {
        return this.items.filter(item => item.completed === true);
      },
      set(newValue) {
        return newValue;
      }
    }
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
      this.itemsActive = this.$store.getters.itemsActive(this.selectedCat);
      this.itemsCompleted = this.$store.getters.itemsCompleted(
        this.selectedCat
      );
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

