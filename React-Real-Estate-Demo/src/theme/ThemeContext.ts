import React from 'react';
import ThemeTokens from '../types/Theme';

export enum FontToken {
  small = 'small',
  medium = 'medium',
  large = 'large',
  xlarge = 'xlarge',
  xxxlarge = 'xxxlarge'
}

export enum TextAlignment {
  center,
  left,
  right
}

export const AppTheme: ThemeTokens = {
  colors: {
    primary: '#003f72',
    secondary: '#002f34',
    textColor: '#161616',
    textColorSecondary: '#8e8e8e',
    textColorAccent: '#f8f9f9',
    borderColor: '#eaeaea',
    dividerColor: '#f3f3f3',
    dividerColorAccent: '#818181',
  },
  typography: {
    headerFontFamily: 'Melikan, Verdana, sans-serif',
    mainFontFamily: 'Capitolium, Verdana, sans-serif',
  },
  // TODO: Adapt for mobile
  fontSize: {
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
    xlarge: '1.4rem',
    xxxlarge: '8rem',
  },
  // TODO: To be determined
  spacing: {},
  radius: {
    button: '',
    card: '',
  },
};

export const ThemeContext = React.createContext<{
  theme: ThemeTokens;
  setTheme: React.Dispatch<React.SetStateAction<ThemeTokens>>;
}>({ theme: AppTheme, setTheme: () => {} });
