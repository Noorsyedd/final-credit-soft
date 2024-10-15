<template>
  <div class="layout">
    <!-- Main Content -->
    <main class="main-content">
      <h1>Admin Assign Inquiry</h1>

      <!-- Scrollable Form Section -->
      <div class="scrollable-form-container">
        <form @submit.prevent="submitForm" class="cib-form">
          <!-- Row 1: Basic Information -->
          <div class="form-row">
            <div class="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                v-model="form.name"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div class="form-group">
              <label for="fatherName">Father's Name:</label>
              <input
                type="text"
                v-model="form.fatherName"
                id="fatherName"
                placeholder="Enter father's name"
              />
            </div>

            <div class="form-group">
              <label for="motherName">Mother's Name:</label>
              <input
                type="text"
                v-model="form.motherName"
                id="motherName"
                placeholder="Enter mother's name"
              />
            </div>
          </div>

          <!-- Row 2: National ID and Date of Birth -->
          <div class="form-row">
            <div class="form-group">
              <label for="nationalId">National ID:</label>
              <input
                type="text"
                v-model="form.nationalId"
                id="nationalId"
                placeholder="Enter National ID"
              />
            </div>

            <div class="form-group">
              <label for="dob">Date of Birth:</label>
              <input type="date" v-model="form.dob" id="dob" />
            </div>

            <div class="form-group">
              <label for="gender">Gender:</label>
              <select v-model="form.gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <!-- Row 3: Contact Information -->
          <div class="form-row">
            <div class="form-group">
              <label for="phone">Phone Number:</label>
              <input
                type="text"
                v-model="form.phone"
                id="phone"
                placeholder="Enter phone number"
              />
            </div>

            <div class="form-group">
              <label for="email">Email:</label>
              <input
                type="email"
                v-model="form.email"
                id="email"
                placeholder="Enter email"
              />
            </div>
          </div>

          <!-- Row 4: Address Information -->
          <div class="form-row">
            <div class="form-group">
              <label for="presentAddress">Present Address:</label>
              <input
                type="text"
                v-model="form.presentAddress"
                id="presentAddress"
                placeholder="Enter present address"
              />
            </div>

            <div class="form-group">
              <label for="permanentAddress">Permanent Address:</label>
              <input
                type="text"
                v-model="form.permanentAddress"
                id="permanentAddress"
                placeholder="Enter permanent address"
              />
            </div>
          </div>

          <!-- Row 5: Additional Information -->
          <div class="form-row">
            <div class="form-group">
              <label for="occupation">Occupation:</label>
              <input
                type="text"
                v-model="form.occupation"
                id="occupation"
                placeholder="Enter occupation"
              />
            </div>

            <div class="form-group">
              <label for="income">Monthly Income:</label>
              <input
                type="number"
                v-model="form.income"
                id="income"
                placeholder="Enter monthly income"
              />
            </div>
          </div>

          <button type="submit" class="submit-button">Submit</button>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        fatherName: "",
        motherName: "",
        nationalId: "",
        dob: "",
        gender: "",
        phone: "",
        email: "",
        presentAddress: "",
        permanentAddress: "",
        occupation: "",
        income: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted", this.form);
    },
  },
};
</script>

<style scoped>
/* Overall Layout */
.layout {
  padding: 20px;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
}

/* Main content styling */
.main-content {
  max-width: 800px;
  width: 100%;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

/* Scrollable container */
.scrollable-form-container {
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
}

.cib-form {
  display: flex;
  flex-direction: column;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.form-group {
  flex: 1;
  margin-right: 10px;
  min-width: 200px;
}

.form-group:last-child {
  margin-right: 0;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

input,
select {
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

.submit-button:hover {
  background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }

  .form-group {
    margin-right: 0;
  }

  .scrollable-form-container {
    max-height: 100%;
  }
}
</style>
