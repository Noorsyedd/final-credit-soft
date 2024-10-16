<template>
  <div class="assign-inquiry-page">
    <header class="header">
      <h1>Assign Inquiry</h1>
      <p>Please fill out the form to assign inquiries to relevant officers.</p>
    </header>

    <div class="main-container">
      <!-- Form Section -->
      <div class="form-section">
        <form @submit.prevent="submitInquiry">
          <!-- Inquiry ID -->
          <div class="form-group">
            <label for="inquiryId">Inquiry ID: </label>
            <input
              type="text"
              id="inquiryId"
              v-model="inquiryId"
              placeholder="Enter Inquiry ID"
              required
            />
          </div>

          <!-- Assign to Officer -->
          <div class="form-group">
            <label for="officer">Assign to Officer:</label>
            <select id="officer" v-model="officer" required>
              <option disabled value="">Select Officer</option>
              <option
                v-for="officer in officers"
                :key="officer.id"
                :value="officer.name"
              >
                {{ officer.name }} - {{ officer.department }}
              </option>
            </select>
          </div>

          <!-- Department Selection -->
          <div class="form-group">
            <label for="department">Department:</label>
            <select id="department" v-model="department" required>
              <option disabled value="">Select Department</option>
              <option v-for="dept in departments" :key="dept">
                {{ dept }}
              </option>
            </select>
          </div>

          <!-- Priority Selection -->
          <div class="form-group">
            <label for="priority">Priority:</label>
            <select id="priority" v-model="priority" required>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <!-- Deadline Selection -->
          <div class="form-group">
            <label for="deadline">Set Deadline: </label>
            <input type="date" id="deadline" v-model="deadline" required />
          </div>

          <!-- Inquiry Status -->
          <div class="form-group">
            <label for="status">Inquiry Status:</label>
            <select id="status" v-model="status" required>
              <option value="Open">Open</option>
              <option value="Pending">Pending</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="submit-btn">Assign Inquiry</button>
        </form>
      </div>

      <!-- Activity Log Section -->
      <div class="activity-log-section">
        <h2>Activity Log</h2>
        <ul class="activity-log">
          <li v-for="log in activityLog" :key="log.id">
            {{ log.message }} - {{ log.timestamp }}
          </li>
        </ul>
      </div>

      <!-- Search and Filter Section -->
      <div class="filter-section">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search inquiries..."
          class="search-bar"
        />
        <select v-model="filterByStatus" class="filter-select">
          <option value="All">All Statuses</option>
          <option value="Open">Open</option>
          <option value="Pending">Pending</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      <!-- Inquiry List -->
      <table class="inquiry-table">
        <thead>
          <tr>
            <th>Inquiry ID</th>
            <th>Officer</th>
            <th>Department</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="inquiry in filteredInquiries" :key="inquiry.id">
            <td>{{ inquiry.id }}</td>
            <td>{{ inquiry.officer }}</td>
            <td>{{ inquiry.department }}</td>
            <td>{{ inquiry.status }}</td>
            <td>{{ inquiry.priority }}</td>
            <td>{{ inquiry.deadline }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AssignInquiryPage",
  data() {
    return {
      inquiryId: "",
      officer: "",
      department: "",
      priority: "",
      deadline: "",
      status: "Open",
      searchQuery: "",
      filterByStatus: "All",
      officers: [
        { id: 1, name: "Shahed Akbar", department: "Loans" },
        { id: 2, name: "Enayet Mozumder", department: "Customer Service" },
        { id: 3, name: "Mahfuza Khanam", department: "Accounts" },
      ],
      departments: ["Loans", "Customer Service", "Accounts", "Mortgage"],
      inquiries: [],
      activityLog: [],
    };
  },
  computed: {
    filteredInquiries() {
      let filtered = this.inquiries.filter(
        (inquiry) =>
          inquiry.id.includes(this.searchQuery) ||
          inquiry.officer.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      if (this.filterByStatus !== "All") {
        filtered = filtered.filter(
          (inquiry) => inquiry.status === this.filterByStatus
        );
      }

      return filtered;
    },
  },
  methods: {
    submitInquiry() {
      if (
        !this.inquiryId ||
        !this.officer ||
        !this.department ||
        !this.priority ||
        !this.deadline
      ) {
        alert("Please fill out all fields before submitting.");
        return;
      }

      const newInquiry = {
        id: this.inquiryId,
        officer: this.officer,
        department: this.department,
        priority: this.priority,
        deadline: this.deadline,
        status: this.status,
      };

      this.inquiries.push(newInquiry);
      this.activityLog.push({
        id: Date.now(),
        message: `Inquiry ${this.inquiryId} assigned to ${this.officer}`,
        timestamp: new Date().toLocaleString(),
      });

      this.resetForm();
    },
    resetForm() {
      this.inquiryId = "";
      this.officer = "";
      this.department = "";
      this.priority = "";
      this.deadline = "";
      this.status = "Open";
    },
  },
};
</script>

<style scoped>
.assign-inquiry-page {
  max-width: 100%;
  margin: 0 auto;
  padding: 30px;
  background-color: #f8f9fa; /* Light background for contrast */
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); /* Deeper shadow for depth */
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2.5rem; /* Increased font size for visibility */
  color: #343a40; /* Darker color for better readability */
}

