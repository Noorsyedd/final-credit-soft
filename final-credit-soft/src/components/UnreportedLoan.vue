<template>
  <div class="unreported-loan-page">
    <h1>Unreported Loan</h1>
    <p>
      Welcome to the Unreported Loan section. Here, you can review details of
      loans that have not yet been reported.
    </p>

    <div class="loan-list">
      <!-- Example Unreported Loan Data -->
      <div class="loan-card" v-for="loan in loans" :key="loan.id">
        <h2>Loan ID: {{ loan.id }}</h2>
        <p><strong>Borrower Name:</strong> {{ loan.borrower }}</p>
        <p><strong>Occupation:</strong> {{ loan.occupation }}</p>
        <p><strong>Address:</strong> {{ loan.address }}</p>
        <p><strong>Amount:</strong> {{ loan.amount }}</p>
        <p><strong>Loan Type:</strong> {{ loan.type }}</p>
        <p><strong>Status:</strong> Unreported</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnreportedLoan",
  data() {
    return {
      loans: [
        {
          id: "LN001",
          borrower: "Mohammad Rahman",
          occupation: "Teacher",
          address: "123/A, Mirpur, Dhaka, Bangladesh",
          amount: "BDT 500,000",
          type: "Home Loan",
        },
        {
          id: "LN002",
          borrower: "Fatima Begum",
          occupation: "Businesswoman",
          address: "45, Gulshan Avenue, Dhaka, Bangladesh",
          amount: "BDT 1,200,000",
          type: "Business Loan",
        },
        {
          id: "LN003",
          borrower: "Rafiq Ahmed",
          occupation: "Engineer",
          address: "78, Shahbagh, Dhaka, Bangladesh",
          amount: "BDT 300,000",
          type: "Personal Loan",
        },
        {
          id: "LN004",
          borrower: "Anika Sultana",
          occupation: "Doctor",
          address: "56, Uttara, Dhaka, Bangladesh",
          amount: "BDT 800,000",
          type: "Education Loan",
        },
        {
          id: "LN005",
          borrower: "Siddiqur Rahman",
          occupation: "Freelancer",
          address: "12, Dhanmondi, Dhaka, Bangladesh",
          amount: "BDT 200,000",
          type: "Personal Loan",
        },
        // Add more unreported loans as needed
      ],
    };
  },
};
</script>

<style scoped>
.unreported-loan-page {
  font-family: Arial, sans-serif;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

h1 {
  color: #007bff;
  text-align: left;
}

p {
  font-size: 16px;
  margin-bottom: 15px;
}

.loan-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.loan-card {
  border: 1px solid #ddd;
  padding: 20px;
  width: 300px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.loan-card h2 {
  color: #007bff;
  margin-bottom: 10px;
}

.loan-card p {
  margin: 5px 0;
}

@media (max-width: 768px) {
  .loan-list {
    flex-direction: column;
  }

  .loan-card {
    width: 100%;
  }
}
</style>
