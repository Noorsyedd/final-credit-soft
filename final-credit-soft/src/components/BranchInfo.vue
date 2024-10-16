<template>
  <div class="branch-info-page">
    <h1>Branch Information</h1>
    <p>
      Welcome to the Branch Information page. Below you'll find detailed
      information about all branches of Agrani Bank PLC.
    </p>

    <div class="branch-list">
      <!-- Example Branch Data -->
      <div class="branch-card" v-for="branch in branches" :key="branch.id">
        <h2>{{ branch.name }}</h2>
        <p><strong>Branch Code:</strong> {{ branch.code }}</p>
        <p><strong>Location:</strong> {{ branch.location }}</p>
        <p><strong>Phone:</strong> {{ branch.phone }}</p>
        <p><strong>Email:</strong> {{ branch.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BranchInfo",
  data() {
    return {
      branches: [
        {
          id: 1,
          name: "Agrani Bank Head Office",
          code: "001",
          location: "Motijheel, Dhaka",
          phone: "+8802-9566153",
          email: "headoffice@agranibank.com",
        },
        {
          id: 2,
          name: "Dhanmondi Branch",
          code: "002",
          location: "Dhanmondi, Dhaka",
          phone: "+8802-58610052",
          email: "dhanmondi@agranibank.com",
        },
        {
          id: 3,
          name: "Chittagong Branch",
          code: "003",
          location: "Chittagong",
          phone: "+88031-715120",
          email: "chittagong@agranibank.com",
        },
        // Add more branches as needed
      ],
    };
  },
};
</script>

<style scoped>
.branch-info-page {
  font-family: Arial, sans-serif;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

h1 {
  color: #007bff;
  text-align: left;
}

p {
  font-size: 16px;
  margin-bottom: 15px;
}

.branch-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.branch-card {
  border: 1px solid #ddd;
  padding: 20px;
  width: 300px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.branch-card h2 {
  color: #007bff;
  margin-bottom: 10px;
}

.branch-card p {
  margin: 5px 0;
}

@media (max-width: 768px) {
  .branch-list {
    flex-direction: column;
  }

  .branch-card {
    width: 100%;
  }
}
</style>
