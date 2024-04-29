import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./shared/Logo";
import { useAuth } from "../contexts/AuthContext";

const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
  return isActive
    ? "bg-gray-900 hover:bg-gray-700 px-3 rounded-md text-white"
    : "hover:bg-gray-700 px-3 rounded-md text-white";
};

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex relative justify-between items-center bg-blue-800 h-12">
      <div className="size-16 mt-4">
        <Logo
          className={"relative z-10 border-8 border-blue-800 rounded-full"}
        />
      </div>
      <nav className="relative bg-blue-800 flex justify-between items-start mr-2">
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
            <button
              onClick={handleLogout}
              className={"hover:bg-gray-700 px-3 py-2 rounded-md text-white"}
            >
              Logout
            </button>
          ) : (
            showLoginOrRegister()
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
