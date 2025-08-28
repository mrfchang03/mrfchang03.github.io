// components/ThemeToggle.jsx
"use client";

import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "theme"; // 'dark' | 'light'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true); // default to dark

  const applyTheme = useCallback((dark) => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    } catch {}
  }, []);

  // On mount, load saved preference (or default to dark)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const startDark = saved ? saved === "dark" : true;
      setIsDark(startDark);
      applyTheme(startDark);

      // (Optional) respond to OS changes ONLY if user hasn't chosen
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const onChange = (e) => {
        const manual = localStorage.getItem(STORAGE_KEY);
        if (!manual) {
          setIsDark(e.matches);
          applyTheme(e.matches);
        }
      };
      mq.addEventListener?.("change", onChange);
      setMounted(true);
      return () => mq.removeEventListener?.("change", onChange);
    } catch {
      setMounted(true);
    }
  }, [applyTheme]);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    applyTheme(next);
  };

  // Avoid mismatches before hydration
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-accent/40"
      />
    );
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        inline-flex h-9 w-9 items-center justify-center rounded-md
        border border-accent/40
        bg-surfaceLight text-textLight
        hover:bg-white/60
        dark:bg-surfaceDark dark:text-textDark dark:hover:bg-surfaceDark/80
        transition-colors duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2
        focus:ring-offset-white dark:focus:ring-offset-primary
      "
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
      <span className="sr-only">{isDark ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}

function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24" width="18" height="18" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24" width="18" height="18" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" {...props}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
