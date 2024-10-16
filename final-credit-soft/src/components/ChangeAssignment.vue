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
/* Container for the change assignment page */
.change-assignment-page {
  padding: 40px 20px; /* Increased padding for better spacing */
  max-width: 600px; /* Constrained width for readability */
  margin: 0 auto; /* Centering the container */
  background-color: #ffffff; /* White background for clarity */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

/* Header styles */
h1 {
  font-size: 28px; /* Larger font size for prominence */
  text-align: center; /* Centering the title */
  color: #333; /* Darker text color for contrast */
  margin-bottom: 20px; /* Space below the header */
}

/* Paragraph styles */
p {
  text-align: center; /* Centered text */
  margin-bottom: 30px; /* Increased space below paragraphs */
  color: #666; /* Softer text color */
}

/* Form layout */
form {
  display: flex; /* Flexbox layout for form elements */
  flex-direction: column; /* Stacking elements vertically */
  gap: 20px; /* Increased gap for clarity */
}

/* Label styles */
label {
  font-size: 18px; /* Increased font size for better readability */
  color: #444; /* Darker label color */
}

/* Input and textarea styles */
input,
textarea {
  width: 100%; /* Full width for inputs */
  padding: 12px; /* Increased padding for comfort */
  border: 1px solid #ccc; /* Light border */
  border-radius: 6px; /* Rounded edges for inputs */
  font-size: 16px; /* Base font size */
  transition: border-color 0.3s ease; /* Smooth transition for focus */
}

input:focus,
textarea:focus {
  border-color: #28a745; /* Change border color on focus */
  outline: none; /* Remove default outline */
}

/* Textarea specific styles */
textarea {
  resize: vertical; /* Allow vertical resizing */
  min-height: 120px; /* Minimum height for text area */
}

/* Button styles */
button {
  padding: 12px 24px; /* Ample padding for a better click area */
  background-color: #28a745; /* Green button color */
  color: white; /* White text */
  border: none; /* No border */
  border-radius: 6px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Base font size */
  transition: background-color 0.3s ease; /* Smooth transition for hover */
}

/* Button hover effect */
button:hover {
  background-color: #218838; /* Darker green on hover */
}

/* Feedback message styles */
.feedback {
  margin-top: 20px; /* Space above feedback messages */
  text-align: center; /* Centered feedback text */
  color: #28a745; /* Consistent color for feedback messages */
}

/* Responsive design adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 24px; /* Slightly smaller header on smaller screens */
  }

  label {
    font-size: 16px; /* Slightly smaller label size */
  }

  input,
  textarea {
    font-size: 14px; /* Adjust input font size */
  }

  button {
    font-size: 14px; /* Adjust button font size */
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 20px; /* Smaller header for mobile */
  }

  label {
    font-size: 14px; /* Smaller label for mobile */
  }

  input,
  textarea {
    font-size: 12px; /* Smaller input font size for mobile */
  }

  button {
    font-size: 12px; /* Smaller button font size for mobile */
  }
}
</style>
