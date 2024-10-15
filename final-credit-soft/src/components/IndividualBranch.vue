<template>
  <div class="individual-branch-page">
    <h1>Individual Branch Page</h1>
    <p>Select a district to view the branches:</p>

    <!-- District List -->
    <ul class="district-list">
      <li
        v-for="district in districts"
        :key="district.name"
        @click="selectDistrict(district)"
      >
        {{ district.name }}
      </li>
    </ul>

    <!-- Subdistricts -->
    <div v-if="selectedDistrict && selectedDistrict.subdistricts">
      <h2>{{ selectedDistrict.name }} Subdistricts</h2>
      <ul class="subdistrict-list">
        <li
          v-for="subdistrict in selectedDistrict.subdistricts"
          :key="subdistrict.name"
          @click="selectSubdistrict(subdistrict)"
        >
          {{ subdistrict.name }}
        </li>
      </ul>
    </div>

    <!-- Branch List -->
    <div v-if="selectedSubdistrict && selectedSubdistrict.branches">
      <h2>Branches in {{ selectedSubdistrict.name }}</h2>
      <ul class="branch-list">
        <li
          v-for="branch in selectedSubdistrict.branches"
          :key="branch.id"
          @click="selectBranch(branch)"
        >
          {{ branch.name }}
        </li>
      </ul>
    </div>

    <!-- Branch Details -->
    <div class="branch-details" v-if="selectedBranch">
      <h2>{{ selectedBranch.name }} Details</h2>
      <p><strong>Address:</strong> {{ selectedBranch.address }}</p>
      <p><strong>Phone:</strong> {{ selectedBranch.phone }}</p>
      <p><strong>Manager:</strong> {{ selectedBranch.manager }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndividualBranch",
  data() {
    return {
      districts: [
        {
          name: "Dhaka",
          subdistricts: [
            {
              name: "Dhaka City",
              branches: [
                {
                  id: 1,
                  name: "Head Office",
                  address: "9D, Dilkusha C/A, Dhaka",
                  phone: "02-123456",
                  manager: "Sultana Shirin",
                },
                {
                  id: 2,
                  name: "Gulshan Branch",
                  address: "23 Gulshan Ave, Dhaka",
                  phone: "02-654321",
                  manager: "Jahidul Karim",
                },
              ],
            },
            {
              name: "Savar",
              branches: [
                {
                  id: 3,
                  name: "Savar Branch",
                  address: "Savar, Dhaka",
                  phone: "02-123987",
                  manager: "Arif Rahman",
                },
              ],
            },
          ],
        },
        {
          name: "Chittagong",
          subdistricts: [
            {
              name: "Chittagong City",
              branches: [
                {
                  id: 4,
                  name: "Agrabad Branch",
                  address: "Agrabad, Chittagong",
                  phone: "031-123456",
                  manager: "Rahim Ahmed",
                },
              ],
            },
          ],
        },
        {
          name: "Sylhet",
          subdistricts: [
            {
              name: "Sylhet City",
              branches: [
                {
                  id: 5,
                  name: "Sylhet Branch",
                  address: "Station Rd, Sylhet",
                  phone: "0821-987654",
                  manager: "Faruk Islam",
                },
              ],
            },
          ],
        },
        // Add more districts, subdistricts, and branches as needed
      ],
      selectedDistrict: null,
      selectedSubdistrict: null,
      selectedBranch: null,
    };
  },
  methods: {
    selectDistrict(district) {
      this.selectedDistrict = district;
      this.selectedSubdistrict = null; // Reset when a new district is selected
      this.selectedBranch = null; // Reset when a new district is selected
    },
    selectSubdistrict(subdistrict) {
      this.selectedSubdistrict = subdistrict;
      this.selectedBranch = null; // Reset when a new subdistrict is selected
    },
    selectBranch(branch) {
      this.selectedBranch = branch;
    },
  },
};
</script>

<style scoped>
.individual-branch-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  margin-bottom: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

ul li {
  cursor: pointer;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
}

ul li:hover {
  background-color: #e9e9e9;
}

ul li.active {
  background-color: #007bff;
  color: white;
}

.branch-details {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  background-color: #f9f9f9;
}

h2 {
  font-size: 20px;
  margin-bottom: 15px;
}

/* Responsive design */
@media (max-width: 768px) {
  h1 {
    font-size: 22px;
  }

  h2 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
  }

  ul li {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 16px;
  }

  p {
    font-size: 12px;
  }

  ul li {
    font-size: 12px;
  }
}
</style>
