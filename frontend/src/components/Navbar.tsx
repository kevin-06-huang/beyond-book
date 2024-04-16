import { Logo } from "./shared/Logo";
const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Logo />
      {"Navbar"}
    </nav>
  );
};

export default NavBar;
