<template>
  <div class="container">
    <!-- Second Form -->
    <div v-if="showSecondForm" class="form-box">
      <h2>Add Subject (Person)</h2>

      <form @submit.prevent="submitForm">
        <!-- Row 1 -->
        <div class="row">
          <div class="form-group">
            <label for="name">Name <span class="required">*</span>:</label>
            <input type="text" v-model="personInfo.name" id="name" required />
          </div>

          <div class="form-group">
            <label for="fatherName"
              >Father's Name <span class="required">*</span>:</label
            >
            <input
              type="text"
              v-model="personInfo.father_name"
              id="fatherName"
              required
            />
          </div>

          <div class="form-group">
            <label for="motherName"
              >Mother's Name <span class="required">*</span>:</label
            >
            <input
              type="text"
              v-model="personInfo.mother_name"
              id="motherName"
              required
            />
          </div>

          <div class="form-group">
            <label for="spouseName">Spouse's Name:</label>
            <input
              type="text"
              v-model="personInfo.spouse_name"
              id="spouseName"
            />
          </div>
        </div>

        <!-- Row 2 -->
        <div class="row">
          <div class="form-group">
            <label for="nid">NID <span class="required">*</span>:</label>
            <input type="text" v-model="personInfo.nid" id="nid" required />
          </div>

          <div class="form-group">
            <label for="dob"
              >Date of Birth <span class="required">*</span>:</label
            >
            <input type="date" v-model="personInfo.dob" id="dob" required />
          </div>

          <div class="form-group">
            <label for="districtOfBirth"
              >District of Birth <span class="required">*</span>:</label
            >
            <select
              v-model="personInfo.district_of_birth"
              id="districtOfBirth"
              required
            >
              <option value="" disabled>Select District</option>
              <option value="Dhaka">Dhaka</option>
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
            <input type="text" v-model="personInfo.tin" id="tin" />
          </div>
        </div>

        <!-- Row 3 -->
        <div class="row">
          <div class="form-group">
            <label for="gender">Gender <span class="required">*</span>:</label>
            <div class="radio-group">
              <label
                ><input
                  type="radio"
                  value="Male"
                  v-model="personInfo.gender"
                  required
                />
                Male</label
              >
              <label
                ><input
                  type="radio"
                  value="Female"
                  v-model="personInfo.gender"
                  required
                />
                Female</label
              >
            </div>
          </div>

          <div class="form-group">
            <label for="countryOfBirth"
              >Country of Birth <span class="required">*</span>:</label
            >
            <select
              v-model="personInfo.country_of_birth"
              id="countryOfBirth"
              required
            >
              <option value="" disabled>Select Country</option>
              <option value="Bangladesh">Bangladesh</option>
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
                v-model="personInfo.permanent_district"
                id="permanentDistrict"
                required
              >
                <option value="" disabled>Select District</option>
                <option value="Dhaka">Dhaka</option>
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
                v-model="personInfo.permanent_postal_code"
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
                v-model="personInfo.permanent_details"
                id="permanentDetails"
                required
              />
            </div>

            <div class="form-group">
              <label for="permanentCountry"
                >Country <span class="required">*</span>:</label
              >
              <select
                v-model="personInfo.permanent_country"
                id="permanentCountry"
                required
              >
                <option value="" disabled>Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
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
              <select
                v-model="personInfo.present_district"
                id="presentDistrict"
              >
                <option value="" disabled>Select District</option>
                <option value="Dhaka">Dhaka</option>
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
                v-model="personInfo.present_postal_code"
                id="presentPostalCode"
              />
            </div>

            <div class="form-group">
              <label for="presentDetails">Details:</label>
              <input
                type="text"
                v-model="personInfo.present_details"
                id="presentDetails"
              />
            </div>

            <div class="form-group">
              <label for="presentCountry">Country:</label>
              <select v-model="personInfo.present_country" id="presentCountry">
                <option value="" disabled>Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
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
              <select v-model="personInfo.id_type" id="idType">
                <option value="" disabled>Select ID Type</option>
                <option value="NID">NID</option>
                <option v-for="id in idTypes" :key="id" :value="id">
                  {{ id }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label for="idIssueDate">ID Issue Date:</label>
              <input
                type="date"
                v-model="personInfo.id_issue_date"
                id="idIssueDate"
              />
            </div>

            <div class="form-group">
              <label for="idNumber">ID Number:</label>
              <input type="text" v-model="personInfo.id_number" id="idNumber" />
            </div>

            <div class="form-group">
              <label for="idIssueCountry">ID Issue Country:</label>
              <select v-model="personInfo.id_issue_country" id="idIssueCountry">
                <option value="" disabled>Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
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
              <select v-model="personInfo.sector_code" id="sectorCode" required>
                <option value="" disabled>Select Sector Code</option>
                <option value="Sector 1">Sector 1</option>
                <option v-for="sector in sectors" :key="sector" :value="sector">
                  {{ sector }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label for="telephoneNumber">Telephone Number:</label>
              <input
                type="text"
                v-model="personInfo.telephone_number"
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
  data() {
    return {
      showSecondForm: true,
      personInfo: {
        name: "",
        father_name: "",
        mother_name: "",
        spouse_name: "",
        nid: "",
        dob: "", // Date of Birth
        district_of_birth: "",
        tin: "",
        gender: "",
        country_of_birth: "",
        permanent_district: "",
        permanent_postal_code: "",
        permanent_details: "",
        permanent_country: "",
        present_district: "",
        present_postal_code: "",
        present_details: "",
        present_country: "",
        id_type: "",
        id_issue_date: "",
        id_number: "",
        id_issue_country: "",
        sector_code: "",
        telephone_number: "",
      },
    };
  },
  mounted() {
    fetch("http://localhost:5000/api/incomplete-person-info")
      .then((response) => {
        console.log("Response headers:", response.headers);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        console.log("Content-Type:", contentType);

        if (contentType && contentType.includes("application/json")) {
          return response.json(); // Parse JSON response
        } else {
          // Log the raw response for debugging
          return response.text().then((text) => {
            console.error("Non-JSON response:", text);
            throw new Error("Response is not JSON");
          });
        }
      })
      .then((data) => {
        if (data.success && data.data.length > 0) {
          // Assuming you take the first incomplete record
          this.personInfo = data.data[0];
          // Format date fields to "yyyy-MM-dd"
          if (this.personInfo.dob) {
            this.personInfo.dob = this.formatDateToYyyyMmDd(
              this.personInfo.dob
            );
          }
          if (this.personInfo.id_issue_date) {
            this.personInfo.id_issue_date = this.formatDateToYyyyMmDd(
              this.personInfo.id_issue_date
            );
          }
        } else {
          console.warn("No incomplete person info available");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  methods: {
    // Function to convert ISO date to yyyy-MM-dd
    formatDateToYyyyMmDd(isoDate) {
      const date = new Date(isoDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },

    submitForm() {
      const id = this.personInfo.id; // The ID of the person being updated
      fetch(`http://localhost:5000/api/update-person-info/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.personInfo),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // alert("Person info updated successfully!");
            // Optionally redirect or clear form
            this.$router.push({ name: "SuccessPage" });
          } else {
            alert("Error updating person info");
          }
        })
        .catch((error) => console.error("Error updating person info:", error));
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
  margin-left: calc(200px + 2%); /* Dynamic adjustment based on navbar width */
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
  margin-right: auto; /* Push the form to the right */
}

@media screen and (max-width: 768px) {
  .form-box {
    margin-left: 10px; /* Adjust margin for smaller screens */
    margin-right: 10px;
  }
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

button {
  width: auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  margin-top: 20px;
  align-self: center; /* Center button within the form */
}

.section h3 {
  border-bottom: 2px solid #007bff; /* Underline section headers */
  margin-bottom: 15px;
  padding-bottom: 5px;
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
</style>
