import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/shared/layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <div className="h-[800px]">home page</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
