<template>
  <v-container>
    <v-card flat>
      <v-card-title>
        <h3>List of users</h3>
      </v-card-title>
      <v-card-text>
        <v-list v-for="user in users" :key="user.id">
          <v-list-tile avatar :key="user.name" @click="handleUser(user)">
            <v-list-tile-avatar>
              <img :src="user.avatar" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{user.name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialog" persistent full-width>
      <v-card>
        <v-card-text>
          <v-form @submit.prevent="handleEdit">
            <v-text-field v-model="currentUser.name" autofocus label="Name" clearable></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="red darken-1" flat @click="handleDelete">Delete</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="teal darken-1" flat @click="dialog = false">Cancel</v-btn>
          <v-btn color="teal darken-1" flat @click="handleEdit(currentUser)">Edit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      currentUser: {},
      dialog: false,
      oldName: ""
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    handleUser(user) {
      this.dialog = true;
      this.currentUser = user;
      this.oldName = user.name;
    },
    handleEdit(user) {
      this.dialog = false;
      console.log(user);
      let payload = {
        id: user.id,
        name: user.name,
        oldName: this.oldName
      };
      this.$store.commit("editUser", payload);
    },
    handleDelete(user) {}
  }
};
</script>

<style>
</style>
