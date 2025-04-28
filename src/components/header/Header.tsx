import { useState, useEffect } from "react";
import { Rocket, Menu } from "lucide-react";

import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky  top-0 z-50 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-md py-6 px-6 sm:px-8  lg:px-12 w-full max-w-full  border-b border-gray-200 dark:border-gray-800">
      <div className="container md:gap-[6rem] mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center cursor-pointer">
          <Rocket className="h-8 w-8 text-blue-500 dark:text-blue-400 mr-2" />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            DataPilot
          </h1>
        </a>

        <DesktopNav />

        <button
          onClick={toggleMenu}
          className="lg:hidden md:hidden text-gray-700  dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <Menu className="w-10 h-10" />
        </button>
      </div>

      {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} isMenuOpen={true} />}
    </header>
  );
};

export default Header;
