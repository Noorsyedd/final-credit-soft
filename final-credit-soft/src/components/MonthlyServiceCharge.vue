<template>
  <div class="monthly-service-charge">
    <h1>Monthly Service Charge Page</h1>
    <p>Welcome to the Monthly Service Charge page.</p>

    <div class="charge-table">
      <h2>Monthly Service Charges</h2>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Charge (BDT)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Savings Account Maintenance</td>
            <td>৳ 100.00</td>
          </tr>
          <tr>
            <td>Current Account Maintenance</td>
            <td>৳ 150.00</td>
          </tr>
          <tr>
            <td>Business Account Maintenance</td>
            <td>৳ 300.00</td>
          </tr>
          <tr>
            <td>Loan Account Management</td>
            <td>৳ 250.00</td>
          </tr>
          <tr>
            <td>ATM Service Fee (after 5 free withdrawals)</td>
            <td>৳ 25.00</td>
          </tr>
          <tr>
            <td>Online Banking Maintenance</td>
            <td>৳ 50.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonthlyServiceCharge",
};
</script>

<style scoped>
.monthly-service-charge {
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

.charge-table {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table th,
table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

table th {
  background-color: #f4f4f4;
}
</style>
