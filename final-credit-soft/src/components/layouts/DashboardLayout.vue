<template>
  <v-card>
    <v-layout row wrap>
      <v-flex>
        <v-container fluid>
          <RouterView class="content" />
        </v-container>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import NavigationBar from "./../NavigationBar.vue";

export default {
  mounted() {
    this.checkAuth();
  },
  components: {
    NavigationBar,
  },
  methods: {
    checkAuth() {
      const authToken = localStorage.getItem("authToken");

      // Check if authToken exists, if not, redirect to login
      if (!authToken) {
        this.$router.push({
          name: "LoginView",
        });
      }
      // Optionally, decode JWT and validate (if using JWTs for authToken)
    },
  },
};
</script>

<!-- <style scoped>
.content {
  display: flex;
  margin-left: 256px;
}

v-flex {
  flex-grow: 1;
}

v-container--fluid {
  padding: 0px;
}

/* Add your styles here */
</style> -->
