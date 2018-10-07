import styled from 'styled-components';

export const ListGroup = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

// GET IN TOUCH BUTTONS
export const InTouch = styled.li`
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
  ${props => props.twitter && 'color: #1E95DC'};
  ${props => props.instagram && 'color: #B13DAC'};
  ${props => props.github && 'color: #3F4448'};
  ${props => props.linkedin && 'color: #0577B2'};
  ${props => props.stack && 'color: #F38134'};
  ${props => props.email && 'color: #ba4444'};
  ${props => props.resume && 'color: #fcc846'};
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.1);

  i {
    font-size: 2rem;
  }

  &:hover {
    cursor: pointer;
    color: #fff;
    ${props => props.twitter && 'background: #1E95DC'};
    ${props => props.instagram && 'background: #B13DAC'};
    ${props => props.github && 'background: #3F4448'};
    ${props => props.linkedin && 'background: #0577B2'};
    ${props => props.stack && 'background: #F38134'};
    ${props => props.email && 'background: #ba4444'};
    ${props => props.resume && 'background: #fcc846'};
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  }
`;

export const Commit = styled.li`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 10px;
  border-bottom: 1px solid #e9ecef;
  font-size: 1.4rem;
  padding: 25px 15px;
  background: ${props => (props.alt ? '#F4F4F4' : '')};

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
    font-style: italic;
    font-size: 0.9rem;
  }
`;
