import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { aboutUSLoader, AboutUS } from "./abou-us";
import { Home, homeLoader } from "./home";
import { urls } from "app/routes";

export const router = createBrowserRouter([
  {
    path: urls.home,

    element: <Home />,
    loader: homeLoader,
  },
  {
    path: urls.about_us,
    element: <AboutUS />,
    loader: aboutUSLoader,
  },
]);
