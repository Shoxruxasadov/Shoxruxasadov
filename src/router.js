import { createBrowserRouter } from "react-router-dom";
import Home from "./Router/Home/Home"
import Error from "./Router/Error/Error"
import Project from "./Router/Project/Project"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/projects",
    element: <Home />,
  },
  {
    path: "/skills",
    element: <Home />,
  }
]);
