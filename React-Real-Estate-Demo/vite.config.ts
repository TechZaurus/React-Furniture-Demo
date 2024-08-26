import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { pigment } from '@pigment-css/vite-plugin';


const appTheme = {
  colors: {
    primary: '#003f72',
    secondary: '#002f34',
    textColor: '#161616',
    textColorSecondary: '#8e8e8e',
    textColorAccent: '#f8f9f9',
    borderColor: '#eaeaea',
    dividerColor: '#f3f3f3',
    dividerColorAccent: '#818181'
  },
  typography: {
    headerFontFamily: 'Melikan, Verdana, sans-serif',
    mainFontFamily: 'Capitolium, Verdana, sans-serif'
  },
  fontSize: {
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
    xlarge: '1.4rem'
  },
  // TODO: To be determined
  spacing: {
  },
  radius: {
    button: '',
    card: ''
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    pigment({
    theme: appTheme
  })
],
  optimizeDeps: {
    include: ['@pigment-css'],
  },
});
