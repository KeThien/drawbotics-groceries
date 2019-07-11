<template>
  <v-flex my-1 xs12>
    <v-card flat @click="openModal">
      <v-layout row fill-height align-center pa-2>
        <v-flex xs11 pl-2>
          <h3 class="item-name" :class="{completed :isChecked}">{{ item.name }}</h3>
          <span v-if="$store.getters.getCurrentUser.isAdmin">&nbsp; by {{ item.user }}</span>
        </v-flex>
        <v-flex xs1>
          <v-checkbox v-model="isChecked" hide-details readonly color="pink"></v-checkbox>
        </v-flex>
      </v-layout>
    </v-card>
    <PriceItemModal
      :open="isOpenModal"
      :item="item"
      @closeModal="closeModal($event)"
      @toggleCheck="toggleCheck"
      @clickDelete="clickDelete"
    />
  </v-flex>
</template>

<script>
import PriceItemModal from "./PriceItemModal";

export default {
  name: "ShoppingListItem",
  components: {
    PriceItemModal
  },
  data() {
    return {
      isChecked: null,
      isOpenModal: false
    };
  },
  props: {
    item: Object
  },
  mounted() {
    this.isChecked = this.item.completed;
  },
  methods: {
    openModal() {
      this.isOpenModal = true;
    },
    closeModal() {
      this.isOpenModal = false;
    },
    toggleCheck() {
      this.$emit("toggleItem");
    },
    clickDelete() {
      this.$emit("clickDelete");
    }
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
h3.item-name {
  display: inline;
  position: relative;
  &::before {
    position: absolute;
    top: 50%;
    content: "";
    display: none;
    height: 2px;
    width: 100%;
    background-color: black;
  }
  &.completed {
    &::before {
      display: block;
    }
  }
}
</style>