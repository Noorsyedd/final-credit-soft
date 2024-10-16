<template>
  <div class="branch-service-charge">
    <h1>Individual Branch Service Charge Page</h1>
    <p>Welcome to the Individual Branch Service Charge page.</p>

    <div class="service-charge-table">
      <h2>Service Charges</h2>
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
            <td>৳ 150.00</td>
          </tr>
          <tr>
            <td>Current Account Maintenance</td>
            <td>৳ 200.00</td>
          </tr>
          <tr>
            <td>Loan Processing Fee</td>
            <td>৳ 500.00</td>
          </tr>
          <tr>
            <td>Cheque Book Issuance</td>
            <td>৳ 100.00</td>
          </tr>
          <tr>
            <td>Account Statement (Printed)</td>
            <td>৳ 50.00</td>
          </tr>
          <tr>
            <td>ATM Withdrawal Fee (after 5 free withdrawals)</td>
            <td>৳ 20.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndividualBranchServiceCharge",
};
</script>

<style scoped>
.branch-service-charge {
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

.service-charge-table {
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
