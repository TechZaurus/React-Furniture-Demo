import React, { ReactNode } from 'react';
import { AppTheme, ThemeContext } from './ThemeContext';
import ThemeTokens from '../types/Theme';


const ThemeProvider = ({ children } : {children: ReactNode}) => {
  const [theme, setTheme] = React.useState<ThemeTokens>(AppTheme);
  return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
