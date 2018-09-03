import styled from 'styled-components';

export const ListGroup = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

// GET IN TOUCH BUTTONS
export const InTouch = styled.li`
  background: #2f2f3a;
  text-transform: uppercase;
  border: 2px solid transparent;
  font-size: 1.2rem;
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
  margin: 0.4em 0;
  padding: 0.4em;
  ${props => props.twitter && 'color: #1E95DC'};
  ${props => props.instagram && 'color: #B13DAC'};
  ${props => props.github && 'color: #3F4448'};
  ${props => props.linkedin && 'color: #0577B2'};
  ${props => props.stack && 'color: #F38134'};
  ${props => props.email && 'color: #ba4444'};

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
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  }
`;
