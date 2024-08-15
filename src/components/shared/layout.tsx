import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex justify-center">
        <div className="max-w-[1111px] w-full sm:w-[89.71354166666667%] lg:w-[77.15%]">
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
