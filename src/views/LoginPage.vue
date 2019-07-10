<template>
  <v-container>
    <v-card flat>
      <v-card-title>
        <h3>Login to Your Account</h3>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="username" label="Username" autofocus :rules="[rules.required]"></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'visibility' : 'visibility_off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          @click:append="show1 = !show1"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-layout row justify-center>
          <v-btn color="teal darken-1" dark @click="handleLogin" :loading="loading">Log in</v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { setTimeout } from "timers";
import router from "../router";

export default {
  name: "LoginModal",
  props: {
    open: Boolean
  },
  data() {
    return {
      loading: false,
      show1: false,
      error: "",
      username: "",
      password: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 4 || "Min 4 characters"
      }
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  },
  methods: {
    handleLogin() {
      if (this.username !== "" && this.password !== "") {
        this.loading = true;
        setTimeout(() => (this.loading = false), 1000);
        console.log("login submitted");
      }
      this.$store.commit("logUser", {
        username: this.username,
        password: this.password
      });
      router.push({ path: "/" });
    }
  }
};
</script>

<style>
</style>
