import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home"
import Error from "./pages/Error/Error"
import Project from "./pages/Project/Project"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/works",
    element: <Home />,
  }
]);
