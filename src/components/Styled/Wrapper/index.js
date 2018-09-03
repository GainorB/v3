import styled from 'styled-components';

export const SectionWrapper = styled.div`
  background: ${props => (props.bg ? props.bg : '#f8f8f8')};
  color: ${props => (props.theme.fontColor ? props.theme.fontColor : '#3b3838')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${props => (props.theme.height ? `height: ${props.theme.height}` : 'min-height: 250px')};
  padding: 15px;

  .footer {
    font-size: 0.9rem;
    text-transform: uppercase;
  }

  .totalSkills {
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 1px;
  }

  input[type='text'] {
    height: 50px;
    color: #d8d8e0;
    background: none;
    border: none;
    outline: none;
    font-size: 1.5rem;
    letter-spacing: 1px;
    padding: 1em;
    width: 100%;
    text-align: center;
  }

  button {
    cursor: pointer;
    padding: 1em 4em;
    color: #fff;
    border: none;
    font-weight: 700;
    letter-spacing: 1px;
    background: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    position: relative;
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
    padding: 1.6em 3.5em;
  }

  button i {
    position: absolute;
    left: 22px;
    top: 24px;
    font-size: 2rem;
  }

  button span {
    position: relative;
    right: -17px;
  }

  button:hover {
    background: #fff;
    color: #1c4e8a;
  }

  @media only screen and (max-width: 700px) {
    min-height: 200px;
  }
`;

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 5fr;
  grid-template-areas: 'sidebar main';

  .sidebar {
    grid-area: 'sidebar';
  }

  .miniWrapper {
    grid-area: 'main';
    display: grid;
    grid-auto-flow: row;
    min-height: 100vh;
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 100%;
    grid-template-areas: 'sidebar' 'main';
  }
`;

export const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
`;
