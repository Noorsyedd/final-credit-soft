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
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.form-section,
.activity-log-section {
  width: 45%;
}

.activity-log-section ul {
  list-style: none;
  padding: 0;
}

.form-group {
  margin-bottom: 15px;
}

.submit-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #0056b3;
}

/* Search and Filter Section */
.filter-section {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.search-bar {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  flex-grow: 1;
  margin-right: 10px;
}

.filter-select {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

/* Inquiry Table */
.inquiry-table {
  width: 100%;
  border-collapse: collapse;
}

.inquiry-table th,
.inquiry-table td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}

.inquiry-table th {
  background-color: #f1f1f1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
  }

  .form-section,
  .activity-log-section {
    width: 100%;
  }

  .filter-section {
    flex-direction: column;
  }

  .filter-section input,
  .filter-section select {
    margin-bottom: 10px;
  }

  .inquiry-table th,
  .inquiry-table td {
    font-size: 14px;
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .header h1 {
    font-size: 1.5rem;
  }

  .submit-btn {
    padding: 8px 16px;
    font-size: 14px;
  }

  .search-bar,
  .filter-select {
    width: 100%;
  }

  .filter-section {
    margin-bottom: 10px;
  }

  .inquiry-table th,
  .inquiry-table td {
    font-size: 12px;
  }
}
</style>
