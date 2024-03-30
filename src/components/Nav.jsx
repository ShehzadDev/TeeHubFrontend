import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="px-20 bg-white py-4 flex justify-between items-center relative shadow-lg">
      <Logo />
      <button className="menu-toggle md:hidden" onClick={toggleMenu}>
        <svg
          className="h-6 w-6 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            className={isMenuOpen ? "hidden" : "block"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            className={isMenuOpen ? "block" : "hidden"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div
        className={`md:flex md:items-center ${
          isMenuOpen ? "absolute" : "hidden"
        }`}
        style={{ top: "100%", left: 0 }}
      >
        <NavLinks />
      </div>
    </nav>
  );
}

export default Nav;
