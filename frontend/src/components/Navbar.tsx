import { NavLink } from "react-router-dom";
import { Logo } from "./shared/Logo";

const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
  return isActive
    ? "bg-gray-900 hover:bg-gray-700 px-3 py-2 rounded-md text-white"
    : "hover:bg-gray-700 px-3 py-2 rounded-md text-white";
};

const NavBar = () => {
  return (
    <nav className="bg-blue-800 p-4 flex justify-between items-center">
      <Logo className={"size-24"} />
      <div className="flex space-x-4">
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/library" className={getNavLinkClass}>
          Library
        </NavLink>
        <NavLink to="/about" className={getNavLinkClass}>
          About Us
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
