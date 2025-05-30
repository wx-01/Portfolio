import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import {cn }from "@/lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }else if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // If no theme is saved, default to dark mode
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button onClick={toggleTheme} 
    className={cn(
          "fixed  top-5 right-5 z-50 p-2 rounded-full ransition-colors duration-300",
          "focus:outine-hidden" 
    )}
    >
      {isDarkMode ? (
        <Sun className="size-6 text-yellow-300" />
      ) : (
        <Moon className="size-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
