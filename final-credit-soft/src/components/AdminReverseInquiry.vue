<template>
  <div class="admin-reverse-inquiry">
    <h1>Admin Reverse Inquiry Page</h1>
    <p>
      Welcome to the Admin Reverse Inquiry page. You can perform inquiries
      below.
    </p>

    <form @submit.prevent="submitInquiry">
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
        <label for="accountNumber">Account Number:</label>
        <input
          type="text"
          id="accountNumber"
          v-model="accountNumber"
          placeholder="Enter account number"
          required
        />
      </div>

      <button type="submit">Submit Inquiry</button>
    </form>

    <div v-if="inquiryResult" class="result">
      <h2>Inquiry Result:</h2>
      <p>{{ inquiryResult }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminReverseInquiry",
  data() {
    return {
      employeeName: "",
      accountNumber: "",
      inquiryResult: "",
    };
  },
  methods: {
    submitInquiry() {
      // Simulate a reverse inquiry result
      this.inquiryResult = `Inquiry for account number ${this.accountNumber} by ${this.employeeName} was successful.`;
      this.clearForm();
    },
    clearForm() {
      this.employeeName = "";
      this.accountNumber = "";
    },
  },
};
</script>

<style scoped>
.admin-reverse-inquiry {
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

.result {
  margin-top: 20px;
  font-weight: bold;
  color: green;
}
</style>
