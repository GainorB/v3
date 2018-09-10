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
  margin: 0.2em;
  color: #090909;
  border: 2px solid #090909;

  &:hover {
    box-shadow: 0px 0px 0px 2px #090909;
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
  padding: 0.5em 1em;
  outline: none;
  color: #fff;
  text-align: center;
  background: #a70000;
  cursor: pointer;
  -webkit-transition: all 0.1s ease-in-out, 1s;
  -moz-transition: all 0.1s ease-in-out, 1s;
  -o-transition: all 0.1s ease-in-out, 1s;
  transition: all 0.1s ease-in-out, 1s;

  &:hover {
    background: #090909;
    box-shadow: 0px 0px 0px 2px #090909;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1rem;
    padding: 0.5em 1em;
  }
`;

export const PrevButton = styled(Button)`
  font-size: 1rem;
  border: none;
  background: #a70000;
  padding: 1em 2em;

  &:hover {
    box-shadow: 0px 0px 0px 2px #090909;
  }
`;

export const NextButton = styled(Button)`
  font-size: 1rem;
  border: none;
  background: #015f40;
  padding: 1em 2em;

  &:hover {
    box-shadow: 0px 0px 0px 2px #090909;
  }
`;
