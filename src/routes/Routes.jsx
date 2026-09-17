import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MoviesLayout from "../layouts/MoviesLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/movies",
    Component: MoviesLayout,
    children: [
      {
        index: true,
        Component: Movies,
      },
    ],
  },
]);

export default router;
