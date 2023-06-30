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
import BurgerMenu from "./components/CSS/BurgerMenu";
import SpotLight from "./components/CSS/SpotLight";
import Underline from "./components/CSS/Underline";
import Blur from "./components/CSS/Blur";
import RandomID from "./components/Snippets/RandomID";
import AddProperty from "./components/Snippets/AddProperty";
import DeepClone from "./components/Snippets/DeepClone";
import ValueOf from "./components/Snippets/ValueOf";
import Iterator from "./components/Snippets/Iterator";
import VisibilityChange from "./components/Snippets/VisibilityChange";

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
  {
    path: "burger-menu",
    element: <BurgerMenu />,
  },
  {
    path: "spot-light",
    element: <SpotLight />,
  },
  {
    path: "underline",
    element: <Underline />,
  },
  {
    path: "blur",
    element: <Blur />,
  },
  {
    path: "random-id",
    element: <RandomID />,
  },
  {
    path: "add-property",
    element: <AddProperty />,
  },
  {
    path: "deep-clone",
    element: <DeepClone />,
  },
  {
    path: "value-of",
    element: <ValueOf />,
  },
  {
    path: "iterator",
    element: <Iterator />,
  },
  {
    path: "visibility-change",
    element: <VisibilityChange />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
