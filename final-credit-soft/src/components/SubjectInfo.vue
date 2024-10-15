<template>
  <div class="form-container">
    <h1>Add Subject (Institute)</h1>

    <div v-if="!formSubmitted">
      <form class="form" @submit.prevent="handleSubmit">
        <!-- Box 1 -->
        <div class="box">
          <h2>Institute Information</h2>
          <div class="box-content">
            <div class="form-group">
              <label for="title">Title:</label>
              <select id="title" v-model="formData.title" class="form-control">
                <option value="">Select</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <!-- Add more options as needed -->
              </select>
            </div>
            <div class="form-group">
              <label for="legalForm">Legal Form:</label>
              <select
                id="legalForm"
                v-model="formData.legalForm"
                required
                class="form-control"
              >
                <option value="proprietorship">Proprietorship</option>
                <!-- Add more options as needed -->
              </select>
              <span class="required">*</span>
            </div>
            <div class="form-group">
              <label for="tradeLicenseNo">Trade License No:</label>
              <input
                id="tradeLicenseNo"
                v-model="formData.tradeLicenseNo"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="instituteName">Name: Institute Name:</label>
              <input
                id="instituteName"
                v-model="formData.instituteName"
                required
                class="form-control"
              />
              <span class="required">*</span>
            </div>
            <div class="form-group">
              <label for="tin">TIN:</label>
              <input id="tin" v-model="formData.tin" class="form-control" />
            </div>
            <div class="form-group">
              <label for="tradeLicenseDate">Trade License Date:</label>
              <input
                id="tradeLicenseDate"
                type="date"
                v-model="formData.tradeLicenseDate"
                required
                class="form-control"
              />
              <span class="required">*</span>
            </div>
          </div>
        </div>

        <hr />

        <!-- Box 2 -->
        <div class="box">
          <h2>Business Address</h2>
          <div class="box-content">
            <div class="form-group">
              <label for="businessDistrict">District:</label>
              <select
                id="businessDistrict"
                v-model="formData.businessDistrict"
                required
                class="form-control"
              >
                <option value="">Select District</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <!-- Add list of districts here -->
              </select>
              <span class="required">*</span>
            </div>
            <div class="form-group">
              <label for="businessPostalCode">Postal Code:</label>
              <input
                id="businessPostalCode"
                v-model="formData.businessPostalCode"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="businessDetails">Details:</label>
              <textarea
                id="businessDetails"
                v-model="formData.businessDetails"
                required
                class="form-control"
              ></textarea>
              <span class="required">*</span>
            </div>
            <div class="form-group">
              <label for="businessCountry">Country:</label>
              <select
                id="businessCountry"
                v-model="formData.businessCountry"
                required
                class="form-control"
              >
                <option value="">Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
                <!-- Add list of countries here -->
              </select>
              <span class="required">*</span>
            </div>
          </div>
        </div>

        <hr />

        <!-- Box 3 -->
        <div class="box">
          <h2>Factory Address</h2>
          <div class="box-content">
            <div class="form-group">
              <label for="factoryDistrict">District:</label>
              <select
                id="factoryDistrict"
                v-model="formData.factoryDistrict"
                required
                class="form-control"
              >
                <option value="">Select District</option>
                <option value="Dhaka">Dhaka</option>
                <!-- Add list of districts here -->
              </select>
              <span class="required">*</span>
            </div>
            <div class="form-group">
              <label for="factoryPostalCode">Postal Code:</label>
              <input
                id="factoryPostalCode"
                v-model="formData.factoryPostalCode"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="factoryDetails">Details:</label>
              <textarea
                id="factoryDetails"
                v-model="formData.factoryDetails"
                required
                class="form-control"
              ></textarea>
              <span class="required">*</span>
            </div>
            <div class="form-group">
              <label for="factoryCountry">Country:</label>
              <select
                id="factoryCountry"
                v-model="formData.factoryCountry"
                required
                class="form-control"
              >
                <option value="">Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
                <!-- Add list of countries here -->
              </select>
              <span class="required">*</span>
            </div>
          </div>
        </div>

        <hr />

        <!-- Box 4 -->
        <div class="box">
          <h2>Sector and Telephone</h2>
          <div class="box-content">
            <div class="form-group">
              <label for="sectorCode">Sector Code:</label>
              <input
                id="sectorCode"
                v-model="formData.sectorCode"
                required
                class="form-control"
              />
              <span class="required">*</span>
            </div>
            <div class="form-group">
              <label for="telephoneNumber">Telephone Number:</label>
              <input
                id="telephoneNumber"
                v-model="formData.telephoneNumber"
                class="form-control"
              />
            </div>
          </div>
        </div>

        <hr />

        <button type="submit" class="submit-button">Submit</button>
        <!-- Add New Button -->
        <!-- Add New Button -->
        <button
          type="button"
          class="add-new-button"
          @click="addNewVerificationForm"
        >
          Add New
        </button>
      </form>
    </div>

    <!-- New Fields Section -->
    <div
      v-for="(fields, index) in verificationForms"
      :key="index"
      class="new-fields"
    >
      <h2>
        Verification Information {{ index + 1 }}
        <!-- Add Cross Button to the Right Side -->
        <button @click="removeVerificationForm(index)" class="remove-button">
          X
        </button>
      </h2>
      <div class="form-group">
        <label for="dob">Date of Birth:</label>
        <input
          :id="'dob-' + index"
          type="date"
          v-model="fields.dob"
          required
          class="form-control"
        />
        <span class="required">*</span>
      </div>
      <div class="form-group">
        <label for="nid">NID:</label>
        <input
          :id="'nid-' + index"
          v-model="fields.nid"
          required
          class="form-control"
        />
        <span class="required">*</span>
      </div>
      <div class="form-group">
        <label for="placeOfBirth">Place of Birth:</label>
        <select
          :id="'placeOfBirth-' + index"
          v-model="fields.placeOfBirth"
          required
          class="form-control"
        >
          <option value="">Select Place of Birth</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Nepal">Nepal</option>
          <option value="Sri Lanka">Sri Lanka</option>
        </select>
        <span class="required">*</span>
      </div>
      <button
        type="button"
        class="verify-button"
        @click="verifyAndNavigate(fields)"
      >
        Verify
      </button>
    </div>

    <!-- The Add Owner button should only be displayed if no verification forms are added -->
    <div v-if="verificationForms.length === 0">
      <button @click="addOwner" class="add-owner-button">Add Owner</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstitutionInfo",
  data() {
    return {
      formData: {
        // existing data properties...
      },
      formSubmitted: false,
      verificationForms: [], // Array to hold multiple verification forms
    };
  },
  methods: {
    addNewVerificationForm() {
      this.verificationForms.push({
        dob: "",
        nid: "",
        placeOfBirth: "",
      });
    },
    removeVerificationForm(index) {
      this.verificationForms.splice(index, 1); // Removes the form at the given index
    },
    verifyAndNavigate(fields) {
      if (fields.dob && fields.nid && fields.placeOfBirth) {
        this.$router.push({ name: "Person" });
      } else {
        alert("Please fill out all required fields.");
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  overflow-y: auto;
  box-sizing: border-box;
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
}
.remove-button {
  background: none;
  border: none;
  color: red;
  font-size: 20px;
  float: right;
  cursor: pointer;
}

.remove-button:hover {
  color: darkred;
}

.box {
  margin-bottom: 20px;
  padding: 15px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.box h2 {
  margin-top: 0;
  font-size: 20px;
  color: #444;
}

.box-content {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns for larger screens */
  gap: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #555;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #007bff;
  outline: none;
}

.required {
  color: red;
  margin-left: 5px;
}

hr {
  border: 1px solid #ddd;
  margin: 20px 0;
}

.submit-button,
.add-owner-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  margin: auto;
}

.submit-button {
  background-color: #007bff;
}

.submit-button:hover {
  background-color: #0056b3;
}

.add-new-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #17a2b8;
  margin-top: 20px;
}

.add-new-button:hover {
  background-color: #117a8b;
}

.new-fields {
  margin-top: 20px;
  padding: 15px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.verify-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #28a745;
  margin-top: 10px;
}

.verify-button:hover {
  background-color: #218838;
}

.add-owner-button {
  background-color: #28a745;
}

.add-owner-button:hover {
  background-color: #218838;
}

.add-new-wrapper {
  margin-top: 20px; /* Space above the wrapper */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.new-fields {
  margin-top: 10px; /* Space between button and new fields */
  padding: 15px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  width: 100%; /* Full width of its container */
  box-sizing: border-box;
}

.add-new-button {
  margin: 0;
}

/* Updated styling for responsive design */

.verification-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Spacing between each verification form */
}

.verification-form {
  flex: 1 1 30%; /* Allow each form to take up about 30% of the width */
  min-width: 250px; /* Set a minimum width for the forms */
}

/* Responsive Design */
@media (max-width: 599px) {
  .form-container {
    padding: 10px;
  }

  .verification-form {
    flex: 1 1 100%; /* Make the forms stack vertically on small screens */
  }
}
</style>
