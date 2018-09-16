import styled from 'styled-components';

export const ReturnedResults = styled.h1`
  font-size: 1rem;
  text-align: center;
  font-weight: 300;
  font-style: italic;
`;

export const Replace = styled.h1`
  font-size: 0.9rem;
  color: #fff;
  font-weight: normal;
  margin: 0;
  margin-top: 1em;
`;

// HEADERS
export const H1 = styled.h1`
  font-size: 2rem;
  margin: 0 0 8px 0;
  color: ${props => (props.error ? '#df3939' : '')};
`;

export const H4 = styled.h4`
  font-size: 0.9rem;
  margin: 0 0 8px 0;
  text-align: center;
`;

// ERROR TEXT

export const ProjectError = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #df3939;
`;
