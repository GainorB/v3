import styled from 'styled-components';

export const SideMenu = styled.div`
  display: grid;
  position: fixed;
  grid-template-rows: repeat(6, auto);
  grid-row-gap: 20px;
  padding: 60px 20px;
  font-size: 0.9rem;
  height: 100%;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  background: #f8f9fa;
  width: 400px;
  overflow: auto;

  .intro {
    text-align: center;
  }

  .intro p {
    margin: 0.5em;
    padding: 0;
  }

  .name,
  .title {
    text-transform: uppercase;
  }

  .name {
    font-size: 1.4rem;
  }

  .focusedOn li,
  .toolSet li {
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

  @media only screen and (max-width: 1200px) {
    display: block;
    position: static;
    width: 100%;
    font-size: 0.9rem;
    padding: 20px;

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
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  border-bottom: 1px solid #090909;
  padding-bottom: 0.5em;
  color: #090909;
`;

export const Hub = styled.li`
  display: block;
  background: #fff;
  color: #10102c;
  padding: 0.4em;
  margin: 0.3em 0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
`;

export const Repo = styled.div`
  padding: 0.4em;
  margin-top: 0.5em;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);

  span {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
  }

  span:hover {
    cursor: pointer;
    color: #10102c;
  }
`;
