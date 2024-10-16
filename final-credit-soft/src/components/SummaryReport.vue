<template>
  <div class="summary-report-page">
    <h1>Summary Report</h1>
    <p>Welcome to the Summary page. Here are the key statistics and insights.</p>

    <div class="summary-cards">
      <div class="summary-card clickable" @click="showList('totalAccounts')">
        <h2>Total Accounts</h2>
        <p>{{ totalAccounts }}</p>
      </div>
      <div class="summary-card clickable" @click="showList('totalLoans')">
        <h2>Total Loans</h2>
        <p>{{ totalLoans }}</p>
      </div>
      <div class="summary-card clickable" @click="showList('defaultedLoans')">
        <h2>Defaulted Loans</h2>
        <p>{{ defaultedLoans }}</p>
      </div>
      <div class="summary-card clickable" @click="showList('approvedLoans')">
        <h2>Approved Loans</h2>
        <p>{{ approvedLoans }}</p>
      </div>
      <div class="summary-card clickable" @click="showList('pendingApplications')">
        <h2>Pending Applications</h2>
        <p>{{ pendingApplications }}</p>
      </div>
    </div>

    <div class="detailed-insights">
      <h3>Recent Insights</h3>
      <ul>
        <li>Average loan amount: BDT {{ averageLoanAmount }}</li>
        <li>Most common loan purpose: Home Renovation</li>
        <li>Last update: {{ lastUpdate }}</li>
      </ul>
    </div>

    <!-- Modal for displaying lists -->
    <div v-if="showModal" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>{{ modalTitle }}</h2>
        <ul>
          <li v-for="item in modalList" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryReport",
  data() {
    return {
      totalAccounts: 1200,
      totalLoans: 800,
      defaultedLoans: 50,
      approvedLoans: 720,
      pendingApplications: 30,
      averageLoanAmount: 250000,
      lastUpdate: "2024-10-15",
      showModal: false,
      modalTitle: "",
      modalList: [],
    };
  },
  methods: {
    showList(type) {
      switch (type) {
        case 'totalAccounts':
          this.modalTitle = "Total Accounts List";
          this.modalList = this.getAccountList(); // Fetch the list of accounts
          break;
        case 'totalLoans':
          this.modalTitle = "Total Loans List";
          this.modalList = this.getLoanList(); // Fetch the list of loans
          break;
        case 'defaultedLoans':
          this.modalTitle = "Defaulted Loans List";
          this.modalList = this.getDefaultedLoansList(); // Fetch the list of defaulted loans
          break;
        case 'approvedLoans':
          this.modalTitle = "Approved Loans List";
          this.modalList = this.getApprovedLoansList(); // Fetch the list of approved loans
          break;
        case 'pendingApplications':
          this.modalTitle = "Pending Applications List";
          this.modalList = this.getPendingApplicationsList(); // Fetch the list of pending applications
          break;
        default:
          break;
      }
      this.showModal = true; // Show the modal
    },
    closeModal() {
      this.showModal = false; // Hide the modal
      this.modalList = []; // Clear the modal list
    },
    // Sample data fetching methods (replace with real data as needed)
    getAccountList() {
      return [
        { id: 1, name: "John Doe - Account No: 12345" },
        { id: 2, name: "Jane Smith - Account No: 67890" },
        // Add more sample accounts...
      ];
    },
    getLoanList() {
      return [
        { id: 1, name: "Home Loan - BDT 500,000" },
        { id: 2, name: "Car Loan - BDT 300,000" },
        // Add more sample loans...
      ];
    },
    getDefaultedLoansList() {
      return [
        { id: 1, name: "Defaulted Loan 1 - BDT 150,000" },
        { id: 2, name: "Defaulted Loan 2 - BDT 200,000" },
        // Add more sample defaulted loans...
      ];
    },
    getApprovedLoansList() {
      return [
        { id: 1, name: "Approved Home Loan - BDT 700,000" },
        { id: 2, name: "Approved Business Loan - BDT 500,000" },
        // Add more sample approved loans...
      ];
    },
    getPendingApplicationsList() {
      return [
        { id: 1, name: "Pending Loan Application - BDT 250,000" },
        { id: 2, name: "Pending Home Loan Application - BDT 400,000" },
        // Add more sample pending applications...
      ];
    },
  },
};
</script>

<style scoped>
.summary-report-page {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

h1 {
  color: #007bff;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.summary-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  background-color: #f9f9f9;
  text-align: center;
  cursor: pointer; /* Change cursor to pointer for clickable effect */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.summary-card:hover {
  background-color: #e7f1ff; /* Lighten background on hover */
}

.detailed-insights {
  background-color: #f1f1f1;
  padding: 15px;
  border-radius: 5px;
}

.detailed-insights h3 {
  color: #007bff;
}

ul {
  padding-left: 20px;
}

ul li {
  margin-bottom: 10px;
}

/* Modal Styles */
.modal {
  display: flex;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 5px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* Responsive Design */
@media (max-width: 600px) {
  .summary-card {
    padding: 10px;
  }
}
</style>
