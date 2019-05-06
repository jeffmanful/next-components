/**
 * This file is an example for creating navigation for our webpage
 * We make use of the theme for our styled-components!
 */
import styled from 'styled-components';
import Link from 'next/link';

// styled-components:
const Brand = styled.h1`
  color: ${props => props.theme.primary};
  font-size: ${props =>  props.fontSize || props.theme.fontSize.regular};
`;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const NavigationLinks = styled(NavigationWrapper)`
  a {
    margin: 5px;
    text-decoration: none;
    color: ${props => props.theme.secondary};
    font-weight: bold;
  };
`;

// Define data for the navigation links.
const navigationLinks = [
  {
    display: 'About Us',
    url: '/about',
  },
  {
    display: 'Work',
    url: '/work',
  },
  {
    display: 'News',
    url: '/news',
  }
];

const Navigation = () =>  {
  return (
    <NavigationWrapper>
      <Brand fontSize="26px">
        <Link href="/">Site name</Link>
      </Brand>
      <NavigationLinks>
        {navigationLinks.map(link => (
          <Link
            key={link.url}
            href={link.url}
          >
            <a>{link.display}</a>
          </Link>
        ))}
      </NavigationLinks>
    </NavigationWrapper>
  );
}

export default Navigation;
