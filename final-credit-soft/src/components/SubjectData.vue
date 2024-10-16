<template>
  <div class="subject-data-container">
    <h1 class="page-title">Subject Data Entry</h1>
    <p class="page-subtitle">
      Please fill out the necessary information for credit reporting.
    </p>

    <form @submit.prevent="submitForm" class="subject-form">
      <div class="form-section">
        <h2>Personal Information</h2>

        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="subjectData.name" required />
        </div>

        <div class="form-group">
          <label for="father_name">Father's Name</label>
          <input
            type="text"
            id="father_name"
            v-model="subjectData.father_name"
            required
          />
        </div>

        <div class="form-group">
          <label for="mother_name">Mother's Name</label>
          <input
            type="text"
            id="mother_name"
            v-model="subjectData.mother_name"
            required
          />
        </div>

        <div class="form-group">
          <label for="spouse_name">Spouse Name</label>
          <input
            type="text"
            id="spouse_name"
            v-model="subjectData.spouse_name"
          />
        </div>

        <div class="form-group">
          <label for="nid">National ID (NID)</label>
          <input type="text" id="nid" v-model="subjectData.nid" required />
        </div>

        <div class="form-group">
          <label for="dob">Date of Birth</label>
          <input type="date" id="dob" v-model="subjectData.dob" required />
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <select id="gender" v-model="subjectData.gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="telephone_number">Phone Number</label>
          <input
            type="tel"
            id="telephone_number"
            v-model="subjectData.telephone_number"
            required
          />
        </div>

        <div class="form-group">
          <label for="tin">TIN (Tax Identification Number)</label>
          <input type="text" id="tin" v-model="subjectData.tin" />
        </div>
      </div>

      <div class="form-section">
        <h2>Address Information</h2>

        <div class="form-group">
          <label for="present_address">Present Address</label>
          <input
            type="text"
            id="present_address"
            v-model="subjectData.present_details"
            required
          />
        </div>

        <div class="form-group">
          <label for="permanent_address">Permanent Address</label>
          <input
            type="text"
            id="permanent_address"
            v-model="subjectData.permanent_details"
            required
          />
        </div>

        <div class="form-group">
          <label for="district_of_birth">District of Birth</label>
          <input
            type="text"
            id="district_of_birth"
            v-model="subjectData.district_of_birth"
            required
          />
        </div>

        <div class="form-group">
          <label for="country_of_birth">Country of Birth</label>
          <input
            type="text"
            id="country_of_birth"
            v-model="subjectData.country_of_birth"
            required
          />
        </div>

        <div class="form-group">
          <label for="permanent_country">Permanent Country</label>
          <input
            type="text"
            id="permanent_country"
            v-model="subjectData.permanent_country"
            required
          />
        </div>
      </div>

      <div class="form-section">
        <h2>ID Information</h2>

        <div class="form-group">
          <label for="id_type">ID Type</label>
          <select id="id_type" v-model="subjectData.id_type" required>
            <option value="nid">National ID</option>
            <option value="passport">Passport</option>
            <option value="driving_license">Driving License</option>
          </select>
        </div>

        <div class="form-group">
          <label for="id_issue_date">ID Issue Date</label>
          <input
            type="date"
            id="id_issue_date"
            v-model="subjectData.id_issue_date"
            required
          />
        </div>

        <div class="form-group">
          <label for="id_number">ID Number</label>
          <input
            type="text"
            id="id_number"
            v-model="subjectData.id_number"
            required
          />
        </div>

        <div class="form-group">
          <label for="id_issue_country">ID Issue Country</label>
          <input
            type="text"
            id="id_issue_country"
            v-model="subjectData.id_issue_country"
            required
          />
        </div>
      </div>

      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SubjectData",
  data() {
    return {
      subjectData: {
        name: "",
        father_name: "",
        mother_name: "",
        spouse_name: "",
        nid: "",
        dob: "",
        gender: "",
        telephone_number: "",
        tin: "",
        present_details: "",
        permanent_details: "",
        district_of_birth: "",
        country_of_birth: "",
        permanent_country: "",
        id_type: "",
        id_issue_date: "",
        id_number: "",
        id_issue_country: "",
      },
    };
  },
  methods: {
    submitForm() {
      // You can handle form submission here, such as making an API call.
      console.log("Form submitted:", this.subjectData);
      // Example: Send data to server using fetch or axios
      fetch("http://localhost:5000/api/submit-subject-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.subjectData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Subject data submitted successfully!");
            // Clear form or redirect
          } else {
            alert("Error submitting subject data.");
          }
        })
        .catch((error) => console.error("Error:", error));
    },
  },
};
</script>

<style scoped>
.subject-data-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.page-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
}

.page-subtitle {
  font-size: 16px;
  color: #777;
  text-align: center;
  margin-bottom: 30px;
}

.subject-form {
  display: flex;
  flex-direction: column;
}

.form-section {
  margin-bottom: 30px;
}

.form-section h2 {
  font-size: 20px;
  color: #444;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #007bff;
  outline: none;
}

.submit-button {
  background-color: #007bff;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
