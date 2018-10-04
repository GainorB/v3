import styled from 'styled-components';

export const Nav = styled.ul`
  background: #090909;
  position: fixed;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-left: 10px;
  height: 100px;
  font-size: 1.1rem;
  width: 100%;
  z-index: 3;
  transition: all ease 0.5s;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: block;
  color: #fff;
  align-self: center;
  border-bottom: 3px solid #090909;
  padding: 0.5em 1.4em;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  -o-transition: all 0.35s ease-in-out;
  transition: all 0.25s ease-in-out;
  background: ${props => (props.isActive ? '#2649f0' : '#090909')};
  text-transform: lowercase;

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid #2649f0;
  }

  @media only screen and (max-width: 1200px) {
    font-weight: bold;
    font-size: 0.9rem;
    background: none;
    border-bottom: none;
    padding: 1em;

    &:hover {
      color: #090909;
      border-bottom: none;
    }
  }
`;

export const ResponsiveNav = styled.ul`
  display: none;
  position: fixed;
  border-top: 3px solid #2447f9;
  background: #090909;
  z-index: 3;
  width: 100%;
  margin: 0;
  padding: 0;
  transition: all ease 0.5s;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);

  .responsiveNav__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    color: #fff;
    min-height: 100px;
  }

  .responsiveNav__grid div {
    padding: 0.5em;
  }

  .responsiveNav__logo {
    font-size: 2rem;
    user-select: none;
  }

  .responsiveNav__menu {
    font-size: 2rem;
    justify-self: end;
  }

  .responsiveNav__menu button {
    background: none;
    border: none;
    color: #fff;
  }

  .responsiveNav__menu button:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1200px) {
    display: block;
  }
`;

export const ResponsiveNavItem = styled.li`
  padding: 20px;
  display: inline-block;
  color: white;
  border: 0;
  transition: all 0.1s;
  font-size: 20px;
  text-transform: lowercase;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  width: 100%;
  text-align: center;
  position: relative;
  letter-spacing: 1px;
  transition: all ease 0.5s;

  &:hover {
    color: #2447f9;
  }
`;
