<template>
  <div class="container">
    <!-- Second Form -->
    <div v-if="showSecondForm" class="form-box">
      <h2>Add Subject (Person)</h2>

      <form @submit.prevent="handleSecondFormSubmit">
        <!-- Row 1 -->
        <div class="row">
          <div class="form-group">
            <label for="name">Name <span class="required">*</span>:</label>
            <input type="text" v-model="name" id="name" required />
          </div>

          <div class="form-group">
            <label for="fatherName"
              >Father's Name <span class="required">*</span>:</label
            >
            <input type="text" v-model="fatherName" id="fatherName" required />
          </div>

          <div class="form-group">
            <label for="motherName"
              >Mother's Name <span class="required">*</span>:</label
            >
            <input type="text" v-model="motherName" id="motherName" required />
          </div>

          <div class="form-group">
            <label for="spouseName">Spouse's Name:</label>
            <input type="text" v-model="spouseName" id="spouseName" />
          </div>
        </div>

        <!-- Row 2 -->
        <div class="row">
          <div class="form-group">
            <label for="nid">NID <span class="required">*</span>:</label>
            <input type="text" v-model="nid" id="nid" required />
          </div>

          <div class="form-group">
            <label for="dob"
              >Date of Birth <span class="required">*</span>:</label
            >
            <input type="date" v-model="dob" id="dob" required />
          </div>

          <div class="form-group">
            <label for="districtOfBirth"
              >District of Birth <span class="required">*</span>:</label
            >
            <select v-model="districtOfBirth" id="districtOfBirth" required>
              <option value="" disabled>Select District</option>
              <option
                v-for="district in districts"
                :key="district"
                :value="district"
              >
                {{ district }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="tin">TIN:</label>
            <input type="text" v-model="tin" id="tin" />
          </div>
        </div>

        <!-- Row 3 -->
        <div class="row">
          <div class="form-group">
            <label for="gender">Gender <span class="required">*</span>:</label>
            <div class="radio-group">
              <label
                ><input type="radio" value="Male" v-model="gender" required />
                Male</label
              >
              <label
                ><input type="radio" value="Female" v-model="gender" required />
                Female</label
              >
            </div>
          </div>

          <div class="form-group">
            <label for="countryOfBirth"
              >Country of Birth <span class="required">*</span>:</label
            >
            <select v-model="countryOfBirth" id="countryOfBirth" required>
              <option value="" disabled>Select Country</option>
              <option
                v-for="country in countries"
                :key="country"
                :value="country"
              >
                {{ country }}
              </option>
            </select>
          </div>
        </div>

        <!-- Permanent Address Section -->
        <div class="section">
          <h3>Permanent Address</h3>
          <div class="row">
            <div class="form-group">
              <label for="permanentDistrict"
                >District <span class="required">*</span>:</label
              >
              <select
                v-model="permanentDistrict"
                id="permanentDistrict"
                required
              >
                <option value="" disabled>Select District</option>
                <option
                  v-for="district in districts"
                  :key="district"
                  :value="district"
                >
                  {{ district }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label for="permanentPostalCode"
                >Postal Code <span class="required">*</span>:</label
              >
              <input
                type="text"
                v-model="permanentPostalCode"
                id="permanentPostalCode"
                required
              />
            </div>

            <div class="form-group">
              <label for="permanentDetails"
                >Details <span class="required">*</span>:</label
              >
              <input
                type="text"
                v-model="permanentDetails"
                id="permanentDetails"
                required
              />
            </div>

            <div class="form-group">
              <label for="permanentCountry"
                >Country <span class="required">*</span>:</label
              >
              <select v-model="permanentCountry" id="permanentCountry" required>
                <option value="" disabled>Select Country</option>
                <option
                  v-for="country in countries"
                  :key="country"
                  :value="country"
                >
                  {{ country }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Present Address Section -->
        <div class="section">
          <h3>Present Address</h3>
          <div class="row">
            <div class="form-group">
              <label for="presentDistrict">District:</label>
              <select v-model="presentDistrict" id="presentDistrict">
                <option value="" disabled>Select District</option>
                <option
                  v-for="district in districts"
                  :key="district"
                  :value="district"
                >
                  {{ district }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label for="presentPostalCode">Postal Code:</label>
              <input
                type="text"
                v-model="presentPostalCode"
                id="presentPostalCode"
              />
            </div>

            <div class="form-group">
              <label for="presentDetails">Details:</label>
              <input type="text" v-model="presentDetails" id="presentDetails" />
            </div>

            <div class="form-group">
              <label for="presentCountry">Country:</label>
              <select v-model="presentCountry" id="presentCountry">
                <option value="" disabled>Select Country</option>
                <option
                  v-for="country in countries"
                  :key="country"
                  :value="country"
                >
                  {{ country }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Identification Document Section -->
        <div class="section">
          <h3>Identification Document</h3>
          <div class="row">
            <div class="form-group">
              <label for="idType">ID Type:</label>
              <select v-model="idType" id="idType">
                <option value="" disabled>Select ID Type</option>
                <option v-for="id in idTypes" :key="id" :value="id">
                  {{ id }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label for="idIssueDate">ID Issue Date:</label>
              <input type="date" v-model="idIssueDate" id="idIssueDate" />
            </div>

            <div class="form-group">
              <label for="idNumber">ID Number:</label>
              <input type="text" v-model="idNumber" id="idNumber" />
            </div>

            <div class="form-group">
              <label for="idIssueCountry">ID Issue Country:</label>
              <select v-model="idIssueCountry" id="idIssueCountry">
                <option value="" disabled>Select Country</option>
                <option
                  v-for="country in countries"
                  :key="country"
                  :value="country"
                >
                  {{ country }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Sector & Telephone Section -->
        <div class="section">
          <h3>Sector & Telephone</h3>
          <div class="row">
            <div class="form-group">
              <label for="sectorCode"
                >Sector Code <span class="required">*</span>:</label
              >
              <select v-model="sectorCode" id="sectorCode" required>
                <option value="" disabled>Select Sector Code</option>
                <option v-for="sector in sectors" :key="sector" :value="sector">
                  {{ sector }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label for="telephoneNumber">Telephone Number:</label>
              <input
                type="text"
                v-model="telephoneNumber"
                id="telephoneNumber"
              />
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <button type="submit">Submit Information</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubjectInfo",
  data() {
    return {
      // Form data properties
      name: "",
      fatherName: "",
      motherName: "",
      spouseName: "",
      nid: "",
      dob: "",
      districtOfBirth: "",
      tin: "",
      gender: "",
      countryOfBirth: "",
      permanentDistrict: "",
      permanentPostalCode: "",
      permanentDetails: "",
      permanentCountry: "",
      presentDistrict: "",
      presentPostalCode: "",
      presentDetails: "",
      presentCountry: "",
      idType: "",
      idIssueDate: "",
      idNumber: "",
      idIssueCountry: "",
      sectorCode: "",
      telephoneNumber: "",

      // Form control
      showSecondForm: true,

      // Options for dropdowns
      countries: [
        "Bangladesh",
        "Sri Lanka",
        "Japan",
        "United States",
        "Canada",
        "United Kingdom",
      ],
      districts: [
        "Dhaka",
        "Chittagong",
        "Khulna",
        "Rajshahi",
        "Sylhet",
        "Barisal",
      ],
      idTypes: ["NID", "Passport", "Driving License"],
      sectors: ["Sector 1", "Sector 2", "Sector 3"],
    };
  },
  methods: {
    handleSecondFormSubmit() {
      // Handle the form submission and redirect to success page
      console.log("Form data:", this.$data);
      this.$router.push({ name: "SuccessPage" }); // Redirect to SuccessPage
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Aligns the form to the top instead of the center */
  padding: 20px;
  margin-left: 200px; /* Adjust this margin based on your navbar width */
}

.form-box {
  width: 100%;
  max-width: 1200px;
  max-height: 100vh; /* Allow the form to be as tall as the viewport */
  padding: 20px;
  padding-bottom: 60px; /* Adjust padding for button visibility */
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-top: 20px;
  overflow-y: auto; /* Enable vertical scrolling */
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.form-group {
  flex: 1;
  min-width: 200px;
  margin: 0 10px 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

.radio-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.required {
  color: red;
  font-size: 0.9em;
}

select,
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: auto; /* Set button width to auto */
  padding: 10px 20px; /* Adjust padding for appropriate button size */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em; /* Slightly smaller font size */
  margin-top: 20px; /* Add margin to top for spacing */
  display: block; /* Ensure block display for centering */
  align-self: center; /* Center button within the form */
}

button:hover {
  background-color: #0056b3;
}

.section {
  margin-top: 20px;
  padding-top: 10px;
  border-top: 2px solid #007bff;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-box {
    padding: 10px;
  }

  .row {
    flex-direction: column; /* Stack the fields on top of each other */
  }

  .form-group {
    width: 100%;
  }

  .container {
    margin-left: 0;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  h2,
  h3 {
    font-size: 1.2em;
  }

  button {
    width: 100%;
    font-size: 1em;
    padding: 12px;
  }

  select,
  input {
    font-size: 1em;
  }
}
</style>
