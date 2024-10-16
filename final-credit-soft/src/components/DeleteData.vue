<template>
  <div class="delete-data-container">
    <h1 class="page-title">Delete Data Entry</h1>
    <p class="page-description">
      Use this page to permanently delete a data entry from the Credit
      Information Reporting System.
    </p>

    <form class="delete-data-form">
      <!-- Delete Information Section -->
      <div class="form-section">
        <h2>Delete Information</h2>

        <div class="form-group">
          <label for="delete_type">Delete Type</label>
          <select id="delete_type" required>
            <option value="" disabled selected>
              Select the type of data to delete
            </option>
            <option value="personal_info">Personal Information</option>
            <option value="contract_info">Contract Information</option>
            <option value="contact_details">Contact Details</option>
            <option value="financial_info">Financial Information</option>
          </select>
        </div>

        <div class="form-group">
          <label for="record_id">Record ID</label>
          <input
            type="text"
            id="record_id"
            placeholder="Enter the record ID to delete"
            required
          />
        </div>

        <div class="form-group">
          <label for="delete_reason">Reason for Deletion</label>
          <textarea
            id="delete_reason"
            placeholder="Provide a reason for the deletion"
            required
          ></textarea>
        </div>
      </div>

      <button type="submit" class="delete-button">Delete Record</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "DeleteData",
};
</script>

<style scoped>
.delete-data-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.page-title {
  font-size: 28px;
  font-weight: bold;
  color: #d9534f;
  text-align: center;
  margin-bottom: 20px;
}

.page-description {
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
}

.delete-data-form {
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

textarea {
  height: 80px;
  resize: vertical;
}

.delete-button {
  background-color: #d9534f;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  text-align: center;
}

.delete-button:hover {
  background-color: #c9302c;
}
</style>
