import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import ArrayFlatten from "./components/ArrayFlatten";
import Optional from "./components/Optional";
import UrlSearchParams from "./components/UrlSearchParams";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharCount from "./components/CharCount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "array-flatten",
    element: <ArrayFlatten />,
  },
  {
    path: "optional",
    element: <Optional />,
  },
  {
    path: "url-search-params",
    element: <UrlSearchParams />,
  },
  {
    path: "char-count",
    element: <CharCount />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
