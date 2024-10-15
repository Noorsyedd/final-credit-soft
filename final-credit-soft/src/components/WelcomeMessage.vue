<template>
  <div class="welcome-message">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-5" elevation="10">
            <v-img
              src="../assets/agrani.png"
              alt="Credit Information Reporting"
              height="200"
              class="mb-4"
            ></v-img>
            <v-card-title class="headline primary--text">
              Credit Information Reporting System
            </v-card-title>
            <v-divider class="my-4"></v-divider>
            <v-card-text>
              <v-icon color="primary" class="mr-2">mdi-information</v-icon>
              <span>
                Hello and welcome to the Agrani Bank PLC Credit Information
                Reporting System Dashboard. Here you can manage inquiries,
                reporting, data corrections, and much more.
              </span>
              <br /><br />
              <v-icon color="primary" class="mr-2"
                >mdi-help-circle-outline</v-icon
              >
              <span>
                If you need any assistance, please feel free to contact our
                support team.
              </span>
            </v-card-text>
            <v-divider class="my-4"></v-divider>
            <v-card-actions>
              <v-btn color="primary" dark>Contact Support</v-btn>
              <v-btn color="secondary" outlined class="ml-2">Learn More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "WelcomeMessage",
};
</script>

<style scoped>
.welcome-message {
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-card {
  border-radius: 12px;
}

.v-img {
  border-radius: 12px;
}

.primary--text {
  color: #1976d2;
}
</style>
