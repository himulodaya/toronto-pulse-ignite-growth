import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch"; // Import the Switch component
import { Sun, Moon } from "lucide-react"; // Import icons

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
      console.log("Applying dark theme"); // Debugging log
    } else {
      root.classList.remove("dark");
      console.log("Applying light theme"); // Debugging log
    }
    // Save the current theme to local storage
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", theme as string);
    }
  }, [theme]); // Rerun this effect whenever the `theme` state changes

  // Function to toggle the theme between 'dark' and 'light'
  // This function will be called by the Switch component's onCheckedChange prop
  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    // Container div to hold the icons and the switch
    <div className="flex items-center space-x-2">
      {/* Display Sun icon */}
      <Sun size={20} className="text-foreground" />

      {/* Use the Shadcn/ui Switch component */}
      <Switch
        checked={theme === "dark"} // Set checked state based on current theme
        onCheckedChange={toggleTheme} // Call toggleTheme when the switch state changes
        aria-label="Toggle theme" // Accessibility label
      />

      {/* Display Moon icon */}
      <Moon size={20} className="text-foreground" />
    </div>
  );
};

export default ThemeToggle;
