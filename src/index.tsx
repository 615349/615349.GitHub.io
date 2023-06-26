import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import ArrayFlatten from "./components/ArrayFlatten";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "array-flatten",
    element: <ArrayFlatten />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
