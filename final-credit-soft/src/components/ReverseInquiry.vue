<template>
  <div class="reverse-inquiry-page">
    <h1>Reverse Inquiry Page</h1>
    <p>Welcome to the Reverse Inquiry page.</p>

    <!-- Form for Reverse Inquiry -->
    <form @submit.prevent="submitReverseInquiry">
      <label for="inquiryId">Inquiry ID:</label>
      <input
        v-model="inquiryId"
        type="text"
        id="inquiryId"
        placeholder="Enter Inquiry ID"
        required
      />

      <label for="inquiryDetails">Inquiry Details:</label>
      <textarea
        v-model="inquiryDetails"
        id="inquiryDetails"
        placeholder="Enter details of the inquiry"
        required
      ></textarea>

      <button type="submit">Submit Inquiry</button>
    </form>

    <!-- Feedback Section -->
    <div v-if="inquiryStatus" class="feedback">
      <p>{{ inquiryStatus }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReverseInquiry",
  data() {
    return {
      inquiryId: "",
      inquiryDetails: "",
      inquiryStatus: "",
    };
  },
  methods: {
    async submitReverseInquiry() {
      // Simulate inquiry submission (replace this with real API call)
      try {
        const response = await this.submitInquiry(
          this.inquiryId,
          this.inquiryDetails
        );
        if (response.success) {
          this.inquiryStatus = "Inquiry submitted successfully!";
        } else {
          this.inquiryStatus = "Failed to submit inquiry. Please try again.";
        }
      } catch (error) {
        this.inquiryStatus = "Error: Unable to submit inquiry.";
      }
    },
    async submitInquiry(inquiryId, inquiryDetails) {
      // Simulated API call for submitting inquiry data
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true });
        }, 1000); // Simulate network delay
      });
    },
  },
};
</script>

<style scoped>
.reverse-inquiry-page {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  text-align: center;
}

p {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  font-size: 16px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

.feedback {
  margin-top: 20px;
  text-align: center;
}

/* Responsive design */
@media (max-width: 768px) {
  h1 {
    font-size: 20px;
  }

  input,
  textarea {
    font-size: 14px;
  }

  button {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 18px;
  }

  input,
  textarea {
    font-size: 12px;
  }

  button {
    font-size: 12px;
  }
}
</style>
