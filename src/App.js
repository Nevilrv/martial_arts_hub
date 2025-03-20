import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import { lazy, Suspense } from "react";
import Spinner from "./components/layouts/Spinner";
import { Routing } from "./components/shared/Routing";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./utils/PrivateRoute";
 
const PaymentSuccessful = lazy(() =>
  import("./components/pages/common/PaymentSuccessful.js")
);
const PaymentFailed = lazy(() =>
  import("./components/pages/common/Paymentfailed.js")
);
const Video = lazy(() =>
  import("./components/pages/common/Videocall.js")
);

const InstructorsPage = lazy(() =>
  import("./components/pages/common/InstructorsPage.js")
);

const StudentHome = lazy(() =>
  import("./components/pages/Student/homepage/Index")
);
 
const StudentLogin = lazy(() =>
  import("./components/pages/Student/Login/Login")
);
const StudentSignup = lazy(() =>
  import("./components/pages/Student/Signup/SignUp")
);
const Instructor_profile = lazy(() =>
  import("./components/pages/Student/Instructor_Profile/Instructor_Profile")
);
const AttendTraining = lazy(() =>
  import("./components/pages/Student/Training/AttendTraining")
);
const StudentDashboard = lazy(() =>
  import("./components/pages/Student/Dashboard/Dashboard")
);
const StudentMyClass = lazy(() =>
  import("./components/pages/Student/MyClass/MyClass")
);
const StudentMyInvoice = lazy(() =>
  import("./components/pages/Student/MyInvoices/MyInvoice")
);
const StudentDispute = lazy(() =>
  import("./components/pages/Student/Dispute/RaiseDispute")
);
const StudentNewDispute = lazy(() =>
  import("./components/pages/Student/Dispute/NewDispute")
);
const StudentNegotiation = lazy(() =>
  import("./components/pages/Student/Dispute/Negotiation.js")
);
const StudentArbitration = lazy(() =>
  import("./components/pages/Student/Dispute/Arbitration.js")
);
const BookClass = lazy(() =>
  import("./components/pages/Student/BookClass/BookClass")
);
const StudentProfile = lazy(() =>
  import("./components/pages/Student/Profile/My_Profile")
);
const StudentLogInDetails = lazy(() =>
  import("./components/pages/Student/Profile/LogInDetails")
);
const StudentForgotPassword = lazy(() =>
  import("./components/pages/Student/Profile/ForgotPassword")
);
const Student_Reset_Password = lazy(() =>
  import("./components/pages/Student/Profile/ResetPassword")
);
const Student_Favorite_Instructor = lazy(() =>
  import("./components/pages/Student/Profile/FavoriteInstructor")
);
const Student_Booking_History = lazy(() =>
  import("./components/pages/Student/Profile/BookingHistory")
);
const StudentMessages = lazy(() =>
  import("./components/pages/Student/Message/Message")
);

// Instructor Components
const InstructorLogin = lazy(() =>
  import("./components/pages/Instructor/Login/Index")
);
const InstructorSignup = lazy(() =>
  import("./components/pages/Instructor/Signup/Index")
);
const InstructorProfile = lazy(() =>
  import("./components/pages/Instructor/Profile/Profile")
);
const InstructorDashboard = lazy(() =>
  import("./components/pages/Instructor/Dashboard/Dashboard/Index")
);
const InstructorCreateClass = lazy(() =>
  import("./components/pages/Instructor/CreateClass/CreateClass")
);
const InstructorMyclass = lazy(() =>
  import("./components/pages/Instructor/MyClass/MyClass")
);
const InstructorMessageRequest = lazy(() =>
  import("./components/pages/Instructor/MessageRequests/AllMessage")
);
const InstructorBooking = lazy(() =>
  import("./components/pages/Instructor/Booking/index")
);
const InstructorReviews = lazy(() =>
  import("./components/pages/Instructor/Reviews/index")
);
const InstructorEarnings = lazy(() =>
  import("./components/pages/Instructor/EarningsReport/EarningsReport")
);
const InstructorChat = lazy(() =>
  import("./components/pages/Instructor/Chat/Chat")
);
const InstructorCreateSlot = lazy(() =>
  import("./components/pages/Instructor/CreateSlot/CreateSlot")
);
const InstructorMy_slot = lazy(() =>
  import("./components/pages/Instructor/InstructorMy_slot/InstructorMy_slot.js")
);
const InstructorAccountDetails = lazy(() =>
  import(
    "./components/pages/Instructor/BankAccountDetails/BankAccountDetails.js"
  )
);
const AccountCreateSuccessful = lazy(() =>
  import(
    "./components/pages/Instructor/BankAccountDetails/AccountCreateSuccessful.js"
  )
);
const AccountCreateCancle = lazy(() =>
  import(
    "./components/pages/Instructor/BankAccountDetails/AccountCreateCancle.js"
  )
);

