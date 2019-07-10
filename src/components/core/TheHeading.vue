<template>
  <div>
    <v-toolbar app dark color="teal lighten-1">
      <v-toolbar-title class="headline text-uppercase">
        <span>Groceries APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="isLogged === false" flat to="login">
        <span>Login</span>
      </v-btn>
      <v-btn v-if="isLogged === true" flat to="login" @click="logout">
        <span>Logout</span>
      </v-btn>
      <v-btn v-if="isAdmin === true && isLogged === true" flat>
        <span>Admin Panel</span>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdmin: false,
      user: "user"
    };
  },
  computed: {
    isLogged() {
      return this.$store.state.isLogged;
    }
  },
  methods: {
    logout() {
      this.$store.commit("logout");
    }
  }
};
</script>

<style>
</style>
