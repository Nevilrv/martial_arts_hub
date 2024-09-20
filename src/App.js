import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
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
  import("./components/pages/Student/Homepage/Index")
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
                  <main className="h-screen w-full flex flex-col justify-center items-center bg-primary">
                    <h1 className="text-9xl font-extrabold text-white tracking-widest">
                      404
                    </h1>
                    <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                      Page Not Found
                    </div>
                    <button className="mt-5">
                      <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0" />
                        <span className="relative block px-8 py-3 bg-primary border border-current">
                          <Link to={Routing.Initial}>Go Home</Link>
                        </span>
                      </a>
                    </button>
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
