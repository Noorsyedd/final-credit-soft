<template>
  <div class="admin-manage-inquiry-user">
    <h1>Admin Manage Inquiry User Page</h1>
    <p>
      Welcome to the Admin Manage Inquiry User page. You can add or manage
      inquiries below.
    </p>

    <form @submit.prevent="addInquiry">
      <div class="form-group">
        <label for="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          v-model="userName"
          placeholder="Enter user name"
          required
        />
      </div>

      <div class="form-group">
        <label for="userAddress">User Address:</label>
        <input
          type="text"
          id="userAddress"
          v-model="userAddress"
          placeholder="Enter user address"
          required
        />
      </div>

      <div class="form-group">
        <label for="userInquiry">Inquiry Details:</label>
        <textarea
          id="userInquiry"
          v-model="userInquiry"
          placeholder="Enter inquiry details"
          required
        ></textarea>
      </div>

      <button type="submit">Add Inquiry</button>
    </form>

    <div v-if="inquiries.length" class="inquiry-list">
      <h2>List of Inquiries:</h2>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Address</th>
            <th>Inquiry Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(inquiry, index) in inquiries" :key="index">
            <td>{{ inquiry.userName }}</td>
            <td>{{ inquiry.userAddress }}</td>
            <td>{{ inquiry.userInquiry }}</td>
            <td>
              <button @click="deleteInquiry(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminManageInquiryUser",
  data() {
    return {
      userName: "",
      userAddress: "",
      userInquiry: "",
      inquiries: [],
    };
  },
  methods: {
    addInquiry() {
      if (this.userName && this.userAddress && this.userInquiry) {
        this.inquiries.push({
          userName: this.userName,
          userAddress: this.userAddress,
          userInquiry: this.userInquiry,
        });
        this.clearForm();
      }
    },
    deleteInquiry(index) {
      this.inquiries.splice(index, 1);
    },
    clearForm() {
      this.userName = "";
      this.userAddress = "";
      this.userInquiry = "";
    },
  },
};
</script>

<style scoped>
.admin-manage-inquiry-user {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 100%;
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
}

button:hover {
  background-color: #0056b3;
}

.inquiry-list {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table th,
table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

table th {
  background-color: #f4f4f4;
}

table td button {
  background-color: #dc3545;
}

table td button:hover {
  background-color: #c82333;
}
</style>
