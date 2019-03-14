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

  i {
    cursor: pointer;
    font-size: 2rem;
    color: #fff;
    transition: color ease 0.5s;
  }

  i:hover {
    color: #3149ea;
  }

  button {
    background: none;
    border: none;
    margin-right: 50px;
  }

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
  background: #f8f9fa;
  z-index: 3;
  width: 100%;
  margin: 0;
  padding: 0;
  transition: all 0.6s ease;
  border-top: 5px solid #2447f9;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.14), 0 2px 2px rgba(0, 0, 0, 0.14);

  .responsiveNav__title {
    display: block;
    font-size: 1.1rem;
    font-weight: normal;
    color: #c9c9c9;
    margin-top: 5px;
  }

  .responsiveNav__items {
    opacity: ${props => (props.showMenu ? '1' : '0')};
    max-height: ${props => (props.showMenu ? '500px' : '0')};
    visibility: ${props => (props.showMenu ? 'visible' : 'hidden')};
    transition: all 0.6s ease;
  }

  .responsiveNav__grid {
    display: grid;
    grid-template-columns: 120px 1fr 75px;
    align-items: center;
    color: #090909;
    padding: 0.5em 2em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  .responsiveNav__logo {
    text-align: center;
    font-size: 1.6rem;
    user-select: none;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 1;
  }

  .responsiveNav__menu {
    font-size: 1.6rem;
    justify-self: center;
  }

  .responsiveNav__menu button {
    background: none;
    border: none;
    color: #090909;
  }

  .responsiveNav__menu button:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1200px) {
    display: block;
  }
`;

export const ResponsiveNavItem = styled.li`
  padding: 15px;
  display: inline-block;
  font-weight: ${props => (props.isActive ? 'bold' : 'none')};
  color: ${props => (props.isActive ? '#2649f0' : '#fff')};
  border: 0;
  background: #090909;
  transition: all 0.1s;
  font-size: 20px;
  text-transform: lowercase;
  width: 100%;
  text-align: center;
  position: relative;
  letter-spacing: 1px;
  transition: all 0.6s ease;

  &:hover {
    color: #2447f9;
  }
`;

export const ResponsiveNavSocial = styled.div`
  background: #090909;
  text-align: center;
  padding: 0 10px;
`;
