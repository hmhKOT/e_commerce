import React from "react";

export default function ThemeToggle() {
  const [mode, setMode] = React.useState(() => {
    if (typeof window === "undefined") return "light";
    return (
      localStorage.getItem("theme") ||
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <button
      onClick={() => setMode((prev) => (prev === "dark" ? "light" : "dark"))}
      className="p-2 rounded-md hover:bg-gray-200/20 transition"
      aria-label="Toggle theme"
    >
      {mode === "dark" ? "🌙" : "🌞"}
    </button>
  );
}
