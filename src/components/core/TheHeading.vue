<template>
  <div>
    <v-toolbar app dark color="teal lighten-1">
      <v-toolbar-title class="headline text-uppercase">
        <span>Groceries APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="isLogged === false" flat @click="openModal">
        <span>Login</span>
      </v-btn>
      <v-btn v-if="isLogged === true" flat>
        <span>{{user}}</span>
      </v-btn>
      <v-btn v-if="isAdmin === true && isLogged === true" flat>
        <span>Admin Panel</span>
      </v-btn>
    </v-toolbar>
    <LoginModal :open="isOpenModal" @closeModal="closeModal($event)" />
  </div>
</template>

<script>
import LoginModal from "./LoginModal";

export default {
  components: {
    LoginModal
  },
  data() {
    return {
      isLogged: false,
      isAdmin: false,
      user: "user",
      isOpenModal: false
    };
  },
  methods: {
    openModal() {
      this.isOpenModal = true;
    },
    closeModal() {
      this.isOpenModal = false;
    }
  }
};
</script>

<style>
</style>
