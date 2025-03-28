export const Routing = {
  // Student
  InstructorDetails: "/student/instructor_profile/:id",
  AttendTraining:"/student/training",
  PaymentSuccessful:"/paymentsuccessful",
  PaymentFailed:"/paymentfailed",
  instructor_Videocall:"/instructor/room/:channelName/:role",
  student_Videocall:"/student/room/:channelName/:role",
  instructor_identity_success:"/instructor/indetity/success/:instructorId",
  instructor_identity_cancel:"/instructor/indetity/cancel/:instructorId",
  student_identity_success:"/student/indetity/success/:studentId",
  student_identity_cancel:"/student/indetity/cancel/:studentId",




  // student dashboard tab
  Initial: "/",
  InstructorsPage: "/instructors/:maincategory",
  StudentLogin: "/student/login",
  StudentSignup: "/student/signup",
  StudentDashboard:"/student/dashboard",
  StudentMessages:"/student/message",
  StudentMyClass:"/student/class",
  StudentInvoices:"/student/invoice",
  StudentProfile:"/student/my_profile",
  StudentLogInDetails:"/student/log_in_details",
  Student_Forgot_Password:"/student/forgot_password",
  Student_Reset_Password:"/student/reset_password",
  Student_Favorite_Instructors:"/student/favorite_instructors",
  Student_Booking_History:"/student/booking_history",
  StudentDispute:"/student/dispute",
  StudentNewDispute:"/student/new_dispute",
  StudentNegotiation:"/student/negotiation/:disputeId",
  StudentArbitration:"/student/arbitration/:disputeId",
  StudentBookClass:"/student/bookclass/:instructorId",




  // Instructor

  InstructorHomePage: "instructor",
  InstructorLogin: "/instructor/login",
  InstructorSignup: "/instructor/signup",
  InstructorProfile: "/instructor/profile",
  InstructorDashboard:"/instructor/dashboard",
  InstructorCreateClass:"/instructor/create_class",
  InstructorEditClass:"/instructor/edit_class/:id",
  InstructorMyClass:"/instructor/my_class",
  InstructorBooking:"/instructor/booking",
  InstructorReviews:"/instructor/reviews",
  InstructorEarnings:"/instructor/earnings",
  InstructorChat:"/instructor/chat",
  InstructorMessageRequest:"/instructor/message_request",
  InstructorCreateSlot:"/instructor/create_slot",
  InstructorMy_slot:"/instructor/my_slot",
  InstructorAccountDetails:"/instructor/bank_account_details",
  InstructorGetAccountDetailssuccess:"/instructor/bank_account_details/success/:accountId/:instructorId",
  InstructorGetAccountDetailcancle:"/instructor/bank_account_details/cancle/:accountId/:instructorId",

  // Admin
  AdminLogin: "/admin/login",
  AdminDashboard: "/admin/dashboard",
  Admin_Instructor_Managementnew_Requests: "/admin/instructormanagement/newrequests",
  Admin_View_Instructors: "/admin/viewinstructors",
  Admin_Blocked_Instructors: "/admin/blockedinstructors",
  Admin_View_Students: "/admin/studentmanagement/viewstudents",
  Admin_Blocked_Students: "/admin/blockedstudents",
  Admin_Finance_Dashboard: "/admin/Finance/dashboard",
  Admin_Commission_Charges: "/admin/Finance/Commission",
  Admin_Monitor_Payments: "/admin/Finance/monitorpayment",
  Admin_Release_Funds: "/admin/Finance/releasefunds",
  Admin_Refunds: "/admin/Finance/refunds",
  Admin_Dispute_Requests: "/admin/Finance/dispute_requests",
  Admin_Dispute_Details: "/admin/Finance/disputedetails/:disputeId",
  Admin_Generate_Reports: "/admin/generate/Reports",
  Admin_FeedBack_Reports: "/admin/Feeback/Reports",
  Admin_Discipline_Centre: "/admin/Categorie",
  Admin_Create_Categorie: "/admin/add_Categorie",
  Admin_Create_Sub_Categorie: "/admin/sub_Categorie/:categoryid/:name",
};