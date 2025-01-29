import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1> Home</h1>,
  },
  {
    path: "/news",
    element: <h1> news</h1>,
  },
  {
    path: "/user",
    element: <h1> user</h1>,
  },
  {
    path: "*",
    element: <h1>Page not found</h1>,
  },
]);

export default router;
