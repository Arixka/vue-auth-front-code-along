<template>
  <div>
    <v-app-bar>
      <v-row align="center" justify="center">
        <v-col cols="2">
          <v-btn>Types</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn>Pokemons</v-btn>
        </v-col>
        <v-spacer></v-spacer>
        <Logout></Logout>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
import Logout from '../components/Logout.vue'
export default {
  name: "Logged",
  components: {
    Logout,
  },

};
</script>

<style>
</style>