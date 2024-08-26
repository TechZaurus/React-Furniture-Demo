import { styled } from '@pigment-css/react';
import { ThemeArgs } from '@pigment-css/react/theme';
//import { ReactElement } from 'react';

interface Props {
  children?: string;
  // TODO: create types (header, main)
  isHeader?: boolean;
}

const HeaderStyledDiv = styled('div')(({ theme } :  ThemeArgs) => ({
  fontFamily: theme.typography.headerFontFamily,
}));

const MainStyledDiv = styled('div')(({ theme } : ThemeArgs) => ({
  fontFamily: theme.typography.mainFontFamily,
}));

const TextBox: React.FC<Props> = ({ children, isHeader }) => {
  return isHeader ? <HeaderStyledDiv>{children}</HeaderStyledDiv> : <MainStyledDiv>{children}</MainStyledDiv>;
};

export default TextBox;
