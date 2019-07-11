<template>
  <v-container>
    <v-card flat>
      <v-card-title>
        <h3>List of users</h3>
      </v-card-title>
      <v-card-text>
        <v-flex my-1 xs12>
          <v-btn block flat class="dashed-border-btn" @click="createNew">
            <span>Create new user</span>
            <v-icon small>add</v-icon>
          </v-btn>
        </v-flex>
      </v-card-text>
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
          <v-form v-if="!isAdding" @submit.prevent="handleEdit">
            <v-text-field v-model="currentUser.name" autofocus label="Name" clearable></v-text-field>
          </v-form>
          <v-form v-if="isAdding" @submit.prevent="handleAdd">
            <v-text-field v-model="newName" autofocus label="Name" clearable></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            v-if="!currentUser.isAdmin && !isAdding"
            color="red darken-1"
            flat
            @click="handleDelete(currentUser)"
          >Delete</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="teal darken-1" flat @click="dialog = false; isAdding = false">Cancel</v-btn>
          <v-btn v-if="!isAdding" color="teal darken-1" flat @click="handleEdit(currentUser)">Edit</v-btn>
          <v-btn v-if="isAdding" color="teal darken-1" flat @click="handleAdd">Add</v-btn>
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
      oldName: "",
      isAdding: false,
      newName: ""
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
    createNew() {
      this.dialog = true;
      this.isAdding = true;
    },
    handleAdd() {
      this.dialog = false;
      this.isAdding = false;
      let payload = {
        newName: this.newName
      };
      this.$store.commit("addUser", payload);
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
    handleDelete(user) {
      this.dialog = false;
      this.$store.commit("deleteUser", user);
    }
  }
};
</script>

<style>
</style>
