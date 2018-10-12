import styled from 'styled-components';

export const BrowserHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: #303030;

  .dot {
    margin-right: 4px;
    width: 12px;
    height: 12px;
    border-radius: 100%;
  }

  .dot-one {
    background: #ff564f;
  }

  .dot-two {
    background: #ffb429;
  }

  .dot-third {
    background: #24c239;
  }
`;

export const BrowserWrapper = styled.div`
  display: grid;
  background: #fff;
  grid-template-rows: repeat(6, auto) 1fr;
  grid-gap: 10px;

  .seperator {
    height: 10px;
    -webkit-box-shadow: -1px 6px 5px -4px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: -1px 6px 5px -4px rgba(0, 0, 0, 0.1);
    box-shadow: -1px 6px 5px -4px rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-width: 1200px) {
    grid-gap: 5px;
  }
`;

export const ProjectInnerGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: 10px;
  margin: 20px;
`;

export const BrowserBar = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px 10px 0px 10px;

  i {
    font-size: 2rem;
    color: #090909;
    transition: 500ms color;
  }

  i:hover {
    color: #3149ea;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  .browser__searchBar {
    background: #dddddd;
    color: #090909;
    padding: 15px;
    border-radius: 30px;
    width: 100%;
    font-size: 1rem;
    transition: background 0.5s ease;
  }

  .browser__searchBar:hover {
    background: #b6b6b6;
  }

  .browseBar__miniGrid {
    display: grid;
    grid-template-columns: repeat(3, 45px);
    justify-items: center;
    grid-gap: 5px;
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 100%;
    justify-items: center;
  }
`;

export const BrowserBookmarks = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px 0px 10px;
  font-size: 1.1rem;

  .bookmark {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 4px;
    align-items: center;
    background: #dddddd;
    padding: 5px 15px;
    border-radius: 30px;
    margin: 5px;
    transition: background 0.5s ease;
  }

  .bookmark:hover {
    cursor: pointer;
    background: #b6b6b6;
  }

  .bookmark span {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 1200px) {
    margin: 0 auto;
  }
`;

export const ProjectTitle = styled.div`
  font-size: 4rem;
  text-align: center;
  font-weight: 500;
  margin-top: 20px;

  @media only screen and (max-width: 1200px) {
    font-size: 3rem;
  }
`;

export const ProjectHeadline = styled.div`
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
  color: #616161;

  @media only screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export const ProjectDescription = styled.div`
  text-align: center;
  font-size: 1.4rem;
  padding: 20px 30px 0px 30px;
  line-height: 35px;

  @media only screen and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

export const ProjectColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 100%;
    grid-gap: 5px;
  }
`;

export const ProjectHeader = styled.h1`
  user-select: none;
  font-size: 1rem;
  padding: 10px;
  margin: 0;
  color: #616161;
  font-weight: normal;
  text-align: center;
  background-color: #f5f5f5;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12) inset;
`;

export const ProjectContent = styled.div`
  font-size: 1rem;
  line-height: 1.7;
  padding: 15px;

  p {
    text-align: center;
    margin: 0.5em 0;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 0.9rem;
  }
`;

export const Project = styled.div`
  background-color: rgb(255, 255, 255);
  -webkit-box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
  font-size: 0.9rem;

  .techFeature {
    border-bottom: 1px solid #e9ecef;
    padding: 5px 0px;
  }
`;

export const ProjectGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;

  div {
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid #eff0f5;
  }
`;
