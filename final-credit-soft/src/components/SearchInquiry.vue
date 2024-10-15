<template>
  <div class="search-inquiry-page">
    <section class="hero-section">
      <h1>Search for Inquiries</h1>
      <p>
        Welcome to the inquiry search portal. Use the search bar below to
        quickly find relevant inquiries by entering keywords or inquiry IDs.
      </p>
    </section>

    <!-- Search Section -->
    <section class="search-section">
      <input
        type="text"
        class="search-input"
        placeholder="Enter your inquiry here..."
      />
      <button class="search-btn">Search</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "SearchInquiry",
};
</script>

<style scoped>
body {
  background-color: #f4f6f8;
  font-family: "Arial", sans-serif;
  margin: 0;
}

.search-inquiry-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensures content takes full height */
  background-color: #ffffff;
  padding: 20px;
}

.hero-section {
  text-align: center;
  margin-bottom: 30px;
}

.hero-section h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
}

.hero-section p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.search-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
}

.search-input {
  padding: 12px;
  width: 350px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.search-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
}

.search-btn {
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.search-btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px); /* Slight lift on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.search-btn:active {
  transform: translateY(1px); /* Slight press down on click */
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .search-input {
    width: 250px;
    font-size: 14px;
  }

  .search-btn {
    padding: 10px 20px;
    font-size: 14px;
  }

  .hero-section h1 {
    font-size: 2rem;
  }

  .hero-section p {
    font-size: 1rem;
  }
}
</style>
