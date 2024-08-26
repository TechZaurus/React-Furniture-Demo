import type { ExtendTheme } from '@pigment-css/react/theme';

interface ColorList {
  primary: string;
  secondary: string;
  textColor: string;
  textColorSecondary: string;
  textColorAccent: string;
  borderColor: string;
  dividerColor: string;
  dividerColorAccent: string;
}

interface TypographyList {
  headerFontFamily: string;
  mainFontFamily: string;
}

interface FontSizeList {
  small: string;
  medium: string;
  large: string;
  xlarge: string;
}

interface RadiusList {
  button: string;
  card: string;
}

declare module '@pigment-css/react/theme' {
    interface ThemeTokens {
      colors: ColorList;
      typography: TypographyList;
      fontSize: FontSizeList;
      spacing: object; // TODO: Change when spacings defined
      radius: RadiusList;
    }
  
    interface ThemeArgs {
      theme: ExtendTheme<{
        colorScheme: 'light' | 'dark';
        tokens: ThemeTokens;
      }>;
    }
  }
  