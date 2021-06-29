<template>
  <v-col>
    <v-btn color="red" elevation="2" @click="logout"
      ><v-icon>mdi-arrow-up-bold-box-outline</v-icon></v-btn
    >
  </v-col>
</template>

<script>
export default {
  name: "Logout",
  methods: {
    logout() {
      localStorage.removeItem("toke");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
    },
  },
};
</script>

<style>
</style>