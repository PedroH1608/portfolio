import { createContext } from "react";

export const ThemeContext = createContext({});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};
