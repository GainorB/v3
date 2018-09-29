import styled from 'styled-components';

export const SideMenu = styled.div`
  display: grid;
  position: fixed;
  grid-template-rows: repeat(6, auto);
  grid-row-gap: 15px;
  padding: 40px 20px;
  font-size: 0.9rem;
  height: 100%;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  background: #f6f6f6;
  width: 400px;
  overflow: auto;

  .intro {
    text-align: center;
  }

  .intro img {
    margin-bottom: 1em;
  }

  .intro p {
    margin: 0;
    padding: 0;
  }

  .name,
  .title {
    user-select: none;
    text-transform: uppercase;
  }

  .name {
    font-size: 1.8rem;
    letter-spacing: 1px;
    font-weight: bold;
  }

  .focusedOn li,
  .toolSet li {
    border-bottom: 1px solid #e9ecef;
    padding: 5px 0px;
  }

  .title {
    font-size: 1.2rem;
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

  .avatar:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  @media only screen and (max-width: 1200px) {
    display: none;
    position: static;
    width: 100%;

    .focusedOn,
    .github,
    .resume,
    .toolSet,
    .inTouch {
      display: none;
    }
  }
`;

export const SideMenuTitle = styled.h4`
  user-select: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  border-bottom: 2px solid #090909;
  padding-bottom: 0.2em;
  color: #090909;
`;

export const Hub = styled.li`
  display: block;
  background: #fff;
  color: #090909;
  padding: 1em;
  margin: 0.5em 0;
  border: 1px solid #eff0f5;
  box-shadow: 3px 3px 0px #bababa;

  &:hover {
    cursor: pointer;
    color: #0a0a0a;
    border: 1px solid #b0b0b0;
    box-shadow: 3px 4px 0px #b0b0b0;
  }

  span {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
  }
`;

export const Bio = styled.div`
  user-select: none;
  margin: 0.5em 0em;
  font-size: 1rem;
  font-style: italic;
  padding: 10px;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.1);
`;
