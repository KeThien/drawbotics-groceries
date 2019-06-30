<template>
  <v-app>
    <TheHeading />

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import TheHeading from './components/core/TheHeading'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeading
  },
  data () {
    return {
      //
    }
  }
}
</script>
