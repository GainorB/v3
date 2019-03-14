import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 5fr;

  .relativelyPositioned {
    position: relative;
  }

  .sidebar {
    opacity: ${({ showSideMenu }) => (showSideMenu ? '1' : '0')};
    visibility: ${({ showSideMenu }) => (showSideMenu ? 'visible' : 'hidden')};
    grid-area: 'sidebar';
    -moz-transition: all 1s ease;
    transition: all 1s ease;
  }

  .miniWrapper {
    display: grid;
    grid-template-rows: 1fr;

    position: absolute;
    grid-area: 'main';
    min-height: 100vh;
    min-width: 100%;
    left: ${({ showSideMenu }) => (showSideMenu ? `0` : `-400px`)};
    -moz-transition: left 1s ease;
    transition: left 1s ease;
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

export const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  padding: 1em;
`;

export const AboutWrapper = styled.div`
  margin-top: 99px;

  @media only screen and (max-width: 1200px) {
    margin-top: 182px;
  }
`;

export const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 10px;
  padding: 1em;

  @media only screen and (max-width: 1200px) {
    padding: 1em 0;
  }
`;

export const PerfectlyCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  font-size: inherit;
  padding: 20px 0px;
`;
