<template>
  <v-layout column my-4>
    <AddShoppingItem />

    <BaseShoppingListItem
      v-for="(item, index) in itemsActive"
      :key="index"
      :item="item"
      @checking="checking(item.id)"
    />
    <v-flex my-4>
      <v-expansion-panel flat expand v-model="completedPanel">
        <v-expansion-panel-content>
          <template v-slot:header>
            <div>Completed</div>
          </template>
          <BaseShoppingListItem
            v-for="(item, index) in itemsCompleted"
            :key="index"
            :item="item"
            @checking="checking(item.id)"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import BaseShoppingListItem from "./BaseShoppingListItem";
import AddShoppingItem from "./AddShoppingItem";
import { mapGetters } from "vuex";

export default {
  name: "BaseShoppingList",
  components: {
    BaseShoppingListItem,
    AddShoppingItem
  },
  data() {
    return {
      completedPanel: [true]
    };
  },
  computed: {
    items() {
      return this.$store.state.shoppingList.items;
    },
    ...mapGetters(["itemsActive", "itemsCompleted"])
  },
  mounted() {},
  methods: {
    checking(id) {
      console.log(id);
      this.$store.commit("checking", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-expansion-panel {
  box-shadow: none;
  .v-expansion-panel__container {
    background-color: transparent !important;
  }
}
</style>

