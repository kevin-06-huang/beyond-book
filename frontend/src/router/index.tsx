import type { RouteObject } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";

const normalRoutes: RouteObject = {
  path: "*",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
  ],
};

const routes: RouteObject[] = [normalRoutes];

export default routes;
