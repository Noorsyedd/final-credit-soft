<template>
  <div class="pending-report-page">
    <h1>Pending Report Page</h1>
    <p>Welcome to the Pending Report page.</p>

    <!-- Placeholder for Pending Reports Table -->
    <div class="report-list">
      <h2>List of Pending Reports</h2>
      <p>No pending reports available at the moment.</p>
      <!-- You can replace the above with a dynamic table or list in the future -->
    </div>
  </div>
</template>

<script>
export default {
  name: "PendingReport",
};
</script>

<style scoped>
.pending-report-page {
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

.report-list {
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
}
</style>
