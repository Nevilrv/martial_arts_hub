import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import { lazy, Suspense } from "react";
import Spinner from "./components/layouts/Spinner";
import { Routing } from "./components/shared/Routing";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components
const StudentHome = lazy(() =>
  import("./components/pages/Student/homepage/Index")
);

function App() {
  const routes = [
    {
      path: Routing.Initial,
      component: StudentHome,
      // isPrivateRoute: false,
    },
    // Add other routes as needed
  ];

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    route.isPrivateRoute ? (
                      // <PrivateRoute>
                      <route.component />
                    ) : (
                      // </PrivateRoute>
                      <route.component />
                    )
                  }
                />
              ))}
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
