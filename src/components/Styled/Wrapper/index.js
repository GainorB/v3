import styled from 'styled-components';

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
