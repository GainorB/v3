import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  color: ${props => (props.notFound ? '#090909' : '#fff')};
  border: ${props => (props.notFound ? '2px solid #090909' : 'none')};
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
    box-shadow: ${props => (props.footer ? '' : '0px 0px 0px 2px #090909')};
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
      left: 15px;
      font-size: 1.4rem;
    }
  }
`;

export const NewProjectButton = styled(Button)`
  font-size: 1rem;
  border: none;
  background: ${props => (props.disabled ? '#6c757d' : '#090909')};
  padding: 1em 2em;

  &:hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    color: ${props => props.disabled && '#fff'};
    background: ${props => props.disabled && '#6c757d'};
    box-shadow: 0px 0px 0px 2px ${props => (props.disabled ? '#6c757d' : '#090909')};
  }
`;

export const GoHome = styled(Button)`
  padding: 1em 2em;
  font-size: 1rem;
  color: #090909;
  border: 2px solid #090909;
  width: 100%;

  &:hover {
    color: #fff;
    background: #090909;
  }
`;
