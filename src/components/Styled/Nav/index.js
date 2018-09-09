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
    position: static;
    justify-content: center;
    background: #2649f0;
    margin-bottom: 10px;
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
    background: none;
    border-bottom: none;
    padding: 1em;

    &:hover {
      color: #090909;
      border-bottom: none;
    }
  }
`;
