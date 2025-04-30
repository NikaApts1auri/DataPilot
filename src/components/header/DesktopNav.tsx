import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import useScrollToBottom from "../../hooks/useScrollToBottom";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <Link
        to="/"
        className="text-gray-700 text-xl dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center "
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center text-xl"
      >
        About
      </Link>
      <Link
        to="/services"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center text-xl"
      >
        Services
      </Link>
      <Link
        to="/contact"
        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center text-xl"
      >
        Contact
      </Link>

      <Button
        className={cn(
          "cursor-pointer bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 hover:text-blue-500",
          "dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500/20",
          "transition-colors duration-200 text-xl px-4 py-2 rounded-lg font-semibold"
        )}
        onClick={useScrollToBottom()}
      >
        Get Started
      </Button>
    </nav>
  );
};

export default DesktopNav;