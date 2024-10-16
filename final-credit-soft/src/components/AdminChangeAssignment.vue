<template>
  <div class="admin-change-assignment">
    <h1>Admin Change Assignment Page</h1>
    <p>
      Welcome to the Admin Change Assignment page. You can update assignments
      below.
    </p>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="employeeName">Employee Name:</label>
        <input
          type="text"
          id="employeeName"
          v-model="employeeName"
          placeholder="Enter employee name"
          required
        />
      </div>

      <div class="form-group">
        <label for="currentAssignment">Current Assignment:</label>
        <input
          type="text"
          id="currentAssignment"
          v-model="currentAssignment"
          placeholder="Current assignment"
          required
        />
      </div>

      <div class="form-group">
        <label for="newAssignment">New Assignment:</label>
        <input
          type="text"
          id="newAssignment"
          v-model="newAssignment"
          placeholder="New assignment"
          required
        />
      </div>

      <button type="submit">Update Assignment</button>
    </form>

    <div v-if="confirmationMessage" class="confirmation">
      <p>{{ confirmationMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminChangeAssignment",
  data() {
    return {
      employeeName: "",
      currentAssignment: "",
      newAssignment: "",
      confirmationMessage: "",
    };
  },
  methods: {
    submitForm() {
      // Simulate updating the assignment
      this.confirmationMessage = `Assignment for ${this.employeeName} has been updated from "${this.currentAssignment}" to "${this.newAssignment}".`;
      this.clearForm();
    },
    clearForm() {
      this.employeeName = "";
      this.currentAssignment = "";
      this.newAssignment = "";
    },
  },
};
</script>

<style scoped>
.admin-change-assignment {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.confirmation {
  margin-top: 20px;
  font-weight: bold;
  color: green;
}
</style>
