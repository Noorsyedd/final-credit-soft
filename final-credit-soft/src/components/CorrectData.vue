<template>
  <div class="correct-data-container">
    <h1 class="page-title">Correct Data Entry</h1>
    <p class="page-subtitle">Update or correct information related to the person or contract data.</p>

    <form @submit.prevent="submitCorrectionForm" class="correct-data-form">
      <!-- Correction Details Section -->
      <div class="form-section">
        <h2>Correction Information</h2>

        <div class="form-group">
          <label for="person_id">Person ID</label>
          <input type="text" id="person_id" v-model="correctionData.person_id" required />
        </div>

        <div class="form-group">
          <label for="correction_type">Correction Type</label>
          <select id="correction_type" v-model="correctionData.correction_type" required>
            <option value="name">Name</option>
            <option value="date_of_birth">Date of Birth</option>
            <option value="address">Address</option>
            <option value="contract_info">Contract Information</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="current_value">Current Value</label>
          <input type="text" id="current_value" v-model="correctionData.current_value" required />
        </div>

        <div class="form-group">
          <label for="corrected_value">Corrected Value</label>
          <input type="text" id="corrected_value" v-model="correctionData.corrected_value" required />
        </div>

        <div class="form-group">
          <label for="correction_reason">Reason for Correction</label>
          <textarea id="correction_reason" v-model="correctionData.correction_reason" required></textarea>
        </div>

        <div class="form-group">
          <label for="correction_date">Correction Date</label>
          <input type="date" id="correction_date" v-model="correctionData.correction_date" required />
        </div>
      </div>

      <button type="submit" class="submit-button">Submit Correction</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CorrectData",
  data() {
    return {
      correctionData: {
        person_id: "",
        correction_type: "",
        current_value: "",
        corrected_value: "",
        correction_reason: "",
        correction_date: "",
      },
    };
  },
  methods: {
    submitCorrectionForm() {
      // Handle form submission for correction
      console.log("Correction data submitted:", this.correctionData);

      // Example: Sending data to server using fetch or axios
      fetch("http://localhost:5000/api/correct-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.correctionData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Correction submitted successfully!");
            // Optionally reset the form or redirect
          } else {
            alert("Error submitting correction.");
          }
        })
        .catch((error) => console.error("Error:", error));
    },
  },
};
</script>

<style scoped>
.correct-data-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.page-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
}

.page-subtitle {
  font-size: 16px;
  color: #777;
  text-align: center;
  margin-bottom: 30px;
}

.correct-data-form {
  display: flex;
  flex-direction: column;
}

.form-section {
  margin-bottom: 30px;
}

.form-section h2 {
  font-size: 20px;
  color: #444;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #007bff;
  outline: none;
}

textarea {
  height: 100px;
  resize: vertical;
}

.submit-button {
  background-color: #007bff;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
