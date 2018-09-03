import styled from 'styled-components';

export const MainNav = styled.ul`
  background: #0a2375;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 20px;
  height: 100px;
  font-size: 0.8rem;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  position: fixed;
  z-index: 3;

  li {
    display: block;
    text-transform: uppercase;
    color: #f7f7f7;
    align-self: center;
    font-weight: bold;
    border: 3px solid #0a2375;
    padding: 1.4em;
    -webkit-transition: all 0.35s ease-in-out;
    -moz-transition: all 0.35s ease-in-out;
    -o-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
  }

  li:hover {
    cursor: pointer;
    border: 3px solid rgba(255, 255, 255, 0.2);
  }
`;