.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center content within container */
}

.form-section,
.activity-log-section {
  width: 100%;
  max-width: 600px; /* Limit width for better focus */
  margin: 0 auto; /* Center section */
  background-color: #ffffff; /* White background for forms */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.activity-log-section {
  margin-top: 20px; /* Space between sections */
}

.activity-log-section ul {
  list-style: none;
  padding: 0;
}

.form-group {
  margin-bottom: 20px; /* Increased spacing */
}

.form-group label {
  font-weight: bold; /* Bold labels for better visibility */
  color: #495057; /* Darker color for contrast */
}

input[type="text"],
input[type="date"],
textarea,
select {
  width: 100%;
  padding: 12px; /* Increased padding for better usability */
  border: 1px solid #ced4da; /* Light border */
  border-radius: 4px;
  font-size: 16px; /* Larger font for readability */
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle inner shadow */
  transition: border-color 0.2s, box-shadow 0.2s; /* Smooth transition */
}

input[type="text"]:focus,
input[type="date"]:focus,
textarea:focus,
select:focus {
  border-color: #007bff; /* Highlight border on focus */
  outline: none; /* Remove default outline */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Focus shadow effect */
}

.submit-btn {
  padding: 12px 25px; /* Larger button */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px; /* Larger font for readability */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transition */
}

.submit-btn:hover {
  background-color: #0056b3; /* Darker shade on hover */
  transform: translateY(-1px); /* Slight lift effect */
}

/* Search and Filter Section */
.filter-section {
  display: flex;
  justify-content: space-between;
  margin: 30px 0; /* Increased spacing */
}

.search-bar,
.filter-select {
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  flex-grow: 1;
  margin-right: 10px;
  transition: border-color 0.2s; /* Smooth transition */
}

.search-bar:focus,
.filter-select:focus {
  border-color: #007bff; /* Highlight border on focus */
}

/* Inquiry Table */
.inquiry-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px; /* Added spacing from above elements */
}

.inquiry-table th,
.inquiry-table td {
  padding: 12px; /* Increased padding for table cells */
  border: 1px solid #dee2e6; /* Lighter border for table */
  text-align: left;
}

.inquiry-table th {
  background-color: #e9ecef; /* Light gray header */
  color: #495057; /* Dark text for contrast */
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
    align-items: center; /* Center align for smaller screens */
  }

  .form-section,
  .activity-log-section {
    width: 90%; /* Adjust width for smaller screens */
  }

  .filter-section {
    flex-direction: column; /* Stack filter elements */
    margin-bottom: 20px; /* Add margin */
  }

  .filter-section input,
  .filter-section select {
    margin-bottom: 10px; /* Add spacing between inputs */
  }

  .inquiry-table th,
  .inquiry-table td {
    font-size: 14px; /* Smaller font size */
    padding: 10px; /* Consistent padding for smaller screens */
  }
}

@media (max-width: 480px) {
  .header h1 {
    font-size: 1.8rem; /* Adjust header size for smaller screens */
  }

  .submit-btn {
    padding: 10px 20px; /* Slightly smaller button */
    font-size: 14px; /* Smaller font size */
  }

  .search-bar,
  .filter-select {
    width: 100%; /* Full width for smaller screens */
    margin-right: 0; /* Remove right margin */
  }

  .filter-section {
    margin-bottom: 10px; /* Add bottom margin */
  }

  .inquiry-table th,
  .inquiry-table td {
    font-size: 12px; /* Smaller font size for table */
  }
}
</style>
