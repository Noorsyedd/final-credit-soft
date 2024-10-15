<template>
  <div class="manage-inquiry-page">
    <h1>Manage Inquiry User Page</h1>
    <p>Welcome to the Manage Inquiry User page.</p>

    <!-- Form to Manage Inquiry User -->
    <form @submit.prevent="submitInquiryUser">
      <label for="userId">User ID:</label>
      <input
        v-model="userId"
        type="text"
        id="userId"
        placeholder="Enter User ID"
        required
      />

      <label for="userRole">User Role:</label>
      <select v-model="userRole" id="userRole" required>
        <option disabled value="">Select User Role</option>
        <option value="admin">Admin</option>
        <option value="moderator">Moderator</option>
        <option value="viewer">Viewer</option>
      </select>

      <label for="userStatus">User Status:</label>
      <select v-model="userStatus" id="userStatus" required>
        <option disabled value="">Select User Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="suspended">Suspended</option>
      </select>

      <button type="submit">Manage User</button>
    </form>

    <!-- Feedback Section -->
    <div v-if="statusMessage" class="feedback">
      <p>{{ statusMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManageInquiry",
  data() {
    return {
      userId: "",
      userRole: "",
      userStatus: "",
      statusMessage: "",
    };
  },
  methods: {
    async submitInquiryUser() {
      // Placeholder for managing user inquiry (replace with real API call)
      try {
        const response = await this.manageUser(
          this.userId,
          this.userRole,
          this.userStatus
        );
        if (response.success) {
          this.statusMessage = "User successfully updated!";
        } else {
          this.statusMessage = "Failed to update user. Please try again.";
        }
      } catch (error) {
        this.statusMessage = "Error: Unable to update user.";
      }
    },
    async manageUser(userId, userRole, userStatus) {
      // Simulated API call for managing inquiry user
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true });
        }, 1000); // Simulate network delay
      });
    },
  },
};
</script>

<style scoped>
.manage-inquiry-page {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  text-align: center;
}

p {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  font-size: 16px;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #218838;
}

.feedback {
  margin-top: 20px;
  text-align: center;
}

/* Responsive design */
@media (max-width: 768px) {
  h1 {
    font-size: 20px;
  }

  input,
  select {
    font-size: 14px;
  }

  button {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 18px;
  }

  input,
  select {
    font-size: 12px;
  }

  button {
    font-size: 12px;
  }
}
</style>
