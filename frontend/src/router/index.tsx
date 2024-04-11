import type { RouteObject } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/home.page";

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
