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

        <!-- New Branch Section -->
        <v-list-item
          prepend-icon=""
          title="Branch"
          value="branch"
          @click="toggleSection('branch')"
        >
          <v-list v-show="showBranchList || selectedItem === 'branch'">
            <RouterLink to="new-inquiry">
              <v-list-item
                :class="{ active: isActive('New Inquiry') }"
                title="New Inquiry"
                @click="handleItemClick('New Inquiry', 'branch')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="all-previous-inquiry">
              <v-list-item
                :class="{ active: isActive('All Previous Inquiry') }"
                title="All Previous Inquiry"
                @click="handleItemClick('All Previous Inquiry', 'branch')"
              ></v-list-item>
            </RouterLink>
            <RouterLink to="branch-search-inquiry">
              <v-list-item
                :class="{ active: isActive('Branch Search Inquiry') }"
                title="Branch Search Inquiry"
                @click="handleItemClick('Branch Search Inquiry', 'branch')"
              ></v-list-item>
            </RouterLink>
            <v-list-item
              title="Reporting"
              @click="toggleSubSection('branchReporting')"
            >
              <v-list
                v-show="
                  showBranchReportingList || selectedItem === 'branchReporting'
                "
              >
                <RouterLink to="branch-search-inquiry">
                  <v-list-item
                    :class="{ active: isActive('New Report') }"
                    title="New Report"
                    @click="handleItemClick('New Report', 'branchReporting')"
                  ></v-list-item>
                </RouterLink>
                <RouterLink to="branch-search-inquiry">
                  <v-list-item
                    :class="{ active: isActive('Update Reporting') }"
                    title="Update Reporting"
                    @click="
                      handleItemClick('Update Reporting', 'branchReporting')
                    "
                  ></v-list-item>
                </RouterLink>
              </v-list>
            </v-list-item>
            <v-list-item
              title="Data Correction"
              @click="toggleSubSection('branchDataCorrection')"
            >
              <v-list
                v-show="
                  showBranchDataCorrectionList ||
                  selectedItem === 'branchDataCorrection'
                "
              >
                <v-list-item
                  :class="{ active: isActive('Subject') }"
                  title="Subject"
                  @click="handleItemClick('Subject', 'branchDataCorrection')"
                ></v-list-item>
                <v-list-item
                  :class="{ active: isActive('Contract') }"
                  title="Contract"
                  @click="handleItemClick('Contract', 'branchDataCorrection')"
                ></v-list-item>
                <v-list-item
                  :class="{ active: isActive('Link') }"
                  title="Link"
                  @click="handleItemClick('Link', 'branchDataCorrection')"
                ></v-list-item>
              </v-list>
            </v-list-item>
            <v-list-item
              title="Service Charge"
              @click="toggleSubSection('branchServiceCharge')"
            >
              <v-list
                v-show="
                  showBranchServiceChargeList ||
                  selectedItem === 'branchServiceCharge'
                "
              >
                <v-list-item
                  :class="{ active: isActive('Monthly') }"
                  title="Monthly"
                  @click="handleItemClick('Monthly', 'branchServiceCharge')"
                ></v-list-item>
              </v-list>
            </v-list-item>
            <v-list-item
              title="Reports"
              @click="toggleSubSection('branchReports')"
            >
              <v-list
                v-show="
                  showBranchReportsList || selectedItem === 'branchReports'
                "
              >
                <v-list-item
                  :class="{ active: isActive('Unreported Loan') }"
                  title="Unreported Loan"
                  @click="handleItemClick('Unreported Loan', 'branchReports')"
                ></v-list-item>
                <v-list-item
                  :class="{ active: isActive('Matching Error') }"
                  title="Matching Error"
                  @click="handleItemClick('Matching Error', 'branchReports')"
                ></v-list-item>
                <v-list-item
                  :class="{ active: isActive('Reporting Summary') }"
                  title="Reporting Summary"
                  @click="handleItemClick('Reporting Summary', 'branchReports')"
                ></v-list-item>
              </v-list>
            </v-list-item>
          </v-list>
        </v-list-item>

        <!-- New Zone/Circle Section -->
        <v-list-item
          prepend-icon=""
          title="Zone/Circle"
          value="zoneCircle"
          @click="toggleSection('zoneCircle')"
        >
          <v-list v-show="showZoneCircleList || selectedItem === 'zoneCircle'">
            <v-list-item
              title="Inquiry"
              @click="toggleSubSection('zoneCircleInquiry')"
            >
              <v-list
                v-show="
                  showZoneCircleInquiryList ||
                  selectedItem === 'zoneCircleInquiry'
                "
              >
                <v-list-item
                  :class="{ active: isActive('Search Inquiry') }"
                  title="Search Inquiry"
                  @click="
                    handleItemClick('Search Inquiry', 'zoneCircleInquiry')
                  "
                ></v-list-item>
              </v-list>
            </v-list-item>
            <v-list-item
              title="Reporting"
              @click="toggleSubSection('zoneCircleReporting')"
            >
              <v-list
                v-show="
                  showZoneCircleReportingList ||
                  selectedItem === 'zoneCircleReporting'
                "
              >
                <v-list-item
                  :class="{ active: isActive('Branch Reporting Status') }"
                  title="Branch Reporting Status"
                  @click="
                    handleItemClick(
                      'Branch Reporting Status',
                      'zoneCircleReporting'
                    )
                  "
                ></v-list-item>
              </v-list>
            </v-list-item>
            <v-list-item
              title="Reports"
              @click="toggleSubSection('zoneCircleReports')"
            >
              <v-list
                v-show="
                  showZoneCircleReportsList ||
                  selectedItem === 'zoneCircleReports'
                "
              >
                <v-list-item
                  :class="{ active: isActive('Unreported Loan') }"
                  title="Unreported Loan"
                  @click="
                    handleItemClick('Unreported Loan', 'zoneCircleReports')
                  "
                ></v-list-item>
                <v-list-item
                  :class="{ active: isActive('Matching Error') }"
                  title="Matching Error"
                  @click="
                    handleItemClick('Matching Error', 'zoneCircleReports')
                  "
                ></v-list-item>
                <v-list-item
                  :class="{ active: isActive('Reporting Summary') }"
                  title="Reporting Summary"
                  @click="
                    handleItemClick('Reporting Summary', 'zoneCircleReports')
                  "
                ></v-list-item>
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
.active {
  background-color: #e0e0e0;
}
</style>
