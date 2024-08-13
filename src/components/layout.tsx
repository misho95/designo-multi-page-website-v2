import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex justify-center">
        <div className="w-full max-w-[1111px]">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
