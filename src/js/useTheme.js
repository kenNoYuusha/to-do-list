import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);

    // Detect system theme changes and apply the new theme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (theme === "system") {
        applyTheme(e.matches ? "dark" : "ligth");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const applyTheme = (theme) => {
    const layout = document.querySelector("main");
    const modal = document.getElementById("modal");
    if (theme === "dark") {
      layout.classList.add("dark");
      modal.classList.add("dark");
    } else if (theme === "ligth") {
      layout.classList.remove("dark");
      modal.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        layout.classList.add("dark");
        modal.classList.add("dark");
      } else {
        layout.classList.remove("dark");
        modal.classList.remove("dark");
      }
    }
  };

  const toogleTheme = () => {
    const newTheme =
      theme === "system" ? "ligth" : theme === "ligth" ? "dark" : "system";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return [theme, toogleTheme];
};
