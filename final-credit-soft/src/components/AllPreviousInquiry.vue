<template>
  <div class="all-previous-inquiry-page">
    <h1>All Previous Inquiry Page</h1>
    <p>
      Welcome to All Previous Inquiry. Here you can view all your previous
      inquiries.
    </p>

    <div class="inquiry-list">
      <h2>Previous Inquiries</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="inquiry in inquiries" :key="inquiry.id">
            <td>{{ inquiry.id }}</td>
            <td>{{ inquiry.name }}</td>
            <td>{{ inquiry.email }}</td>
            <td>{{ inquiry.message }}</td>
            <td>{{ inquiry.dateSubmitted }}</td>
          </tr>
          <tr v-if="inquiries.length === 0">
            <td colspan="5" style="text-align: center">
              No previous inquiries found.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllPreviousInquiry",
  data() {
    return {
      inquiries: [
        // Sample data
        {
          id: 1,
          name: "Rahul Khan",
          email: "rahul.khan@example.com",
          message: "Inquiry about loan options.",
          dateSubmitted: "2024-10-01",
        },
        {
          id: 2,
          name: "Sofia Ahmed",
          email: "sofia.ahmed@example.com",
          message: "Question regarding account services.",
          dateSubmitted: "2024-10-05",
        },
        {
          id: 3,
          name: "Jamal Hossain",
          email: "jamal.hossain@example.com",
          message: "Request for account statement.",
          dateSubmitted: "2024-10-10",
        },
      ],
    };
  },
};
</script>

<style scoped>
.all-previous-inquiry-page {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h2 {
  color: #007bff;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table th,
table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
}
</style>
