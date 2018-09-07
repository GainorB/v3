import styled from 'styled-components';

export const SectionWrapper = styled.div`
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

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 5fr;
  grid-template-areas: 'sidebar main';

  .sidebar {
    grid-area: 'sidebar';
    overflow: auto;
    max-height: 100vh;
  }

  .miniWrapper {
    max-height: 100vh;
    grid-area: 'main';
    display: grid;
    overflow: auto;
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 100%;
    grid-template-areas: 'sidebar' 'main';

    .sidebar {
      grid-area: 'sidebar';
      max-height: none;
    }

    .miniWrapper {
      max-height: none;
      grid-area: 'main';
    }
  }
`;

export const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 0.5em;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  padding: 1em;
`;
