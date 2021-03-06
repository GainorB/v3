import styled from 'styled-components';

export const SideMenu = styled.div`
  display: grid;
  position: fixed;
  grid-template-rows: 380px auto minmax(auto, 285px) auto auto;
  grid-row-gap: 15px;
  padding: 20px;
  font-size: 0.9rem;
  height: 100%;
  background: #f8f9fa;
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
    transition: border-bottom 500ms;
    padding: 5px 0px;
  }

  .focusedOn li:hover,
  .toolSet li:hover {
    border-bottom: 1px solid #3249f0;
  }

  .title {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const SideMenuSectionTitle = styled.h4`
  user-select: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  border-bottom: 2px solid #090909;
  padding-bottom: 0.2em;
  color: #090909;
`;

export const SideMenuHub = styled.li`
  display: block;
  background: #fff;
  color: #090909;
  padding: 1em;
  margin: 0.5em 0;
  border: 1px solid #eff0f5;
  box-shadow: 3px 3px 0px #bababa;

  li {
    border-bottom: 1px solid #e9ecef;
    padding: 10px 0px;
  }

  &:hover {
    color: #0a0a0a;
    border: 1px solid #b0b0b0;
    box-shadow: 3px 4px 0px #b0b0b0;
  }

  span {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    padding: 4px 0px;
  }
`;

export const SideMenuBio = styled.div`
  user-select: none;
  margin: 0.5em 0em;
  font-size: 1rem;
  padding: 10px;
`;
