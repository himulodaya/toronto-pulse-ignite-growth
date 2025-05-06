import { useEffect, useState } from "react";
import { Toggle } from "@/components/ui/toggle"; // Assuming you have this Shadcn/ui component
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  // State to hold the current theme, initialized from local storage or system preference
  const [theme, setTheme] = useState(() => {
    // Check if localStorage is available (client-side)
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      // If theme is saved in local storage, use it
      return localStorage.getItem("theme");
    }
    // If no theme in local storage, check system preference (prefers-color-scheme)
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    // Default to light if no preference found
    return "light";
  });

  // Effect to apply the theme class to the document element whenever the theme state changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // Save the current theme to local storage
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", theme as string);
    }
  }, [theme]); // Rerun this effect whenever the `theme` state changes

  // Function to toggle the theme between 'dark' and 'light'
  const toggleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    // Use the Shadcn/ui Toggle component
    <Toggle
      pressed={theme === "dark"} // Set pressed state based on current theme
      onPressedChange={toggleTheme} // Call toggleTheme when the button is pressed
      aria-label="Toggle theme" // Accessibility label
    >
      {/* Display Sun icon in light mode, Moon icon in dark mode */}
      {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}{" "}
      {/* You might adjust icon size */}
    </Toggle>
  );
};

export default ThemeToggle;