// admin
const AdminLogin = lazy(() => import("./components/pages/admin/Login/Login"));
const Dashboard = lazy(() =>
  import("./components/pages/admin/Dashboard/Dashboard")
);
const Instructor_Managementnew_Requests = lazy(() =>
  import("./components/pages/admin/InstructorManagement/NewRequests.js")
);
const Admin_View_Instructors = lazy(() =>
  import("./components/pages/admin/InstructorManagement/ViewInstructors.js")
);
const Admin_Blocked_Instructors = lazy(() =>
  import("./components/pages/admin/InstructorManagement/BlockedInstructors.js")
);
const Admin_View_Students = lazy(() =>
  import("./components/pages/admin/StudentManagement/ViewStudents.js")
);
const Admin_Blocked_Students = lazy(() =>
  import("./components/pages/admin/StudentManagement/BlockedStudents.js")
);
const Admin_Finance_Dashboard = lazy(() =>
  import("./components/pages/admin/FinanceManagement/FinanceDashboard.js")
);
const Admin_Monitor_Payments = lazy(() =>
  import("./components/pages/admin/FinanceManagement/MonitorPayments.js")
);
const Admin_Release_Funds = lazy(() =>
  import("./components/pages/admin/FinanceManagement/ReleaseFunds.js")
);
const Admin_Refunds = lazy(() =>
  import("./components/pages/admin/FinanceManagement/HandleRefunds.js")
);
const Admin_Commission_Charges = lazy(() =>
  import("./components/pages/admin/FinanceManagement/CommissionCharges.js")
);
const Admin_Dispute_Requests = lazy(() =>
  import("./components/pages/admin/DisputeCenter/DisputeRequests.js")
);
const Admin_Dispute_Details = lazy(() =>
  import("./components/pages/admin/DisputeCenter/DisputeDetails.js")
);
const Admin_Generate_Reports = lazy(() =>
  import("./components/pages/admin/Reporting_&_Feedback/GenerateReports.js")
);
const Admin_Feedback_Reports = lazy(() =>
  import("./components/pages/admin/Reporting_&_Feedback/Feedback.js")
);
const Admin_Discipline_Centre = lazy(() =>
  import("./components/pages/admin/DisciplineCentre/Discipline_Centre.js")
);
const Admin_Create_Categorie = lazy(() =>
  import("./components/pages/admin/DisciplineCentre/Create_Categorie.js")
);
const Admin_Create_Sub_Categorie = lazy(() =>
  import("./components/pages/admin/DisciplineCentre/Sub_Categorie.js")
);

