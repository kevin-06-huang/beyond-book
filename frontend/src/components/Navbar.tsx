import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./shared/Logo";
import { useAuth } from "../contexts/AuthContext";

const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
  return isActive
    ? "bg-gray-900 hover:bg-gray-700 hover:text-black px-3 rounded-md text-white"
    : "hover:bg-gray-700 px-3 rounded-md text-black hover:text-white";
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
    <div className="flex relative justify-between items-center bg-light_green h-12">
      <div className="size-16 mt-2">
        <Logo className={"relative z-10 border-light_green"} />
      </div>
      <nav className="relative bg-light_green flex justify-between items-start mr-2">
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
              className={"hover:bg-gray-700 px-3 rounded-md text-black"}
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
