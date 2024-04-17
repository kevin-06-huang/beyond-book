import type { RouteObject } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import LibraryPage from "../pages/LibraryPage";
import AboutPage from "../pages/AboutPage";

const useAuthRoutes = () => {
  const normalRoutes: RouteObject = {
    path: "*",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "library",
        element: <LibraryPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  };

  const routes: RouteObject[] = [normalRoutes];

  return routes;
};

export default useAuthRoutes;
