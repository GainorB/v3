import styled from 'styled-components';

export const MyName = styled.h1`
  color: #f7f7f7;
  text-transform: uppercase;
  font-size: 3.4rem;
  letter-spacing: 4px;
  font-weight: 700;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
    0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
`;

export const SectionHeader = styled.h2`
  font-size: 5rem;
  font-weight: 500;
  letter-spacing: -0.026em;
  color: ${props => (props.theme.fontColor ? props.theme.fontColor : '#3b3838')};
  margin: 0;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);

  @media only screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const SectionDesc = styled.p`
  font-size: 2.125rem;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  padding: 10px 8%;
  color: ${props => (props.theme.fontColor ? props.theme.fontColor : '#3b3838')};
  font-weight: regular;
  margin: 0;

  @media only screen and (max-width: 700px) {
    font-size: 0.9rem;
  }
`;

export const SideMenuHeader = styled.h4`
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  border-bottom: 1px solid #090909;
  padding-bottom: 0.5em;
  color: #090909;
`;

export const ReturnedResults = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 1px;
  font-style: italic;
`;
