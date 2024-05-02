import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div
        className="flex-grow overflow-auto bg-biege"
        style={{ height: "calc(100vh - 3rem)" }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
