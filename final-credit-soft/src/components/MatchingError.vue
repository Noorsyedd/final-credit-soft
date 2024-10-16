<template>
  <div class="matching-error-page">
    <h1>Matching Error Page</h1>
    <p>
      Welcome to the Matching Error page. This section lists errors encountered
      during data matching.
    </p>

    <div class="error-list">
      <div class="error-card" v-for="error in errors" :key="error.id">
        <h2>Error ID: {{ error.id }}</h2>
        <p><strong>Account Number:</strong> {{ error.accountNumber }}</p>
        <p><strong>Borrower Name:</strong> {{ error.borrower }}</p>
        <p><strong>Error Description:</strong> {{ error.description }}</p>
        <p><strong>Date Detected:</strong> {{ error.date }}</p>
        <p><strong>Status:</strong> {{ error.status }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchingError",
  data() {
    return {
      errors: [
        {
          id: "ERR001",
          accountNumber: "ACC123456789",
          borrower: "Mohammad Rahman",
          description: "Name mismatch with ID.",
          date: "2024-10-01",
          status: "Pending Resolution",
        },
        {
          id: "ERR002",
          accountNumber: "ACC987654321",
          borrower: "Fatima Begum",
          description: "Address mismatch found.",
          date: "2024-10-05",
          status: "Under Investigation",
        },
        {
          id: "ERR003",
          accountNumber: "ACC112233445",
          borrower: "Rafiq Ahmed",
          description: "Income verification failed.",
          date: "2024-10-10",
          status: "Pending Resolution",
        },
        {
          id: "ERR004",
          accountNumber: "ACC556677889",
          borrower: "Anika Sultana",
          description: "Duplicate entry detected.",
          date: "2024-10-12",
          status: "Resolved",
        },
        {
          id: "ERR005",
          accountNumber: "ACC223344556",
          borrower: "Siddiqur Rahman",
          description: "Date of birth does not match.",
          date: "2024-10-15",
          status: "Pending Resolution",
        },
      ],
    };
  },
};
</script>

<style scoped>
.matching-error-page {
  font-family: Arial, sans-serif;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

h1 {
  color: #dc3545; /* Red color for error emphasis */
  text-align: left;
}

p {
  font-size: 16px;
  margin-bottom: 15px;
}

.error-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.error-card {
  border: 1px solid #ddd;
  padding: 20px;
  width: 300px;
  border-radius: 5px;
  background-color: #f8d7da; /* Light red background */
}

.error-card h2 {
  color: #dc3545; /* Red color for error emphasis */
  margin-bottom: 10px;
}

.error-card p {
  margin: 5px 0;
}

@media (max-width: 768px) {
  .error-list {
    flex-direction: column;
  }

  .error-card {
    width: 100%;
  }
}
</style>
