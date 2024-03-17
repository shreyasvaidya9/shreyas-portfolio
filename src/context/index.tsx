import React from "react";
import ActiveSectionContextProvider from "./active-section-context";
import ThemeContextProvider from "./theme-context";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default Providers;
