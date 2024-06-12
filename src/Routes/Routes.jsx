import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../pages/HomePage/HomePage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default Router;
