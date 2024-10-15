<template>
  <div class="branch-data-page">
    <!-- Full-width Hero Section with Gradient -->
    <section class="branch-hero">
      <h1>Agrani Bank PLC</h1>
      <p>Find all branch information at your fingertips</p>
      <div class="hero-buttons">
        <button class="btn-primary">View All Branches</button>
        <button class="btn-secondary">Contact Us</button>
      </div>
    </section>

    <!-- Branch Search Section -->
    <section class="branch-search">
      <h2>Find a Branch Near You</h2>
      <div class="search-filter">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by branch name or city..."
          class="input-search"
        />
        <select v-model="selectedCity" class="input-select">
          <option value="">All Cities</option>
          <option v-for="city in cities" :key="city" :value="city">
            {{ city }}
          </option>
        </select>
        <select v-model="selectedService" class="input-select">
          <option value="">All Services</option>
          <option v-for="service in services" :key="service">
            {{ service }}
          </option>
        </select>
        <button class="btn-search">Search</button>
      </div>
    </section>

    <!-- Dynamic Branch List with Advanced Features -->
    <section class="branch-list">
      <h2>Our Branches</h2>
      <div class="branch-cards">
        <div
          v-for="branch in filteredBranches"
          :key="branch.name"
          class="branch-card"
        >
          <h3>{{ branch.name }}</h3>
          <p>{{ branch.address }}</p>
          <p><strong>Phone:</strong> {{ branch.phone }}</p>
          <button class="btn-view-details" @click="showBranchDetails(branch)">
            View Details
          </button>
        </div>
      </div>
    </section>

    <!-- Individual Branch Details as a Modal -->
    <div v-if="showBranch" class="branch-modal">
      <div class="modal-content">
        <span class="close-modal" @click="showBranch = false">&times;</span>
        <h2>{{ selectedBranch.name }}</h2>
        <p>{{ selectedBranch.address }}</p>
        <div class="map">
          <iframe
            :src="`https://www.google.com/maps/embed/v1/place?q=${selectedBranch.latitude},${selectedBranch.longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`"
            width="100%"
            height="300"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <button class="btn-get-directions" @click="getDirections">
          Get Directions
        </button>

        <div class="branch-info">
          <h3>Contact Information</h3>
          <p><strong>Phone:</strong> {{ selectedBranch.phone }}</p>
          <p><strong>Email:</strong> {{ selectedBranch.email }}</p>
          <p><strong>Fax:</strong> {{ selectedBranch.fax }}</p>
          <h3>Available Services</h3>
          <ul>
            <li v-for="service in selectedBranch.services" :key="service">
              {{ service }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Branch Footer with Quick Links -->
    <footer class="branch-footer">
      <div class="footer-links">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#">Branches</a>
      </div>
      <p>&copy; 2024 Agrani Bank PLC. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      selectedCity: "",
      selectedService: "",
      showBranch: false,
      selectedBranch: null,
      branchList: [
        {
          name: "Agrani Bank - Dhanmondi Branch",
          address: "123 Dhanmondi, Dhaka, Bangladesh",
          latitude: "23.7478",
          longitude: "90.3791",
          phone: "+880123456789",
          email: "dhanmondi@agrani.com",
          fax: "+880123456780",
          services: [
            "Savings Account",
            "Loans",
            "Foreign Exchange",
            "Locker Services",
            "ATM Services",
          ],
        },
        // Add more branches here
      ],
      cities: ["Dhaka", "Chittagong", "Sylhet"],
      services: [
        "Savings Account",
        "Loans",
        "Foreign Exchange",
        "Locker Services",
        "ATM Services",
      ],
    };
  },
  computed: {
    filteredBranches() {
      return this.branchList.filter((branch) => {
        const matchesCity = this.selectedCity
          ? branch.address.includes(this.selectedCity)
          : true;
        const matchesService = this.selectedService
          ? branch.services.includes(this.selectedService)
          : true;
        const matchesQuery = this.searchQuery
          ? branch.name
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            branch.address
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())
          : true;
        return matchesCity && matchesService && matchesQuery;
      });
    },
  },
  methods: {
    getDirections() {
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${this.selectedBranch.latitude},${this.selectedBranch.longitude}`,
        "_blank"
      );
    },
    showBranchDetails(branch) {
      this.selectedBranch = branch;
      this.showBranch = true;
    },
  },
};
</script>

<style scoped>
.branch-data-page {
  display: flex;
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
  justify-content: space-between;
  align-items: flex-start;
  font-family: "Arial", sans-serif;
  background-color: #f9f9f9;
  padding: 0;
}

.branch-data-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px; /* Restricting width for readability */
  width: 100%;
  padding: 0 20px;
}

.branch-hero {
  background: linear-gradient(to right, #007bff, #00c6ff);
  color: white;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
  flex: 1;
  min-width: 300px;
  max-width: 400px;
}

.branch-hero h1 {
  font-size: 28px; /* Smaller text size */
  margin-bottom: 10px;
}

.branch-hero p {
  font-size: 16px; /* Smaller text size */
}

.hero-buttons {
  margin-top: 20px;
}

.hero-buttons .btn-primary,
.hero-buttons .btn-secondary {
  padding: 8px 16px; /* Smaller padding */
  margin: 5px;
  border-radius: 50px;
  border: none;
  font-size: 14px; /* Smaller button text */
  cursor: pointer;
}

.hero-buttons .btn-primary {
  background-color: #fff;
  color: #007bff;
  transition: background-color 0.3s;
}

.hero-buttons .btn-primary:hover {
  background-color: #007bff;
  color: white;
}

.hero-buttons .btn-secondary {
  background-color: #ff8c00;
  color: white;
  transition: background-color 0.3s;
}

.hero-buttons .btn-secondary:hover {
  background-color: #e07900;
}

.branch-search {
  padding: 20px;
  background-color: #f4f4f4;
  text-align: center;
  flex: 2;
  max-width: 100%; /* Allow section to grow with the screen */
}

.branch-search h2 {
  font-size: 20px; /* Smaller heading */
  margin-bottom: 20px;
}

.input-search,
.input-select,
.btn-search {
  padding: 8px; /* Smaller input padding */
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px; /* Smaller text size for inputs and buttons */
}

.btn-search {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.branch-list {
  padding: 20px;
  background-color: #fff;
  text-align: left;
  flex: 3;
  min-width: 300px;
}

.branch-list h2 {
  font-size: 22px; /* Smaller heading */
}

.branch-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
}

.branch-card {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.branch-card h3 {
  font-size: 20px; /* Smaller branch card title */
  color: #007bff;
}

.branch-card p {
  font-size: 14px; /* Smaller text for card content */
}

.btn-view-details {
  background-color: #007bff;
  color: white;
  padding: 8px 16px; /* Smaller padding */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px; /* Smaller button text */
}

/* Ensure responsiveness */
@media (max-width: 1024px) {
  .branch-data-page {
    flex-direction: column;
    align-items: center;
  }

  .branch-search {
    width: 100%;
  }

  .branch-hero {
    width: 100%;
    text-align: center;
  }
}
</style>
