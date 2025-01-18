import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';

// Extend the Navigation Theme to include the custom property
type CustomTheme = NavigationTheme & {
  colors: NavigationTheme['colors'];
};

// Define the light theme
export const LightTheme: CustomTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: 'rgb(140, 201, 125)',
    primary: 'rgb(255, 45, 85)',
  },
};

// Define the dark theme
export const DarkTheme: CustomTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: 'rgb(46, 41, 41)', // Dark background
    primary: 'rgb(255, 45, 85)', // Keep primary consistent
  },
};

export const commonColors = {
  white: '#ffffff',
  black: '#000000',
};
