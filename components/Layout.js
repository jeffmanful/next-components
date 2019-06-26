/**
 * The layout of the app, wraps the root node component.
 * Here we will import our theme and global styles, navigation and head
 * Header and Footer would also go here
 * We wrap the children in the theme so that it is available in every sub-component
 * that will be rendered uding styled-components
 */
import { Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Navigation from './Navigation';
import theme, { GlobalStyle } from '../theme';

// Our styles for the main layout of the webpage.
// Agood place to begin applying the theme
const LayoutWrapper = styled.div`
  max-width: 1170px;
  height: 100%;
  margin: 0 auto;
  background: ${props => props.theme.background.primary};
  color: ${props => props.theme.text.primary};
`;

const Layout = ({ children }) => (
  <Fragment>
    <ThemeProvider theme={theme}>
      <LayoutWrapper>
        <Navigation />
        {children}
      </LayoutWrapper>
    </ThemeProvider>
    {/* Import our global styles here */}
    <GlobalStyle/>
  </Fragment>
)

export default Layout;
