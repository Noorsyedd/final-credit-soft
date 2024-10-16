import { createRouter, createWebHistory } from "vue-router";
import WelcomeMessage from "@/components/WelcomeMessage.vue";
import AssignInquiry from "@/components/AssignInquiry.vue";
import SearchInquiry from "@/components/SearchInquiry.vue";
import ChangeAssignment from "@/components/ChangeAssignment.vue";
import ReverseInquiry from "@/components/ReverseInquiry.vue";
import ManageInquiry from "@/components/ManageInquiry.vue";
import PendingReport from "@/components/PendingReport.vue";
import IndividualBranch from "@/components/IndividualBranch.vue";
import SubjectData from "@/components/SubjectData.vue";
import ContractData from "@/components/ContractData.vue";
import LinkData from "@/components/LinkData.vue";
import CorrectData from "@/components/CorrectData.vue";
import UpdateData from "@/components/UpdateData.vue";
import DeleteData from "@/components/DeleteData.vue";
import IndividualBranchData from "@/components/IndividualBranchData.vue";
import MonthlyCharge from "@/components/MonthlyCharge.vue";
import BranchInfo from "@/components/BranchInfo.vue";
import UnreportedLoan from "@/components/UnreportedLoan.vue";
import MatchingError from "@/components/MatchingError.vue";
import SummaryReport from "@/components/SummaryReport.vue";
import AdminAssignInquiry from "@/components/AdminAssignInquiry.vue";
import AdminSearchInquiry from "@/components/AdminSearchInquiry.vue";
import AdminChangeAssignment from "@/components/AdminChangeAssignment.vue";
import AdminReverseInquiry from "@/components/AdminReverseInquiry.vue";
import AdminManageInquiryUser from "@/components/AdminManageInquiryUser.vue";
import IndividualBranchServiceCharge from "@/components/IndividualBranchServiceCharge.vue";
import MonthlyServiceCharge from "@/components/MonthlyServiceCharge.vue";
import DashboardLayout from "@/components/layouts/DashboardLayout.vue";
import LoginView from "@/components/LoginView.vue";
import SignUpView from "@/components/SignUpView.vue";
import SubjectInfo from "@/components/SubjectInfo.vue";
import PersonInfo from "@/components/PersonInfo.vue";
import AddPerson from "@/components/AddPerson.vue";
import InstitutionInfo from "@/components/InstitutionInfo.vue";
import AddContact from "@/components/AddContact.vue";
import SuccessPage from "@/components/SuccessPage.vue";

const routes = [
  {
    path: "/",
    name: "",
    redirect: "WelcomeMessage",
    component: DashboardLayout,
    children: [
      {
        path: "/WelcomeMessage",
        name: "WelcomeMessage",
        component: WelcomeMessage,
      },
      {
        path: "/assign-inquiry",
        name: "AssignInquiry",
        component: AssignInquiry,
      },
      {
        path: "/institution-info",
        name: "InstitutionInfo",
        component: InstitutionInfo,
      },

      {
        path: "/add-contact",
        name: "AddContact",
        component: AddContact,
      },
      {
        path: "/add-person",
        name: "AddPerson",
        component: AddPerson,
      },
      {
        path: "/subject-info",
        name: "SubjectInfo",
        component: SubjectInfo,
      },
      {
        path: "/person-info",
        name: "Person",
        component: PersonInfo,
      },
      {
        path: "/search-inquiry",
        name: "SearchInquiry",
        component: SearchInquiry,
      },
      {
        path: "/success-page",
        name: "SuccessPage",
        component: SuccessPage,
      },
      {
        path: "/change-assignment",
        name: "ChangeAssignment",
        component: ChangeAssignment,
      },
      {
        path: "/reverse-inquiry",
        name: "ReverseInquiry",
        component: ReverseInquiry,
      },
      {
        path: "/manage-inquiry",
        name: "ManageInquiry",
        component: ManageInquiry,
      },
      {
        path: "/pending-report",
        name: "PendingReport",
        component: PendingReport,
      },
      {
        path: "/individual-branch",
        name: "IndividualBranch",
        component: IndividualBranch,
      },
      {
        path: "/subject-data",
        name: "SubjectData",
        component: SubjectData,
      },
      {
        path: "/contract-data",
        name: "ContractData",
        component: ContractData,
      },
      {
        path: "/link-data",
        name: "LinkData",
        component: LinkData,
      },
      {
        path: "/correct-data",
        name: "CorrectData",
        component: CorrectData,
      },
      {
        path: "/update-data",
        name: "UpdateData",
        component: UpdateData,
      },
      {
        path: "/delete-data",
        name: "DeleteData",
        component: DeleteData,
      },
      {
        path: "/individual-branch-data",
        name: "IndividualBranchData",
        component: IndividualBranchData,
      },
      {
        path: "/monthly-charge",
        name: "MonthlyCharge",
        component: MonthlyCharge,
      },
      {
        path: "/branch-info",
        name: "BranchInfo",
        component: BranchInfo,
      },
      {
        path: "/unreported-loan",
        name: "UnreportedLoan",
        component: UnreportedLoan,
      },
      {
        path: "/matching-error",
        name: "MatchingError",
        component: MatchingError,
      },
      {
        path: "/summary-report",
        name: "SummaryReport",
        component: SummaryReport,
      },
      {
        path: "/admin-assign-inquiry",
        name: "AdminAssignInquiry",
        component: AdminAssignInquiry,
      },
      {
        path: "/admin-search-inquiry",
        name: "AdminSearchInquiry",
        component: AdminSearchInquiry,
      },
      {
        path: "/admin-change-assignment",
        name: "AdminChangeAssignment",
        component: AdminChangeAssignment,
      },
      {
        path: "/admin-reverse-inquiry",
        name: "AdminReverseInquiry",
        component: AdminReverseInquiry,
      },
      {
        path: "/admin-manage-inquiry-user",
        name: "AdminManageInquiryUser",
        component: AdminManageInquiryUser,
      },
      {
        path: "/individual-branch-service-charge",
        name: "IndividualBranchServiceCharge",
        component: IndividualBranchServiceCharge,
      },
      {
        path: "/monthly-service-charge",
        name: "MonthlyServiceCharge",
        component: MonthlyServiceCharge,
      },
    ],
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "SignUpView",
    component: SignUpView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/signup"]; // Pages that do not require authentication
  const authRequired = !publicPages.includes(to.path); // If the path is not in publicPages, authentication is required
  const loggedIn = localStorage.getItem("authToken"); // Check if there is a token in localStorage

  if (authRequired && !loggedIn) {
    // If authentication is required and the user is not logged in, redirect to the login page
    return next("/login");
  }

  next(); // Otherwise, allow access
});

export default router;
