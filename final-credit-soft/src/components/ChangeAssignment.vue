<template>
  <div class="change-assignment-page">
    <h1></h1>
    <p>
      Welcome to the Change Assignment page of the Credit Information Reporting
      System.
    </p>

    <!-- Form to Update Assignment Data -->
    <form @submit.prevent="submitAssignmentChange">
      <label for="assignmentId">Assignment ID:</label>
      <input
        v-model="assignmentId"
        type="text"
        id="assignmentId"
        placeholder="Enter Assignment ID"
        required
      />

      <label for="newData">New Data:</label>
      <textarea
        v-model="newData"
        id="newData"
        placeholder="Enter new assignment data"
        required
      ></textarea>

      <button type="submit">Submit Change</button>
    </form>

    <!-- Feedback Section -->
    <div v-if="updateStatus" class="feedback">
      <p>{{ updateStatus }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangeAssignment",
  data() {
    return {
      assignmentId: "",
      newData: "",
      updateStatus: "",
    };
  },
  methods: {
    async submitAssignmentChange() {
      // Placeholder for sending real-time updates to the server
      try {
        const response = await this.updateAssignmentData(
          this.assignmentId,
          this.newData
        );
        if (response.success) {
          this.updateStatus = "Assignment updated successfully in real-time!";
          this.notifyBangladeshServer(this.assignmentId);
        } else {
          this.updateStatus = "Failed to update assignment. Please try again.";
        }
      } catch (error) {
        this.updateStatus = "Error: Unable to update assignment.";
      }
    },
    async updateAssignmentData(assignmentId, newData) {
      // Simulated API call to update data on the server
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true });
        }, 1000);
      });
    },
    notifyBangladeshServer(assignmentId) {
      console.log(
        `Real-time update for Assignment ID: ${assignmentId} sent to Bangladesh.`
      );
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
.change-assignment-page {
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
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

textarea {
  resize: vertical;
  min-height: 100px;
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
  textarea {
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
  textarea {
    font-size: 12px;
  }

  button {
    font-size: 12px;
  }
}
</style>
