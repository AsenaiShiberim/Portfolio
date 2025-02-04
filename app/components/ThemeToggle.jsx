"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center bg-teal-500 dark:bg-gray-900 rounded-full p-1 cursor-pointer"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-yellow-400 absolute left-2" size={20} />
      <BsSunFill className="text-yellow-400 absolute right-2" size={20} />
      <div
        className="absolute bg-white dark:bg-gray-800 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { left: "2px" } : { left: "calc(100% - 26px)" }}
      ></div>
    </div>
  );
};
