import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  border: none;
  font-weight: lighter;
  letter-spacing: 1px;
  background: none;
  font-size: 1.2rem;
  position: relative;
  text-align: center;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;
  -webkit-transition: all 0.1s ease-in-out, 1s;
  -moz-transition: all 0.1s ease-in-out, 1s;
  -o-transition: all 0.1s ease-in-out, 1s;
  transition: all 0.1s ease-in-out, 1s;
  padding: 1.6em 3.5em;

  i {
    position: absolute;
    left: 22px;
    top: 24px;
    font-size: 2rem;
  }

  span {
    position: relative;
    right: -17px;
  }

  &:hover {
    background: #fff;
    color: #090909;
  }

  @media only screen and (max-width: 1200px) {
  }
`;
