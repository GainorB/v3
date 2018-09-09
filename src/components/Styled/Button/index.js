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

export const StudyButton = styled(Button)`
  color: #fff;
  background: #2249ed;
  padding: 0.7em 3em;
  margin: 0.2em;

  i {
    top: 8px;
    left: 15px;
  }

  span {
    right: -15px;
    color: #fff;
  }

  &:hover {
    background: #090909;
    color: #fff;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1rem;
    padding: 0.5em 2em;

    span {
      top: 1px;
    }

    i {
      top: 6px;
      font-size: 1.4rem;
    }
  }
`;

export const GoBack = styled.button`
  font-size: 1.3rem;
  border: none;
  display: block;
  margin: auto;
  width: 200px;
  padding: 0.2em 1em;
  outline: none;
  color: #fff;
  text-align: center;
  background-color: #a70000;
  cursor: pointer;
  -webkit-transition: all 0.1s ease-in-out, 1s;
  -moz-transition: all 0.1s ease-in-out, 1s;
  -o-transition: all 0.1s ease-in-out, 1s;
  transition: all 0.1s ease-in-out, 1s;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;

  &:hover {
    background: #090909;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1rem;
    padding: 0.5em 1em;
  }
`;
