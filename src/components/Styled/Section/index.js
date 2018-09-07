import styled from 'styled-components';

export const Section = styled.div`
  background: ${props => (props.bg ? props.bg : '#f8f8f8')};
  color: ${props => (props.theme.fontColor ? props.theme.fontColor : '#3b3838')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${props => (props.theme.height ? `height: ${props.theme.height}` : 'min-height: 280px')};
  padding: 15px;

  .replace {
    font-size: 1.1rem;
    color: #2348f3;
    opacity: 0.6;
    font-weight: bold;
  }

  @media only screen and (max-width: 700px) {
    min-height: 200px;
  }
`;

export const SectionHeader = styled.h2`
  font-size: 5rem;
  font-weight: 500;
  letter-spacing: -0.026em;
  color: ${props => (props.theme.fontColor ? props.theme.fontColor : '#fff')};
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
  color: ${props => (props.theme.fontColor ? props.theme.fontColor : '#fff')};
  font-weight: regular;
  margin: 0;

  @media only screen and (max-width: 700px) {
    font-size: 0.9rem;
  }
`;
