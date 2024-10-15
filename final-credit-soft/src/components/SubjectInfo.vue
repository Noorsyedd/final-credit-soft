<template>
  <div class="form-container">
    <!-- Add New Button -->
    <button
      type="button"
      class="add-new-button"
      @click="addNewVerificationForm"
    >
      Add New Verification
    </button>

    <!-- New Fields Section -->
    <div class="verification-container">
      <div
        v-for="(fields, index) in verificationForms"
        :key="index"
        class="new-fields"
      >
        <div class="fields-header">
          <h2>Verification Information {{ index + 1 }}</h2>
          <button @click="removeVerificationForm(index)" class="remove-button">
            &times;
            <!-- Cross symbol -->
          </button>
        </div>

        <div class="form-group">
          <label :for="'dob-' + index">Date of Birth:</label>
          <input
            :id="'dob-' + index"
            type="date"
            v-model="fields.dob"
            required
            class="form-control"
          />
          <span class="required">*</span>
        </div>

        <div class="form-group">
          <label :for="'nid-' + index">NID:</label>
          <input
            :id="'nid-' + index"
            v-model="fields.nid"
            required
            class="form-control"
          />
          <span class="required">*</span>
        </div>

        <div class="form-group">
          <label :for="'country_of_birth-' + index">Place of Birth:</label>
          <select
            :id="'placeOfBirth-' + index"
            v-model="fields.placeOfBirth"
            required
            class="form-control"
          >
            <option value="">Select Place of Birth</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Nepal">Nepal</option>
            <option value="Sri Lanka">Sri Lanka</option>
          </select>
          <span class="required">*</span>
        </div>

        <button
          type="button"
          class="verify-button"
          @click="submitVerificationForm(fields)"
        >
          Verify
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstitutionInfo",
  data() {
    return {
      verificationForms: [], // Array to hold multiple verification forms
      errorMessage: "", // To store error messages if submission fails
    };
  },
  methods: {
    addNewVerificationForm() {
      this.verificationForms.push({
        dob: "",
        nid: "",
        country_of_birth: "",
        status: "",
      });
    },
    removeVerificationForm(index) {
      this.verificationForms.splice(index, 1); // Removes the form at the given index
    },

    async submitVerificationForm(fields) {
      try {
        // Log the form data before sending
        console.log("Submitting verification form:", {
          dob: fields.dob,
          nid: fields.nid,
          country_of_birth: fields.country_of_birth,
        });

        // Ensure all fields are filled out before submission
        if (!fields.dob || !fields.nid || !fields.placeOfBirth) {
          throw new Error(
            "Please fill out all required fields before submitting."
          );
        }

        const response = await fetch("http://localhost:5000/api/verification", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            dob: fields.dob,
            nid: fields.nid,
            placeOfBirth: fields.placeOfBirth,
          }),
        });

        // Log the response text for debugging
        const responseText = await response.text();
        console.log("Response from server:", responseText); // Log the raw response text

        if (!response.ok) {
          // If the response is not OK, throw an error with the response text
          throw new Error(responseText);
        }

        const data = JSON.parse(responseText); // Parse response as JSON
        // alert("Verification form submitted successfully!");
        console.log("Parsed response data:", data); // Log parsed response data for debugging

        // Optionally redirect after successful submission
        this.$router.push({ name: "Person" });
      } catch (error) {
        // Catch and display the error
        this.errorMessage =
          error.message ||
          "Failed to submit verification form. Please try again.";
        console.error("Verification Form Submission Error:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Your CSS styles remain unchanged */
.add-new-button {
  padding: 12px 20px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  background-color: #17a2b8;
  width: auto;
}

.add-new-button:hover {
  background-color: #117a8b;
}

.verification-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.new-fields {
  flex: 1 1 calc(50% - 20px);
  padding: 15px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.fields-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #555;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.form-control:focus {
  border-color: #007bff;
  outline: none;
}

.required {
  color: red;
  margin-left: 5px;
}

.remove-button {
  background: none;
  border: none;
  color: #dc3545;
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.remove-button:hover {
  color: #c82333;
}

.verify-button {
  padding: 12px 20px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  background-color: #28a745;
}

.verify-button:hover {
  background-color: #218838;
}

/* Responsive Design */
@media (max-width: 768px) {
  .new-fields {
    flex: 1 1 100%;
  }
}
</style>
