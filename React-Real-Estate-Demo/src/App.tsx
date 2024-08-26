import FullscreenSection from './components/Layout/FullscreenSection/FullscreenSection';
import backgroundImage from './assets/images/main_image.jpg'
import TextBox from './components/Text/TextBox/TextBox';


function App() {
  return (
    <>
      <FullscreenSection backgroundSrc={backgroundImage} blurBackground={false}>
        <TextBox>Text</TextBox>
      </FullscreenSection>
    </>
  );
}

export default App;
