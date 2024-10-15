<template>
  <div class="container">
    <div class="message-box">
      <h2>Submitted</h2>
      <p>Your form was successfully submitted.</p>
      <button @click="goBack">Back</button>
      <button @click="createNew">Create New</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessPage",
  methods: {
    goBack() {
      this.$router.go(-1); // Go back to the previous page
    },
    createNew() {
      this.$router.push({ name: "SubjectInfo" }); // Navigate to the form page
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.message-box {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
