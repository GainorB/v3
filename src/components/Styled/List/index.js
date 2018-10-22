import styled from 'styled-components';

export const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

// GET IN TOUCH BUTTONS
export const ContactListItem = styled.li`
  background: #fff;
  text-transform: uppercase;
  border: 2px solid transparent;
  border-radius: 4px;
  font-size: 1.2rem;
  text-align: center;
  -webkit-transition: all 0.1s ease-in-out, 1s;
  -moz-transition: all 0.1s ease-in-out, 1s;
  -o-transition: all 0.1s ease-in-out, 1s;
  transition: all 0.1s ease-in-out, 1s;
  margin: 0.4em 0;
  padding: 1em;
  ${props => props.network && `color: ${props.color}`};
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.1);

  i {
    font-size: 2rem;
  }

  &:hover {
    cursor: pointer;
    color: #fff;
    ${props => props.network && `background: ${props.color}`};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  }
`;

export const CommitListItem = styled.li`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 10px;
  border-bottom: 1px solid #e9ecef;
  font-size: 1.4rem;
  padding: 25px 15px;
  background: ${props => (props.isAlt ? '#F4F4F4' : '')};

  .commit__current {
    font-size: 1.3rem;
    line-height: 1.3rem;
    border: 1px solid #63d488;
    color: #63d488;
    font-weight: 400;
    border-radius: 2px;
    padding: 6px 10px 4px 10px;
  }

  .commit__meta {
    font-weight: 400;
  }

  .commit__index {
    color: #c9c9c9;
    font-size: 2.5rem;
    align-self: center;
    justify-self: center;
    cursor: help;
  }

  .commit__date {
    display: block;
    margin-top: 5px;
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1rem;
    text-align: center;
    grid-template-columns: 1fr;

    .commit__current {
      font-size: 1rem;
    }

    .commit__index {
      font-size: 2rem;
    }

    .commit__date {
      font-size: 0.8rem;
    }
  }
`;

export const TechListItem = styled.li`
  user-select: none;
  display: inline-block;
  text-align: center;
  outline: none;
  margin: 5px;
  padding: 3px 6px 2px;
  line-height: 17px;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.1rem;
  font-weight: ${props => (props.hot ? 'bold' : 'normal')};
  color: ${props => (props.hot ? '#2447F9' : '#090909')};
  border: 1px solid ${props => (props.hot ? '#2447F9' : '#090909')};
  -webkit-transition: all 0.1s ease-in-out, 1s;
  -moz-transition: all 0.1s ease-in-out, 1s;
  -o-transition: all 0.1s ease-in-out, 1s;
  transition: all 0.1s ease-in-out, 1s;

  &:hover {
    opacity: ${props => (props.hot ? 'none' : '0.2')};
    box-shadow: 0px 0px 0px 2px ${props => (props.hot ? '#2447F9' : '#090909')};
  }

  @media only screen and (max-width: 1200px) {
    padding: 0.3 1em;
  }
`;
