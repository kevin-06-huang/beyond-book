import { NavLink, useLocation } from "react-router-dom";
import { Logo } from "./shared/Logo";
import { useAuth } from "../contexts/AuthContext";

const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
  return isActive
    ? "bg-gray-900 hover:bg-gray-700 px-3 py-2 rounded-md text-white"
    : "hover:bg-gray-700 px-3 py-2 rounded-md text-white";
};

const NavBar = () => {
  const { user } = useAuth();
  const showLoginOrRegister = () => {
    const location = useLocation();
    if (location.pathname === "/login") {
      return (
        <NavLink to="/register" className={getNavLinkClass}>
          Register
        </NavLink>
      );
    } else {
      return (
        <NavLink to="/login" className={getNavLinkClass}>
          Login
        </NavLink>
      );
    }
  };
  return (
    <nav className="bg-blue-800 p-4 flex justify-between items-center">
      <Logo className={"size-24"} />
      <div className="flex space-x-4">
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        {user && (
          <NavLink to="/library" className={getNavLinkClass}>
            Library
          </NavLink>
        )}
        <NavLink to="/about" className={getNavLinkClass}>
          About Us
        </NavLink>
        {user ? (
          <NavLink to="/logout" className={getNavLinkClass}>
            Logout
          </NavLink>
        ) : (
          showLoginOrRegister()
        )}
      </div>
    </nav>
  );
};

export default NavBar;
