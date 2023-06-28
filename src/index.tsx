import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import ArrayFlatten from "./components/Snippets/ArrayFlatten";
import Optional from "./components/TS/Optional";
import UrlSearchParams from "./components/Snippets/UrlSearchParams";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharCount from "./components/Snippets/CharCount";
import Stack from "./components/Algorithm/Stack";
import FilterEmpty from "./components/Snippets/FilterEmpty";
import FetchTimeout from "./components/Snippets/FetchTimeout";
import Queue from "./components/Algorithm/Queue";

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