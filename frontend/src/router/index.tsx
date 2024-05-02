import type { RouteObject } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import LibraryPage from "../pages/LibraryPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";

const useAuthRoutes = () => {
  const { user } = useAuth();
  const normalRoutes: RouteObject = {
    path: "*",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      ...(user
        ? [{ path: "library", element: <LibraryPage /> }]
        : [
            {
              path: "login",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ]),
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  };

  const routes: RouteObject[] = [normalRoutes];

  return routes;
};

export default useAuthRoutes;
