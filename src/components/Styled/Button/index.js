import styled from 'styled-components';

// ButtonGrid on CaseStudy Page
export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    margin-top: 5px;
    grid-template-columns: 100%;
    grid-gap: 5px;
  }
`;

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
  padding: 1.6em 3em;

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
    background: ${props => (props.footer ? '' : '#fff')};
    color: #090909;
  }

  @media only screen and (max-width: 1200px) {
  }
`;

export const NewProjectButton = styled(Button)`
  font-size: 0.8rem;
  border: none;
  background: ${props => (props.disabled ? '#6c757d' : '#090909')};
  padding: 1em 2em;
  text-transform: uppercase;

  &:hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    color: ${props => props.disabled && '#fff'};
    background: ${props => props.disabled && '#6c757d'};
    box-shadow: 0px 0px 0px 2px ${props => (props.disabled ? '#6c757d' : '#090909')};
  }
`;

export const GoHome = styled.div`
  button {
    cursor: pointer;
    display: block;
    font-size: 2rem;
    color: #090909;
    transition: 500ms color;
    background: none;
    border: none;
    margin: 10px auto;
  }
`;
