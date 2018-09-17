import styled from 'styled-components';

export const StudyGrid = styled.div`
  display: grid;
  background: #fff;
  grid-template-rows: 200px auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;

  @media only screen and (max-width: 1200px) {
    grid-gap: 0px;
  }
`;

export const StudySplash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
  background: none;
  color: #fff;

  span {
    padding: 20px 30px;
    background: #090909;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 2rem;
  }
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media only screen and (max-width: 1200px) {
    margin-top: 5px;
    grid-template-columns: 100%;
    grid-gap: 5px;
  }
`;

export const StudyInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 100%;
    grid-gap: 0px;
  }
`;

export const StudyContent = styled.div`
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

export const Study = styled.div`
  background-color: #fff;
  border: 2px solid #090909;

  .techFeature {
    border-bottom: 1px solid #e9ecef;
    padding: 5px 0px;
  }
`;

export const StudyHeader = styled.h1`
  font-size: 1rem;
  padding: 10px;
  margin: 0;
  color: #fff;
  font-weight: normal;
  text-align: center;
  background: #090909;
  text-transform: uppercase;
`;

export const GalleryGrid = styled.div`
  display: block;
  background-color: #fff;
  border: 2px solid #090909;

  @media only screen and (max-width: 1200px) {
    padding: 15px;
  }
`;

export const StudyGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  padding: 15px;

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

export const StudyTech = styled.li`
  display: inline-block;
  text-align: center;
  outline: none;
  font-weight: 600;
  margin: 5px;
  padding: 5px 10px;
  font-size: 0.9rem;
  background: none;
  color: #090909;
  border: 2px solid #090909;
  -webkit-transition: all 0.1s ease-in-out, 1s;
  -moz-transition: all 0.1s ease-in-out, 1s;
  -o-transition: all 0.1s ease-in-out, 1s;
  transition: all 0.1s ease-in-out, 1s;

  &:hover {
    box-shadow: 0px 0px 0px 2px #090909;
  }

  @media only screen and (max-width: 1200px) {
    padding: 0.3 1em;
  }
`;
