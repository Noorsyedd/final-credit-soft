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
  background-color: #f4f6f8; /* Light background for overall page */
  font-family: "Arial", sans-serif; /* Clean font choice */
  margin: 0; /* Remove default margins */
}

/* Main container for the search inquiry page */
.search-inquiry-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensures content takes full height */
  background-color: #ffffff; /* White background for main content */
  padding: 40px 20px; /* More padding for better layout */
  border-radius: 8px; /* Rounded corners for a softer look */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
}

/* Hero section styling */
.hero-section {
  text-align: center; /* Center text for better presentation */
  margin-bottom: 40px; /* Increased margin for better separation */
}

.hero-section h1 {
  font-size: 2.5rem; /* Large heading */
  font-weight: 700; /* Bold text */
  color: #333; /* Dark color for contrast */
  margin-bottom: 15px; /* Space below the heading */
}

.hero-section p {
  font-size: 1.1rem; /* Slightly larger text */
  color: #555; /* Darker gray for better readability */
  max-width: 600px; /* Limit width for better line length */
  margin: 0 auto; /* Center paragraph */
}

/* Search section styling */
.search-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* Space above the search section */
  width: 100%; /* Full width for search section */
}

.search-input {
  padding: 12px 15px; /* Comfortable padding for input */
  width: 350px; /* Fixed width for input */
  border-radius: 6px; /* Rounded corners */
  border: 1px solid #ccc; /* Light gray border */
  font-size: 16px; /* Base font size */
  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft inner shadow */
}

.search-input:focus {
  outline: none; /* Remove default outline */
  border-color: #007bff; /* Highlight border on focus */
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2); /* Focus shadow */
}

/* Button styling */
.search-btn {
  padding: 12px 24px; /* Comfortable button size */
  background-color: #007bff; /* Primary button color */
  color: white; /* White text on button */
  border: none; /* No border */
  border-radius: 6px; /* Rounded corners */
  font-size: 16px; /* Base font size */
  margin-left: 10px; /* Space between input and button */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease; /* Smooth transitions */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.search-btn:hover {
  background-color: #0056b3; /* Darker shade on hover */
  transform: translateY(-2px); /* Slight lift on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Shadow effect */
}

.search-btn:active {
  transform: translateY(1px); /* Press down effect on click */
}

/* Results section styling */
.results-section {
  margin-top: 20px; /* Space above results */
  text-align: center; /* Center the result text */
}

.result-card {
  background-color: #f9f9f9; /* Light background for results */
  border-radius: 8px; /* Rounded corners */
  padding: 20px; /* Comfortable padding */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .search-input {
    width: 100%; /* Full width on smaller screens */
    max-width: 250px; /* Max width for input */
    font-size: 14px; /* Smaller font size */
  }

  .search-btn {
    padding: 10px 20px; /* Smaller button padding */
    font-size: 14px; /* Smaller font size */
  }

  .hero-section h1 {
    font-size: 2rem; /* Smaller heading on mobile */
  }

  .hero-section p {
    font-size: 1rem; /* Smaller paragraph text on mobile */
  }
}
</style>
