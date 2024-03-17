"use client";

import React, { createContext, useEffect, useState, useContext } from "react";
import { DARK, LIGHT } from "@/lib/constants";
import { Theme } from "@/lib/types";
import {
  addDarkModeClass,
  removeDarkModeClass,
  updateLocalStorageThemeKey,
} from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>({
  theme: "light",
  toggleTheme: () => {},
});

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeContext must be used with an ThemeContextProvider"
    );
  }

  return context;
};

const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(LIGHT);

  const toggleTheme = () => {
    if (theme === LIGHT) {
      setTheme(DARK);
      updateLocalStorageThemeKey(DARK);
      addDarkModeClass();
    } else {
      setTheme(LIGHT);
      updateLocalStorageThemeKey(LIGHT);
      removeDarkModeClass();
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === DARK) {
        addDarkModeClass();
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme(DARK);
      addDarkModeClass();
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
