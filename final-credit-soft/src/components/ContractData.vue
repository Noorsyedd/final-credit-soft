<template>
  <div class="contract-data-container">
    <h1 class="page-title">Contract Data Entry</h1>
    <p class="page-subtitle">Please fill out the necessary contract details.</p>

    <form @submit.prevent="submitForm" class="contract-form">
      <!-- Contract Information Section -->
      <div class="form-section">
        <h2>Contract Information</h2>

        <div class="form-group">
          <label for="contract_type">Contract Type</label>
          <select
            id="contract_type"
            v-model="contractData.contract_type"
            required
          >
            <option value="loan">Loan</option>
            <option value="mortgage">Mortgage</option>
            <option value="credit_card">Credit Card</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="contract_number">Contract Number</label>
          <input
            type="text"
            id="contract_number"
            v-model="contractData.contract_number"
            required
          />
        </div>

        <div class="form-group">
          <label for="contract_date">Contract Date</label>
          <input
            type="date"
            id="contract_date"
            v-model="contractData.contract_date"
            required
          />
        </div>

        <div class="form-group">
          <label for="start_date">Start Date</label>
          <input
            type="date"
            id="start_date"
            v-model="contractData.start_date"
            required
          />
        </div>

        <div class="form-group">
          <label for="end_date">End Date</label>
          <input
            type="date"
            id="end_date"
            v-model="contractData.end_date"
            required
          />
        </div>

        <div class="form-group">
          <label for="status">Contract Status</label>
          <select id="status" v-model="contractData.status" required>
            <option value="active">Active</option>
            <option value="closed">Closed</option>
            <option value="defaulted">Defaulted</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      <!-- Payment Information Section -->
      <div class="form-section">
        <h2>Payment Information</h2>

        <div class="form-group">
          <label for="payment_terms">Payment Terms</label>
          <input
            type="text"
            id="payment_terms"
            v-model="contractData.payment_terms"
            required
          />
        </div>

        <div class="form-group">
          <label for="total_amount">Total Amount</label>
          <input
            type="number"
            id="total_amount"
            v-model="contractData.total_amount"
            required
          />
        </div>

        <div class="form-group">
          <label for="amount_paid">Amount Paid</label>
          <input
            type="number"
            id="amount_paid"
            v-model="contractData.amount_paid"
            required
          />
        </div>

        <div class="form-group">
          <label for="remaining_balance">Remaining Balance</label>
          <input
            type="number"
            id="remaining_balance"
            v-model="contractData.remaining_balance"
            required
          />
        </div>
      </div>

      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContractData",
  data() {
    return {
      contractData: {
        contract_type: "",
        contract_number: "",
        contract_date: "",
        start_date: "",
        end_date: "",
        status: "",
        payment_terms: "",
        total_amount: null,
        amount_paid: null,
        remaining_balance: null,
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission, such as making an API call.
      console.log("Contract data submitted:", this.contractData);

      // Example: Sending data to server using fetch or axios
      fetch("http://localhost:5000/api/submit-contract-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.contractData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Contract data submitted successfully!");
            // Optionally clear form or redirect
          } else {
            alert("Error submitting contract data.");
          }
        })
        .catch((error) => console.error("Error:", error));
    },
  },
};
</script>

<style scoped>
.contract-data-container {
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

.contract-form {
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
