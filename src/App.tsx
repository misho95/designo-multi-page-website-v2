import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: "home page",
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
