import {
  Rocket,
  Zap,
  ShieldCheck,
  Users,
  Mail,
  BookOpen,
  X,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
// import ThemeToggle from "./ThemeToggle";
import useScrollToBottom from "../hooks/useScrollToBottom";

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
  const menuRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = useScrollToBottom();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, toggleMenu]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ease-in-out  lg:hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      ></div>

      <div
        ref={menuRef}
        className={cn(
          "fixed top-0 right-0 h-full w-4/5 max-w-sm bg-black z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden",
          "border-l border-gray-700",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <a href="/" className="flex items-center cursor-pointer">
            <Rocket className="h-6 w-6 text-blue-400 mr-2" />
            <h1 className="text-lg font-bold text-white">DataPilot</h1>
          </a>
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-blue-400"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex bg-[black] flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className="text-white hover:text-blue-400 transition-colors flex items-center text-lg py-2"
            >
              <link.icon className="mr-3 w-5 h-5" />
              {link.label}
            </a>
          ))}

          <div className="pt-4 border-t border-gray-700 flex items-center justify-between">
            {/* <ThemeToggle /> */}
          </div>

          <Button
            className={cn(
              "w-full mt-6 cursor-pointer w- bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300",
              "transition-colors duration-200 text-lg px-6 py-3 rounded-xl font-semibold"
            )}
            onClick={() => {
              toggleMenu();
              scrollToBottom();
            }}
          >
            Get Started
          </Button>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
