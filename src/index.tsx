import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import ArrayFlatten from "./components/ArrayFlatten";
import Optional from "./components/Optional";
import UrlSearchParams from "./components/UrlSearchParams";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharCount from "./components/CharCount";
import Stack from "./components/Stack";
import FilterEmpty from "./components/FilterEmpty";
import FetchTimeout from "./components/FetchTimeout";
import Queue from "./components/Queue";

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
  {
    path: "stack",
    element: <Stack />,
  },
  {
    path: "queue",
    element: <Queue />,
  },
  {
    path: "filter-empty",
    element: <FilterEmpty />,
  },
  {
    path: "fetch-timeout",
    element: <FetchTimeout />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
