<template>
  <v-navigation-drawer permanent>
    <v-list>
      <v-list-item
        prepend-avatar="../assets/agrani_bank_round_logo-modified.png"
        subtitle="Credit Info System"
        title="Agrani Bank PLC"
        value="dashboard"
        @click="gotoDashboard"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item-group v-model="selectedItem">
        <!-- Existing Sections -->

        <v-list-item
          prepend-icon=""
          title="Inquiry"
          value="inquiry"
          @click="toggleSection('inquiry')"
        >
          <v-list v-show="showInquiryList || selectedItem === 'inquiry'">
            <RouterLink to="assign-inquiry">
              <v-list-item
                :class="{ active: isActive('Assign Inquiry') }"
                title="Assign Inquiry"
                @click="handleItemClick('Assign Inquiry', 'inquiry')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="search-inquiry">
              <v-list-item
                :class="{ active: isActive('Search Inquiry') }"
                title="Search Inquiry"
                @click="handleItemClick('Search Inquiry', 'inquiry')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="change-assignment">
              <v-list-item
                :class="{ active: isActive('Change Assignment') }"
                title="Change Assignment"
                @click="handleItemClick('Change Assignment', 'inquiry')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="reverse-inquiry">
              <v-list-item
                :class="{ active: isActive('Reverse Inquiry') }"
                title="Reverse Inquiry"
                @click="handleItemClick('Reverse Inquiry', 'inquiry')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="manage-inquiry">
              <v-list-item
                :class="{ active: isActive('Manage Inquiry User') }"
                title="Manage Inquiry User"
                @click="handleItemClick('Manage Inquiry User', 'inquiry')"
              ></v-list-item>
            </RouterLink>
          </v-list>
        </v-list-item>
        <v-list-item
          prepend-icon=""
          title="Reporting"
          value="reporting"
          @click="toggleSection('reporting')"
        >
          <v-list v-show="showReportingList || selectedItem === 'reporting'">
            <RouterLink to="pending-report">
              <v-list-item
                :class="{ active: isActive('Pending Report') }"
                title="Pending Report"
                @click="handleItemClick('Pending Report', 'reporting')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="individual-branch">
              <v-list-item
                :class="{ active: isActive('Individual Branch') }"
                title="Individual Branch"
                @click="handleItemClick('Individual Branch', 'reporting')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="subject-data">
              <v-list-item
                :class="{ active: isActive('Subject Data') }"
                title="Subject Data"
                @click="handleItemClick('Subject Data', 'reporting')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="contract-data">
              <v-list-item
                :class="{ active: isActive('Contract Data') }"
                title="Contract Data"
                @click="handleItemClick('Contract Data', 'reporting')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="link-data">
              <v-list-item
                :class="{ active: isActive('Link Data') }"
                title="Link Data"
                @click="handleItemClick('Link Data', 'reporting')"
              ></v-list-item>
            </RouterLink>
          </v-list>
        </v-list-item>
        <v-list-item
          prepend-icon=""
          title="Data Correction"
          value="dataCorrection"
          @click="toggleSection('dataCorrection')"
        >
          <v-list
            v-show="showDataCorrectionList || selectedItem === 'dataCorrection'"
          >
            <RouterLink to="correct-data">
              <v-list-item
                :class="{ active: isActive('Correct Data') }"
                title="Correct Data"
                @click="handleItemClick('Correct Data', 'dataCorrection')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="update-data">
              <v-list-item
                :class="{ active: isActive('Update Data') }"
                title="Update Data"
                @click="handleItemClick('Update Data', 'dataCorrection')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="delete-data">
              <v-list-item
                :class="{ active: isActive('Delete Data') }"
                title="Delete Data"
                @click="handleItemClick('Delete Data', 'dataCorrection')"
              ></v-list-item>
            </RouterLink>
          </v-list>
        </v-list-item>
        <v-list-item
          prepend-icon=""
          title="Service Charge"
          value="serviceCharge"
          @click="toggleSection('serviceCharge')"
        >
          <v-list
            v-show="showServiceChargeList || selectedItem === 'serviceCharge'"
          >
            <RouterLink to="individual-branch-data">
              <v-list-item
                :class="{ active: isActive('Individual Branch Data') }"
                title="Individual Branch Data"
                @click="
                  handleItemClick('Individual Branch Data', 'serviceCharge')
                "
              ></v-list-item>
            </RouterLink>
            <RouterLink to="monthly-charge">
              <v-list-item
                :class="{ active: isActive('Monthly Charge') }"
                title="Monthly Charge"
                @click="handleItemClick('Monthly Charge', 'serviceCharge')"
              ></v-list-item>
            </RouterLink>
          </v-list>
        </v-list-item>

        <!-- Reports section -->
        <v-list-item
          prepend-icon=""
          title="Reports"
          value="reports"
          @click="toggleSection('reports')"
        >
          <v-list v-show="showReportsList || selectedItem === 'reports'">
            <RouterLink to="branch-info">
              <v-list-item
                :class="{ active: isActive('Branch Info') }"
                title="Branch Info"
                @click="handleItemClick('Branch Info', 'reports')"
              ></v-list-item>
            </RouterLink>
            <v-list-item
              title="Individual Branch"
              @click="toggleSection('individualBranch')"
            >
              <v-list
                v-show="
                  showIndividualBranchList ||
                  selectedItem === 'individualBranch' ||
                  selectedItem === 'unreportedLoan' ||
                  selectedItem === 'matchingError'
                "
              >
                <RouterLink to="unreported-loan">
                  <v-list-item
                    :class="{ active: isActive('Unreported Loan') }"
                    title="Unreported Loan"
                    @click="
                      handleItemClick('Unreported Loan', 'individualBrach')
                    "
                  ></v-list-item>
                </RouterLink>
                <RouterLink to="matching-error">
                  <v-list-item
                    :class="{ active: isActive('Matching Error') }"
                    title="Matching Error"
                    @click="
                      handleItemClick('Matching Error', 'individualBranch')
                    "
                  ></v-list-item>
                </RouterLink>
              </v-list>
            </v-list-item>
            <RouterLink to="summary-report">
              <v-list-item
                :class="{ active: isActive('Summary Report') }"
                title="Summary Report"
                @click="handleItemClick('Summary Report', 'reports')"
              ></v-list-item>
            </RouterLink>
          </v-list>
        </v-list-item>

        <!-- Subject Information -->
        <RouterLink to="subject-info">
          <v-list-item
            prepend-icon=""
            title="Subject Information"
            value="subjectInfo"
            @click="toggleSection('subjectInfo')"
          >
            <v-list
              v-show="showSubjectInfoList || selectedItem === 'subjectInfo'"
            >
              <v-list-item
                title="Add Subject"
                @click="toggleSection('addSubject')"
              >
                <v-list
                  v-show="
                    showAddSubjectList ||
                    selectedItem === 'addSubject' ||
                    isActive('Person') ||
                    isActive('Institution')
                  "
                >
                  <RouterLink to="person-info">
                    <v-list-item
                      :class="{ active: isActive('Person') }"
                      title="Person"
                      @click="handleItemClick('Person', 'addSubject')"
                    ></v-list-item>
                  </RouterLink>
                  <RouterLink to="institution-info">
                    <v-list-item
                      :class="{ active: isActive('Institution') }"
                      title="Institution"
                      @click="handleItemClick('Institution', 'addSubject')"
                    ></v-list-item>
                  </RouterLink>
                </v-list>
              </v-list-item>
            </v-list>
          </v-list-item>
        </RouterLink>

        <!--Subject Information -end -->
        <v-list-item
          prepend-icon=""
          title="Admin"
          value="admin"
          @click="toggleSection('admin')"
        >
          <v-list v-show="showAdminList || selectedItem === 'admin'">
            <RouterLink to="admin-assign-inquiry">
              <v-list-item
                :class="{ active: isActive('Admin Assign Inquiry') }"
                title="Admin Assign Inquiry"
                @click="handleItemClick('Admin Assign Inquiry', 'admin')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="admin-search-inquiry">
              <v-list-item
                :class="{ active: isActive('Admin Search Inquiry') }"
                title="Admin Search Inquiry"
                @click="handleItemClick('Admin Search Inquiry', 'admin')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="admin-change-assignment">
              <v-list-item
                :class="{ active: isActive('Admin Change Assignment') }"
                title="Admin Change Assignment"
                @click="handleItemClick('Admin Change Assignment', 'admin')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="admin-reverse-inquiry">
              <v-list-item
                :class="{ active: isActive('Admin Reverse Inquiry') }"
                title="Admin Reverse Inquiry"
                @click="handleItemClick('Admin Reverse Inquiry', 'admin')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="admin-manage-inquiry-user">
              <v-list-item
                :class="{ active: isActive('Admin Manage Inquiry User') }"
                title="Admin Manage Inquiry User"
                @click="handleItemClick('Admin Manage Inquiry User', 'admin')"
              ></v-list-item>
            </RouterLink>
            <v-list-item
              title="Service Charge"
              @click="toggleSubSection('adminServiceCharge')"
            >
              <v-list
                v-show="
                  showAdminServiceChargeList ||
                  selectedItem === 'adminServiceCharge'
                "
              >
                <RouterLink to="individual-branch-service-charge">
                  <v-list-item
                    :class="{
                      active: isActive('Individual Branch Service Charge'),
                    }"
                    title="Individual Branch Service Charge"
                    @click="
                      handleItemClick(
                        'Individual Branch Service Charge',
                        'adminServiceCharge'
                      )
                    "
                  ></v-list-item>
                </RouterLink>
                <RouterLink to="monthly-service-charge">
                  <v-list-item
                    :class="{ active: isActive('Monthly Service Charge') }"
                    title="Monthly Service Charge"
                    @click="
                      handleItemClick(
                        'Monthly Service Charge',
                        'adminServiceCharge'
                      )
                    "
                  ></v-list-item>
                </RouterLink>
              </v-list>
            </v-list-item>
          </v-list>
        </v-list-item>

        <!-- Logout Button -->
        <v-list-item>
          <v-btn color="error" text @click="logout">Logout</v-btn>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: null,
      showInquiryList: false,
      showReportingList: false,
      showDataCorrectionList: false,
      showServiceChargeList: false,
      showReportsList: false,
      showIndividualBranchList: false,
      showAdminList: false,
      showAdminServiceChargeList: false,
      showBranchList: false,
      showBranchReportingList: false,
      showBranchDataCorrectionList: false,
      showBranchServiceChargeList: false,
      showBranchReportsList: false,
      showZoneCircleList: false,
      showZoneCircleInquiryList: false,
      showZoneCircleReportingList: false,
      showZoneCircleReportsList: false,
      activeItem: null,
    };
  },
  methods: {
    isActive(item) {
      return this.activeItem === item;
    },
    handleItemClick(item, section) {
      this.activeItem = item;
      this.selectedItem = section;
      console.log("Clicked:", item);
      // Handle item click logic here
    },
    logout() {
      // Implement your logout functionality here
      localStorage.removeItem("authToken");
      this.$router.push({
        name: "LoginView", // Make sure this matches the name of your login route
      });
    },
    gotoDashboard() {
      this.$router.push({
        name: "WelcomeMessage",
      });
    },
    toggleSection(section) {
      this[`show${section.charAt(0).toUpperCase() + section.slice(1)}List`] =
        !this[`show${section.charAt(0).toUpperCase() + section.slice(1)}List`];
    },
    toggleSubSection(section) {
      this[`show${section.charAt(0).toUpperCase() + section.slice(1)}List`] =
        !this[`show${section.charAt(0).toUpperCase() + section.slice(1)}List`];
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}

v-list-item {
  transition: background-color 0.3s, color 0.3s;
}

/* Styling for active state */
.active {
  background-color: #3f51b5; /* Darker shade for active item */
  color: white; /* Text color for active item */
}

/* General styles for list items */
v-list-item {
  border-radius: 4px; /* Rounded corners for list items */
  padding: 12px 16px; /* Increased padding for better spacing */
  margin: 4px 0; /* Margin to separate items */
  display: flex; /* Align content properly */
  align-items: center; /* Center items vertically */
}

/* Hover effect for list items */
v-list-item:hover {
  background-color: #f5f5f5; /* Light grey background on hover */
  cursor: pointer; /* Change cursor on hover */
}

/* Styling for the titles */
v-list-item-title {
  font-size: 16px; /* Standard font size for titles */
  font-weight: 500; /* Medium weight for titles */
  color: #333; /* Dark color for better readability */
}

/* Subtitles styling */
v-list-item-subtitle {
  font-size: 14px; /* Slightly smaller font for subtitles */
  color: #777; /* Light grey for subtitles */
}

/* Button styling for logout */
v-btn {
  width: 100%; /* Full width for the logout button */
  padding: 10px; /* Padding for the button */
  text-align: center; /* Center text */
}

/* Icons styling */
v-list-item prepend-icon {
  margin-right: 12px; /* Space between icon and text */
  color: #3f51b5; /* Color for the icons */
}

/* Active item styling for icons */
.active prepend-icon {
  color: white; /* Change icon color for active items */
}

/* Responsive adjustments */
@media (max-width: 600px) {
  v-list-item {
    padding: 10px 12px; /* Reduced padding for smaller screens */
  }

  v-list-item-title {
    font-size: 14px; /* Smaller font size for titles on mobile */
  }

  v-list-item-subtitle {
    font-size: 12px; /* Smaller font size for subtitles on mobile */
  }
}
</style>
