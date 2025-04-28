import {
  Rocket,
  Zap,
  ShieldCheck,
  Users,
  Mail,
  BookOpen,
  X,
} from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import ThemeToggle from "./ThemeToggle";

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const navLinks = [
  { href: "#features", label: "Features", icon: Zap },
  { href: "#pricing", label: "Pricing", icon: ShieldCheck },
  { href: "#about", label: "About Us", icon: Users },
  { href: "#blog", label: "Blog", icon: BookOpen },
  { href: "#contact", label: "Contact", icon: Mail },
];

const MobileMenu = ({ isMenuOpen, toggleMenu }: MobileMenuProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out lg:hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMenu}
      ></div>

      {/* Menu Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-950 z-50 shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden",
          "border-l border-gray-200 dark:border-gray-700",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800">
          <a href="/" className="flex items-center cursor-pointer">
            <Rocket className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2" />
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              DataPilot
            </h1>
          </a>
          <button
            onClick={toggleMenu}
            className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center text-lg py-2"
            >
              <link.icon className="mr-3 w-5 h-5" />
              {link.label}
            </a>
          ))}

          <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <ThemeToggle />
          </div>

          <Button
            className={cn(
              "w-full mt-6 cursor-pointer bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 hover:text-blue-500",
              "dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500/20",
              "transition-colors duration-200 text-lg px-6 py-3 rounded-xl font-semibold"
            )}
            onClick={toggleMenu}
          >
            Get Started
          </Button>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
