import { lazy } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header";
const Footer = lazy(() => import("../footer/footer"));

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <div className="flex justify-center">
        <div className="w-full max-w-[1111px] sm:w-[89.71354166666667%] lg:w-[77.15%]">
          <main className="pb-[300px]">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
