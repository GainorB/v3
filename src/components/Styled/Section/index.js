import styled from 'styled-components';

export const Section = styled.div`
  background: ${props => (props.bg ? props.bg : '#f8f8f8')};
  color: ${props => (props.theme.fontColor ? props.theme.fontColor : '#3b3838')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props => (props.theme.height ? `height: ${props.theme.height}` : 'min-height: 280px')};
  padding: 15px;

  @media only screen and (max-width: 1200px) {
    min-height: 240px;
  }
`;

export const SectionHeader = styled.h2`
  user-select: none;
  color: ${props => (props.theme.fontColor ? props.theme.fontColor : '#fff')};
  font-size: 5rem;
  font-weight: 500;
  letter-spacing: -0.026em;
  margin: 0;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);

  @media only screen and (max-width: 1200px) {
    font-size: 3.3rem;
  }
`;

export const SectionDesc = styled.p`
  color: ${props => (props.theme.fontColor ? props.theme.fontColor : '#fff')};
  font-size: 2.125rem;
  text-align: center;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  padding: 10px 8%;
  font-weight: regular;
  margin: 0;

  @media only screen and (max-width: 1200px) {
    font-size: 1.4rem;
  }
`;
