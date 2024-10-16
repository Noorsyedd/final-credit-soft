<template>
  <div class="link-data-container">
    <h1 class="page-title">Link Data Entry</h1>
    <p class="page-subtitle">
      Link various entities such as accounts, loans, and more.
    </p>

    <form @submit.prevent="submitForm" class="link-form">
      <!-- Link Information Section -->
      <div class="form-section">
        <h2>Link Information</h2>

        <div class="form-group">
          <label for="person_id">Person ID</label>
          <input
            type="text"
            id="person_id"
            v-model="linkData.person_id"
            required
          />
        </div>

        <div class="form-group">
          <label for="account_number">Account Number</label>
          <input
            type="text"
            id="account_number"
            v-model="linkData.account_number"
            required
          />
        </div>

        <div class="form-group">
          <label for="contract_number">Contract Number</label>
          <input
            type="text"
            id="contract_number"
            v-model="linkData.contract_number"
            required
          />
        </div>

        <div class="form-group">
          <label for="link_type">Link Type</label>
          <select id="link_type" v-model="linkData.link_type" required>
            <option value="account">Account</option>
            <option value="contract">Contract</option>
            <option value="loan">Loan</option>
            <option value="reference">Reference</option>
          </select>
        </div>

        <div class="form-group">
          <label for="link_date">Link Date</label>
          <input
            type="date"
            id="link_date"
            v-model="linkData.link_date"
            required
          />
        </div>

        <div class="form-group">
          <label for="status">Status</label>
          <select id="status" v-model="linkData.status" required>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LinkData",
  data() {
    return {
      linkData: {
        person_id: "",
        account_number: "",
        contract_number: "",
        link_type: "",
        link_date: "",
        status: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission, such as making an API call.
      console.log("Link data submitted:", this.linkData);

      // Example: Sending data to server using fetch or axios
      fetch("http://localhost:5000/api/submit-link-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.linkData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Link data submitted successfully!");
            // Optionally clear form or redirect
          } else {
            alert("Error submitting link data.");
          }
        })
        .catch((error) => console.error("Error:", error));
    },
  },
};
</script>

<style scoped>
.link-data-container {
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

.link-form {
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
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #007bff;
  outline: none;
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
