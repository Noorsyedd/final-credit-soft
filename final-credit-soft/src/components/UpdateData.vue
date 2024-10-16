<template>
  <div class="update-data-container">
    <h1 class="page-title">Update Data Entry</h1>
    <p class="page-description">
      Use this page to update information in the Credit Information Reporting
      System.
    </p>

    <form class="update-data-form">
      <!-- Update Information Section -->
      <div class="form-section">
        <h2>Update Information</h2>

        <div class="form-group">
          <label for="update_type">Update Type</label>
          <select id="update_type" required>
            <option value="" disabled selected>
              Select the type of update
            </option>
            <option value="personal_info">Personal Information</option>
            <option value="contract_info">Contract Information</option>
            <option value="contact_details">Contact Details</option>
            <option value="financial_info">Financial Information</option>
          </select>
        </div>

        <div class="form-group">
          <label for="current_value">Current Value</label>
          <input
            type="text"
            id="current_value"
            placeholder="Enter the current value"
            required
          />
        </div>

        <div class="form-group">
          <label for="updated_value">Updated Value</label>
          <input
            type="text"
            id="updated_value"
            placeholder="Enter the new value"
            required
          />
        </div>

        <div class="form-group">
          <label for="update_reason">Reason for Update</label>
          <textarea
            id="update_reason"
            placeholder="Provide a reason for the update"
            required
          ></textarea>
        </div>
      </div>

      <button type="submit" class="submit-button">Submit Update</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UpdateData",
};
</script>

<style scoped>
.update-data-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.page-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.page-description {
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
}

.update-data-form {
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
  padding-bottom: 10px;
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
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #007bff;
  outline: none;
}

textarea {
  height: 80px;
  resize: vertical;
}

.submit-button {
  background-color: #007bff;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  text-align: center;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
