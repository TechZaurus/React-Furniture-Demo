import { useContext } from 'react';
import { FontToken, ThemeContext } from '../../../theme/ThemeContext';

interface Props {
  children?: string;
  fontFamily?: string;
  paddingVertical?: string;
  paddingHorizontal?: string;
  fontSize?: FontToken;
}

//TODO: expand colors, write tests
const TextBox: React.FC<Props> = ({ children, fontFamily, paddingHorizontal, paddingVertical, fontSize }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        fontFamily: fontFamily == undefined ? theme.typography.mainFontFamily : fontFamily,
        paddingLeft: paddingHorizontal == undefined ? 0 : paddingHorizontal,
        paddingRight: paddingHorizontal == undefined ? 0 : paddingHorizontal,
        paddingTop: paddingVertical == undefined ? 0 : paddingVertical,
        paddingBottom: paddingVertical == undefined ? 0 : paddingVertical,
        fontSize: fontSize == undefined ? theme.fontSize.medium : theme.fontSize[fontSize],
        color: theme.colors.textColor
      }}
    >
      {children}
    </div>
  );
};

export default TextBox;
