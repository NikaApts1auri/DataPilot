import { Zap, ShieldCheck, Users, Mail, BookOpen } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#features", label: "Features", icon: Zap },
  { href: "#pricing", label: "Pricing", icon: ShieldCheck },
  { href: "#about", label: "About", icon: Users },
  { href: "#blog", label: "Blog", icon: BookOpen },
  { href: "#contact", label: "Contact", icon: Mail },
];

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex  items-center gap-6">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-gray-700  dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center text-base"
        >
          <link.icon className="mr-1.5 w-4 h-4" />
          {link.label}
        </a>
      ))}
      <ThemeToggle />
      <Button
        className={cn(
          "cursor-pointer bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 hover:text-blue-500",
          "dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500/20",
          "transition-colors duration-200 text-base px-4 py-2 rounded-lg font-semibold"
        )}
      >
        Get Started
      </Button>
    </nav>
  );
};

export default DesktopNav;
