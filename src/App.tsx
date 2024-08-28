import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/shared/layout";
import HomePage from "@/pages/home-page";
import WebDesignPage from "@/pages/web-design-page";
import AppDesignPage from "./pages/app-design-page";
import GraphicDesignPage from "./pages/graphic-design-page";
import AboutPage from "./pages/about-page";

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
          element: <WebDesignPage />,
        },
        {
          path: "/app-design",
          element: <AppDesignPage />,
        },
        {
          path: "/graphic-design",
          element: <GraphicDesignPage />,
        },
        {
          path: "/our-company",
          element: <AboutPage />,
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
