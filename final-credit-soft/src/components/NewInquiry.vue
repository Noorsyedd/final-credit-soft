<template>
  <div class="new-inquiry-page">
    <h1>New Inquiry Page</h1>
    <p>
      Welcome to the New Inquiry page. Here you can submit new inquiries related
      to our services.
    </p>

    <div class="inquiry-form">
      <h2>Submit a New Inquiry</h2>
      <form @submit.prevent="submitInquiry">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="inquiry.name" required />
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="inquiry.email" required />
        </div>

        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="inquiry.message" required></textarea>
        </div>

        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewInquiry",
  data() {
    return {
      inquiry: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitInquiry() {
      // Handle the submission of the inquiry
      console.log("Inquiry submitted:", this.inquiry);
      // You can add API call or any other logic here to handle the inquiry
      alert("Inquiry submitted successfully!");
      // Reset the form
      this.inquiry.name = "";
      this.inquiry.email = "";
      this.inquiry.message = "";
    },
  },
};
</script>

<style scoped>
.new-inquiry-page {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h2 {
  color: #007bff;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
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
