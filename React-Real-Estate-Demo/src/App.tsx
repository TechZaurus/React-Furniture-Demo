import FullscreenSection from './components/Layout/FullscreenSection/FullscreenSection';
import backgroundImage from './assets/images/main_image.jpg'

function App() {
  return (
    <>
      <FullscreenSection backgroundSrc={backgroundImage} blurBackground={false}>
        <h1>Text</h1>
      </FullscreenSection>
    </>
  );
}

export default App;
