import styled from 'styled-components';

// const BackgroundGradient = keyframes`
//   0% {background-position: 0% 50%;}
//   50% {background-position: 100% 50%;}
//   100% {background-position: 0% 50%;}
// `;

export const SideMenu = styled.div`
  display: grid;
  grid-template-rows: repeat(20, auto);
  grid-auto-flow: row;
  padding: 60px 20px;
  font-size: 0.9rem;
  height: 100%;
  border: 1px solid #e9ecef;
  overflow: auto;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  background: #f8f9fa;

  .intro {
    text-align: center;
  }

  .intro p {
    margin: 0.5em;
    padding: 0;
  }

  .nav li {
    cursor: pointer;
    display: block;
    padding: 0.2em 0;
    text-transform: uppercase;
    transition: all 200ms;
  }

  .nav li:hover {
    color: #342c5c;
    border-right: 3px solid #342c5c;
  }

  .name,
  .title {
    text-transform: uppercase;
  }

  .name {
    font-size: 1.4rem;
  }

  .focusedOn li {
    padding: 0.2em 0;
  }

  .title {
    font-size: 1rem;
    font-style: italic;
  }

  .avatar {
    width: 200px;
    height: 200px;
    border-radius: 50% !important;
    margin-bottom: 20px;
    display: block;
    margin: auto;
    user-select: none;
    border: 1px solid #e9ecef;
  }

  @media only screen and (max-width: 700px) {
    grid-template-rows: repeat(5, auto);
    font-size: 0.9rem;
    grid-row-gap: 20px;
    padding: 20px;
  }
`;

export const Hub = styled.li`
  display: block;
  background: #bdc7d8;
  color: #10102c;
  border: 1px solid #2f2f3a;
  padding: 0.4em;
  margin: 0.3em 0;

  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  }
`;

export const Repo = styled.div`
  padding: 0.4em;
  margin-top: 0.5em;
  border-right: 1px solid #2f2f3a;
  border-bottom: 2px solid #2f2f3a;

  span {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
  }

  span:hover {
    cursor: pointer;
    color: #10102c;
  }

  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  }
`;
