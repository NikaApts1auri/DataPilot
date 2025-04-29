import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
   
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []); 

  const toggleTheme = () => {
    setIsDarkMode((prev: boolean) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      if (newTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newTheme;
    });
  };

  return (
    <Button
      onClick={toggleTheme}
      className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
    >
      {isDarkMode ? <Sun className="w-8 h-8" /> : <Moon className="w-8 h-8" />}
    </Button>
  );
};

export default ThemeToggle;