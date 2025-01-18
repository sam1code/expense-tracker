import {ReactNode} from 'react';

export type Theme = {
  primary: string;
  background: string;
  text: string;
  buttonText: string;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export type ThemeProviderProps = {
  children: ReactNode;
};
