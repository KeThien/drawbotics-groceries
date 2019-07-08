<template>
  <div>
    <v-card class="mx-auto my-3 text-xs-center" max-width="600">
      <v-card-text>
        <column-chart :data="totalSpentByUser" prefix="€" :messages="{empty: 'No data'}"></column-chart>
      </v-card-text>
      <v-card-text>
        <div class="display-1 font-weight-thin">Users Spending</div>
      </v-card-text>
    </v-card>
    <v-card class="mx-auto my-3 text-xs-center" max-width="600">
      <v-card-text>
        <pie-chart :data="totalSpentByItem" prefix="€" :messages="{empty: 'No data'}"></pie-chart>
      </v-card-text>
      <v-card-text>
        <div class="display-1 font-weight-thin">Items Spending</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      // value: [423, 446, 675, 510, 590, 610, 456, 897, 432, 342, 683]
    };
  },
  computed: {
    totalSpentByUser() {
      const userList = this.users.map(user => user.name);
      let obj = {};
      let totalSpentByUser = [];
      userList.forEach(user => {
        let userSum = 0;
        this.items.forEach(item => {
          if (item.user === user) {
            userSum += item.price;
          }
        });
        if (userSum !== 0) {
          totalSpentByUser.push([user, userSum]);
        }
      });
      return totalSpentByUser;
    },
    totalSpentByItem() {
      let totalSpentByItem = [];
      this.items.forEach(item => {
        totalSpentByItem.push([item.name, item.price]);
      });
      return totalSpentByItem;
    },
    ...mapState({
      items: state => state.shoppingList.items,
      users: state => state.shoppingList.users
    })
  }
};
</script>

<style>
</style>