function App() {
  const routes = [
    {
      path: Routing.PaymentSuccessful,
      component: PaymentSuccessful,
      isPrivateRoute: false,
    },
    {
      path: Routing.instructor_identity_success,
      component: PaymentSuccessful,
      isPrivateRoute: false,
    },
    {
      path: Routing.instructor_identity_cancel,
      component: PaymentFailed,
      isPrivateRoute: false,
    },
    {
      path: Routing.student_identity_success,
      component: PaymentSuccessful,
      isPrivateRoute: false,
    },
    {
      path: Routing.student_identity_cancel,
      component: PaymentFailed,
      isPrivateRoute: false,
    },
    {
      path: Routing.InstructorsPage,
      component: InstructorsPage,
      isPrivateRoute: false,
    },
    {
      path: Routing.instructor_Videocall,
      component: Video,
      isPrivateRoute: false,
    },
    {
      path: Routing.student_Videocall,
      component: Video,
      isPrivateRoute: false,
    },
    {
      path: Routing.PaymentFailed,
      component: PaymentFailed,
      isPrivateRoute: false,
    },

    {
      path: Routing.Initial,
      component: StudentHome,
      isPrivateRoute: false,
    },
    // Student Routs
    {
      path: Routing.StudentSignup,
      component: StudentSignup,
      isPrivateRoute: false,
    },
    {
      path: Routing.StudentLogin,
      component: StudentLogin,
      isPrivateRoute: false,
    },
    {
      path: Routing.InstructorDetails,
      component: Instructor_profile,
      isPrivateRoute: false,
    },
    {
      path: Routing.AttendTraining,
      component: AttendTraining,
      isPrivateRoute: false,
    },
    {
      path: Routing.StudentDashboard,
      component: StudentDashboard,
      isPrivateRoute: true,
    },
    {
      path: Routing.StudentMessages,
      component: StudentMessages,
      isPrivateRoute: true,
    },
    {
      path: Routing.StudentMyClass,
      component: StudentMyClass,
      isPrivateRoute: true,
    },
    {
      path: Routing.StudentInvoices,
      component: StudentMyInvoice,
      isPrivateRoute: true,
    },
    {
      path: Routing.StudentDispute,
      component: StudentDispute,
      isPrivateRoute: true,
    },
    {
      path: Routing.StudentNewDispute,
      component: StudentNewDispute,
      isPrivateRoute: true,
    },
    {
      path: Routing.StudentNegotiation,
      component: StudentNegotiation,
      isPrivateRoute: true,
    },
    {
      path: Routing.StudentArbitration,
      component: StudentArbitration,
      isPrivateRoute: true,
    },
    {
      path: Routing.StudentBookClass,
      component: BookClass,
      isPrivateRoute: true,
    },
    {
      path: Routing.StudentProfile,
      component: StudentProfile,
      isPrivateRoute: true,
    },
    {
      path: Routing.StudentLogInDetails,
      component: StudentLogInDetails,
      isPrivateRoute: true,
    },
    {
      path: Routing.Student_Forgot_Password,
      component: StudentForgotPassword,
      isPrivateRoute: true,
    },
    {
      path: Routing.Student_Reset_Password,
      component: Student_Reset_Password,
      isPrivateRoute: true,
    },
    {
      path: Routing.Student_Favorite_Instructors,
      component: Student_Favorite_Instructor,
      isPrivateRoute: true,
    },
    {
      path: Routing.Student_Booking_History,
      component: Student_Booking_History,
      isPrivateRoute: true,
    },
    // Instructor Routs
    {
      path: Routing.InstructorSignup,
      component: InstructorSignup,
      isPrivateRoute: false,
    },
    {
      path: Routing.InstructorProfile,
      component: InstructorProfile,
      Layout: false,
    },
    {
      path: Routing.InstructorLogin,
      component: InstructorLogin,
      isPrivateRoute: false,
    },
    {
      path: Routing.InstructorDashboard,
      component: InstructorDashboard,
      isPrivateRoute: true,
    },
    {
      path: Routing.InstructorCreateClass,
      component: InstructorCreateClass,
      isPrivateRoute: true,
    },
    {
      path: Routing.InstructorEditClass,
      component: InstructorCreateClass,
      isPrivateRoute: true,
    },
    {
      path: Routing.InstructorMyClass,
      component: InstructorMyclass,
      isPrivateRoute: true,
    },
    {
      path: Routing.InstructorMessageRequest,
      component: InstructorMessageRequest,
      isPrivateRoute: true,
    },
    {
      path: Routing.InstructorBooking,
      component: InstructorBooking,
      isPrivateRoute: false,
    },
    {
      path: Routing.InstructorReviews,
      component: InstructorReviews,
      isPrivateRoute: true,
    },
    {
      path: Routing.InstructorEarnings,
      component: InstructorEarnings,
      isPrivateRoute: true,
    },
    {
      path: Routing.InstructorChat,
      component: InstructorChat,
      isPrivateRoute: true,
    },
    {
      path: Routing.InstructorCreateSlot,
      component: InstructorCreateSlot,
      isPrivateRoute: true,
    },
    {
      path: Routing.InstructorMy_slot,
      component: InstructorMy_slot,
      isPrivateRoute: true,
    },
    {
      path: Routing.InstructorAccountDetails,
      component: InstructorAccountDetails,
      isPrivateRoute: true,
    },
    {
      path: Routing.InstructorGetAccountDetailssuccess,
      component: AccountCreateSuccessful,
      isPrivateRoute: true,
    },
    {
      path: Routing.InstructorGetAccountDetailcancle,
      component: AccountCreateCancle,
      isPrivateRoute: true,
    },
    // admin Routes
    {
      path: Routing.AdminLogin,
      component: AdminLogin,
      isPrivateRoute: false,
    },
    {
      path: Routing.AdminDashboard,
      component: Dashboard,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_Instructor_Managementnew_Requests,
      component: Instructor_Managementnew_Requests,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_View_Instructors,
      component: Admin_View_Instructors,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_Blocked_Instructors,
      component: Admin_Blocked_Instructors,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_View_Students,
      component: Admin_View_Students,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_Blocked_Students,
      component: Admin_Blocked_Students,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_Finance_Dashboard,
      component: Admin_Finance_Dashboard,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_Monitor_Payments,
      component: Admin_Monitor_Payments,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_Release_Funds,
      component: Admin_Release_Funds,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_Commission_Charges,
      component: Admin_Commission_Charges,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_Refunds,
      component: Admin_Refunds,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_Dispute_Requests,
      component: Admin_Dispute_Requests,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_Generate_Reports,
      component: Admin_Generate_Reports,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_FeedBack_Reports,
      component: Admin_Feedback_Reports,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_Dispute_Details,
      component: Admin_Dispute_Details,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_Discipline_Centre,
      component: Admin_Discipline_Centre,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_Create_Categorie,
      component: Admin_Create_Categorie,
      isPrivateRoute: true,
    },
    {
      path: Routing.Admin_Create_Sub_Categorie,
      component: Admin_Create_Sub_Categorie,
      isPrivateRoute: true,
    },

    // Add other routes as needed
  ];
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <MainLayout>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.isPrivateRoute ? (
                    <PrivateRoute>
                      <route.component />
                    </PrivateRoute>
                  ) : (
                    <route.component />
                  )
                }
              />
            ))}
            <Route
              path="*"
              element={
                <>
                  <main className="relative isolate min-h-full">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
                      className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
                    />
                    <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
                      <p className="text-base font-semibold leading-8 text-white">
                        404
                      </p>
                      <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        Page not found
                      </h1>
                      <p className="mt-4 text-base text-white/70 sm:mt-6">
                        Sorry, we couldn’t find the page you’re looking for.
                      </p>
                      <div className="mt-10 flex justify-center">
                        <Link
                          to={Routing.Initial}
                          className="text-sm font-semibold leading-7 text-white"
                        >
                          <span aria-hidden="true">&larr;</span> Back to home
                        </Link>
                      </div>
                    </div>
                  </main>
                </>
              }
            />
          </Routes>
        </MainLayout>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
