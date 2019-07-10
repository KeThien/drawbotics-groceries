<template>
  <v-dialog v-model="isOpen" persistent full-width>
    <v-card>
      <v-card-title>
        <h3>Login to Your Account</h3>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="username"
          label="Username"
          autofocus
          :rules="[rules.required]"
          clearable
        ></v-text-field>
        <v-form @submit.prevent="handleLogin">
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            clearable
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-layout row justify-space-around align-center wrap>
          <v-btn color="red darken-1" flat @click="isOpen = false">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="teal darken-1" flat type="submit">Log in</v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginModal",
  props: {
    open: Boolean
  },
  data() {
    return {
      show1: false,
      username: "",
      password: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },
  computed: {
    isOpen: {
      get() {
        return this.open;
      },
      set(newValue) {
        this.$emit("closeModal", newValue);
      }
    }
  },
  methods: {
    handleLogin() {
      console.log("login submitted");
    }
  }
};
</script>

<style>
</style>
