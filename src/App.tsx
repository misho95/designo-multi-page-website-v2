import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/shared/layout";
import HomePage from "./pages/home-page";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/web-design",
          element: "web design",
        },
        {
          path: "/app-design",
          element: "app design",
        },
        {
          path: "/graphic-design",
          element: "graphic design",
        },
        {
          path: "/our-company",
          element: "our-company",
        },
        {
          path: "/locations",
          element: "locations",
        },
        {
          path: "/contact",
          element: "contact",
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
