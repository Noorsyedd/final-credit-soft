<template>
  <div class="monthly-charge-page">
    <h1>Monthly Charges</h1>
    <p></p>

    <div class="scroll-container">
      <!-- Account Maintenance Charges -->
      <section class="charge-section">
        <h2>Account Maintenance Charges</h2>
        <div class="responsive-table">
          <table>
            <thead>
              <tr>
                <th>Account Type</th>
                <th>Monthly Charge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Savings Account</td>
                <td>৳500.00</td>
              </tr>
              <tr>
                <td>Current Account</td>
                <td>৳1,000.00</td>
              </tr>
              <tr>
                <td>Business Account</td>
                <td>৳2,500.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Transaction Fees -->
      <section class="charge-section">
        <h2>Transaction Fees</h2>
        <div class="responsive-table">
          <table>
            <thead>
              <tr>
                <th>Transaction Type</th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Domestic Transfers</td>
                <td>৳100.00 per transfer</td>
              </tr>
              <tr>
                <td>International Transfers</td>
                <td>৳1,500.00 per transfer</td>
              </tr>
              <tr>
                <td>Bill Payments</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Check Issuance</td>
                <td>৳250.00 per check</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ATM Withdrawal Charges -->
      <section class="charge-section">
        <h2>ATM Withdrawal Charges</h2>
        <div class="responsive-table">
          <table>
            <thead>
              <tr>
                <th>ATM Type</th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Domestic ATMs</td>
                <td>৳50.00 per withdrawal after 5 free withdrawals</td>
              </tr>
              <tr>
                <td>International ATMs</td>
                <td>৳500.00 per withdrawal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Service Charges -->
      <section class="charge-section">
        <h2>Additional Service Charges</h2>
        <div class="responsive-table">
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Charge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Locker Rent</td>
                <td>৳5,000.00 per year</td>
              </tr>
              <tr>
                <td>Checkbook Issuance</td>
                <td>৳1,000.00 per checkbook</td>
              </tr>
              <tr>
                <td>Account Statement (Printed)</td>
                <td>৳200.00 per statement</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Minimum Balance Fees -->
      <section class="charge-section">
        <h2>Minimum Balance Fees</h2>
        <p>
          If your account balance drops below the minimum required balance, a
          fee will be charged at the end of the month.
        </p>
        <ul>
          <li>Savings Account: Minimum balance of ৳50,000, Fee: ৳1,000.00</li>
          <li>Current Account: Minimum balance of ৳100,000, Fee: ৳2,000.00</li>
          <li>Business Account: Minimum balance of ৳500,000, Fee: ৳5,000.00</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonthlyCharge",
};
</script>

<style scoped>
/* Container for the entire page */
.monthly-charge-page {
  font-family: Arial, sans-serif;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  height: 100vh; /* Full viewport height */
}

/* Scrollable container for all sections */
.scroll-container {
  max-height: 80vh; /* 80% of the viewport height */
  overflow-y: auto; /* Enable vertical scrolling */
  padding-right: 10px;
  scrollbar-width: thin; /* For Firefox */
}

/* Styling for the headings */
h1,
h2 {
  color: #007bff;
  text-align: left;
}

p {
  font-size: 16px;
  margin-bottom: 15px;
}

.charge-section {
  margin-bottom: 30px;
}

/* Table Styling */
.responsive-table {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

table th,
table td {
  padding: 12px 15px;
  text-align: left;
  border: 1px solid #ddd;
  white-space: nowrap;
}

table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

ul {
  padding-left: 20px;
}

ul li {
  margin-bottom: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .monthly-charge-page {
    padding: 10px;
  }

  h1,
  h2 {
    font-size: 24px;
  }

  table th,
  table td {
    font-size: 14px;
    padding: 10px;
  }

  p,
  ul li {
    font-size: 14px;
  }

  ul {
    padding-left: 15px;
  }
}
</style>
