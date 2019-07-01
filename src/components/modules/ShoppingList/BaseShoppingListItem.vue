<template>
  <v-flex my-1 xs12>
    <v-card flat>
      <v-layout row fill-height align-center pa-2>
        <v-flex xs10 pl-2>
          <h4>This is a Shopping item</h4>
        </v-flex>
        <v-flex>
          <v-btn flat icon color="grey">
            <v-icon>create</v-icon>
          </v-btn>
        </v-flex>
        <v-flex>
          <v-checkbox hide-details></v-checkbox>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
//Margin and Padding Top for checkbox reset to 0
.v-input--selection-controls {
  margin-top: 0;
  padding-top: 0;
}
</style>