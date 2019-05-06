/**
 * Define the theme of the website
 * once created can be passed to a theme consumer to keep everything aligned.
 * can even define the font-family here aswell.
 */
import { createGlobalStyle } from 'styled-components';

/**
 * The main theme of the website this object can contain as much of the website
 * style and branding as needed. All variables here will be available in all 
 * styled-components further down the tree. 
 * Below is a basic example for a website theme:
 * */
const theme = {
  primary: '#464FFF',
  secondary: '#00FFC4',
  background: {
    primary: '#151922',
    secondary: '#10131B',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#ADC5F2'
  },
  fontSize: {
    large: '48px',
    medium: '24px',
    regular: '14px',
    number: '26px',
  }
};

// Define global styles to be imported into website before loading
// Best place to import local font files, font family
export const GlobalStyle = createGlobalStyle`
  body, html {
    background: ${theme.background.primary};
    font-family: 'Poppins', sans-serif;
  }
`;

export default theme;
