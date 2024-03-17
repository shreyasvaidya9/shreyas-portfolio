"use client";

import React, { createContext, useContext, useState } from "react";
import type { activeSectionType } from "@/lib/types";

type ActiveSectionContextProviderProps = { children: React.ReactNode };

type updateActiveSectionType = (section: activeSectionType) => void;
type activeSectionContextType = {
  activeSection: activeSectionType;
  updateActiveSection: updateActiveSectionType;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<activeSectionContextType | null>({
    activeSection: "Home",
    updateActiveSection: (section) => {},
    timeOfLastClick: 0,
    setTimeOfLastClick: () => {},
  });

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used with an ActiveSectionContextProvider"
    );
  }

  return context;
};

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<activeSectionType>("Home");

  // * Keeping track of this to disable the observer setActiveSection temporarily when clicked
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  const updateActiveSection: updateActiveSectionType = (section) => {
    setActiveSection(section);
  };

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        updateActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
