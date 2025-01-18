// src/types/theme.d.ts
import 'react-native';
import '@react-navigation/native';

declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    colors: {
      iconReverse: string;
      primary: string;
      background: string;
      text: string;
      card: string;
      border: string;
      notification: string;
    };
  };

  export function useTheme(): ExtendedTheme;
}
