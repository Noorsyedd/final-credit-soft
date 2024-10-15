<template>
  <v-app>
    <v-container
      :class="{ 'no-padding': isLoginOrSignup }"
      fluid
      class="layout-container"
    >
      <!-- Conditionally render NavigationBar based on the current route -->
      <NavigationBar v-if="!hideNavbar" />
      <v-main>
        <!-- This is where other components will be rendered -->
        <router-view />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";

export default {
  name: "Layout",
  components: {
    NavigationBar,
  },
  computed: {
    hideNavbar() {
      // Check if the current route is login or signup by checking the path or name
      const hideNavbarPages = ["/login", "/signup"];
      return hideNavbarPages.includes(this.$route.path);
    },
    isLoginOrSignup() {
      // Add a computed property to check if the current route is login or signup
      const loginSignupPages = ["/login", "/signup"];
      return loginSignupPages.includes(this.$route.path);
    },
  },
};
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f5f5f5;
}

v-main {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.no-padding {
  padding: 0 !important;
}

/* If scoped style doesn't work, add this globally */
/* .v-application .v-container.no-padding {
  padding: 0 !important;
} */
</style>
