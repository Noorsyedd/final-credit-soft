<template>
  <div class="admin-search-inquiry">
    <h1>Admin Search Inquiry Page</h1>
    <p>
      Welcome to the Admin Search Inquiry page. You can search for inquiries
      below.
    </p>

    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search inquiries..."
        @keyup.enter="performSearch"
      />
      <button @click="performSearch">Search</button>
    </div>

    <div v-if="inquiries.length > 0" class="inquiry-list">
      <h2>Inquiries</h2>
      <ul>
        <li v-for="inquiry in inquiries" :key="inquiry.id">
          <strong>{{ inquiry.name }}</strong> - {{ inquiry.details }}
          <button @click="viewInquiry(inquiry)">View Details</button>
        </li>
      </ul>
    </div>

    <div v-else>
      <p>No inquiries found for "{{ searchQuery }}"</p>
    </div>

    <!-- Modal for displaying inquiry details -->
    <div v-if="showModal" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Inquiry Details</h2>
        <p><strong>Name:</strong> {{ selectedInquiry.name }}</p>
        <p><strong>Details:</strong> {{ selectedInquiry.details }}</p>
        <p><strong>Date:</strong> {{ selectedInquiry.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminSearchInquiry",
  data() {
    return {
      searchQuery: "",
      inquiries: [],
      showModal: false,
      selectedInquiry: {},
    };
  },
  methods: {
    performSearch() {
      // Sample data with Bangladeshi names
      const allInquiries = [
        {
          id: 1,
          name: "Rahim Uddin",
          details: "Loan approval inquiry",
          date: "2024-10-15",
        },
        {
          id: 2,
          name: "Fatema Nasrin",
          details: "Inquiry about account statement",
          date: "2024-10-14",
        },
        {
          id: 3,
          name: "Sajjad Hossain",
          details: "Inquiry regarding credit card application",
          date: "2024-10-13",
        },
        {
          id: 4,
          name: "Mst. Ruma Akter",
          details: "Inquiry about interest rates",
          date: "2024-10-12",
        },
        {
          id: 5,
          name: "Abdul Alim",
          details: "Inquiry related to loan repayment options",
          date: "2024-10-11",
        },
      ];

      // Filter inquiries based on search query
      this.inquiries = allInquiries.filter((inquiry) =>
        inquiry.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    viewInquiry(inquiry) {
      this.selectedInquiry = inquiry;
      this.showModal = true; // Show the modal
    },
    closeModal() {
      this.showModal = false; // Hide the modal
      this.selectedInquiry = {}; // Clear selected inquiry
    },
  },
};
</script>

<style scoped>
.admin-search-inquiry {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.search-bar {
  display: flex;
  margin-bottom: 20px;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-left: 10px;
}

button:hover {
  background-color: #0056b3;
}

.inquiry-list {
  margin-top: 20px;
}

.inquiry-list ul {
  list-style-type: none;
  padding: 0;
}

.inquiry-list li {
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  position: relative;
}

.inquiry-list button {
  position: absolute;
  right: 10px;
  top: 10px;
}

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
  .search-bar {
    flex-direction: column;
  }

  input[type="text"] {
    margin-bottom: 10px;
  }
}
</style>
