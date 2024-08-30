import FullscreenSection from './components/Layout/FullscreenSection/FullscreenSection';
import backgroundImage from './assets/images/main_image.jpg';
import TextBox from './components/Text/TextBox/TextBox';
import { useContext } from 'react';
import { FontToken, TextAlignment, ThemeContext } from './theme/ThemeContext';
import TextContainer from './components/Layout/TextContainer/TextContainer';
import { RENT_WEBSITE_TITLE } from './constants/Strings';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <FullscreenSection
      backgroundSrc={backgroundImage}
      blurBackground={true}
    >
      <TextContainer textAlignment={TextAlignment.center}>
        <TextBox
          fontFamily={theme.typography.headerFontFamily}
          paddingHorizontal="20%"
          paddingVertical="9%"
          fontSize={FontToken.xxxlarge}
        >
          {RENT_WEBSITE_TITLE}
        </TextBox>
      </TextContainer>
    </FullscreenSection>
  );
}

export default App;
