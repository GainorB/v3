import styled from 'styled-components';

export const BrowserHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #272c33;

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
  position: relative;
`;

export const ProjectInnerGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
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
    background-color: #b6b6b6;
  }

  .browseBar__miniGrid {
    display: grid;
    grid-template-columns: repeat(3, 45px);
    justify-items: center;
    grid-gap: 5px;
  }

  @media only screen and (max-width: 1200px) {
    justify-items: center;
  }
`;

export const BrowserTop = styled.div`
  height: 150px;
  background-color: #fff;
  -webkit-box-shadow: -1px 6px 5px -4px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: -1px 6px 5px -4px rgba(0, 0, 0, 0.3);
  box-shadow: -1px 6px 5px -4px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 1200px) {
    position: fixed;
    width: 100%;
  }
`;

export const BrowserBookmarks = styled.div`
  display: flex;
  padding: 0px 10px 0px 10px;
  align-items: center;
  font-size: 1.1rem;

  .bookmark {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 4px;
    align-items: center;
    padding: 5px 10px;
    border-radius: 30px;
    margin: 5px;
    transition: background 0.5s ease;
    user-select: none;

    span {
      font-size: 0.8rem;
    }
  }

  .bookmark:not(.empty):hover {
    background: #e5e5e5;

    span {
      cursor: pointer;
    }
  }

  .empty {
    opacity: 0.5;
  }

  .actualStack {
    background: #dddddd;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  width: 200px;
  top: 30px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const DropdownList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  color: #dddddd !important;

  li {
    cursor: pointer;
    color: #090909;
    font-size: 0.8rem;
    padding: 8px 10px;
    letter-spacing: 1.5px;
    border-bottom: 1px solid #e1e1e1;
  }

  li:hover {
    background-color: #dddddd;
  }
`;

export const ProjectTitle = styled.div`
  font-size: 3.5rem;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  user-select: none;

  @media only screen and (max-width: 1200px) {
    font-size: 2rem;
  }
`;

export const ProjectHeadline = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  color: #616161;
  user-select: none;

  @media only screen and (max-width: 1200px) {
    font-size: 1.2rem;
  }
`;

export const ProjectDescription = styled.div`
  text-align: center;
  font-size: 1.1rem;
  padding: 0 30px;
  line-height: 30px;
  width: 80%;
  margin: 0 auto;

  @media only screen and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

export const ProjectHeader = styled.h1`
  user-select: none;
  font-size: 1rem;
  padding: 10px;
  margin: 0;
  color: #ffffff;
  font-weight: normal;
  text-align: center;
  background-color: #272c33;
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

export const ProjectInformation = styled.div`
  @media only screen and (max-width: 1200px) {
    margin-top: 160px;
  }
`;

export const Project = styled.div`
  background-color: rgb(255, 255, 255);
  -webkit-box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
  font-size: 0.9rem;
  margin: ${props => (props.margin ? '10px 10px 0 10px' : '')};

  .techFeature {
    border-bottom: 1px solid #e9ecef;
    padding: 5px 0px;
  }
`;

export const ProjectGallery = styled.div`
  i {
    font-size: 2rem;
    color: #090909;
  }

  button {
    cursor: pointer;
    display: block;
    background: none;
    border: none;
  }

  .gallery {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border: 1px solid #eff0f5;
  }

  .gallery__caption,
  .gallery__count {
    text-align: center;
    user-select: none;
  }

  .gallery__caption {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .gallery__count {
    font-size: 1rem;
    margin: 0;
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'prev' 'image' 'next';
  }
`;
