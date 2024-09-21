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

// components
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
  import("./components/pages/Student/Dashboard/Dashboard_page/Dashboard")
);

function App() {
  const routes = [
    {
      path: Routing.Initial,
      component: StudentHome,
      isPrivateRoute: false,
    },
    {
      path: Routing.Signup,
      component: StudentSignup,
      isPrivateRoute: false,
    },
    {
      path: Routing.Login,
      component: StudentLogin,
      isPrivateRoute: false,
    },
    {
      path: Routing.InstructorProfile,
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
    // Add other routes as needed
  ];

  return (
    <>
      <ToastContainer />
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
    </>
  );
}

export default App;
