<template>
  <v-container>
    <v-row>
      <v-col>
        <v-tabs centered>
          <v-tab> Login </v-tab>
          <v-tab-item class="pa-5">
            <Login></Login>
          </v-tab-item>
          <v-tab> Signup </v-tab>
          <v-tab-item class="pa-5">
            <Signup></Signup>
          </v-tab-item>
        </v-tabs>
      </v-col>
      <!-- <v-spacer></v-spacer>
      <v-col>
        <v-btn color="" elevation="2" @click="logout"><v-icon >mdi-arrow-up-bold-box-outline</v-icon></v-btn>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";

export default {
  name: "Home",
  data: () => ({}),
  components: {
    Login,
    Signup,
  },
  methods: {
    logout() {
      localStorage.removeItem("toke")
      localStorage.removeItem("email")
      localStorage.removeItem("role")
    }
  },
};
</script>
