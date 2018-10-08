import styled from 'styled-components';

export const StudyGrid = styled.div`
  display: grid;
  background: #fff;
  grid-template-rows: repeat(5, auto);
  grid-gap: 10px;
  padding: 10px;

  @media only screen and (max-width: 1200px) {
    grid-gap: 5px;
  }
`;

export const StudyInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 100%;
    grid-gap: 5px;
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
  border: 1px solid #090909;
  transition: box-shadow 0.7s ease;
  -webkit-transition: box-shadow 0.7s ease;

  .techFeature {
    border-bottom: 1px solid #e9ecef;
    padding: 5px 0px;
  }

  &:hover {
    box-shadow: 0px 0px 0px 2px #090909;
  }
`;

export const StudyHeader = styled.h1`
  user-select: none;
  font-size: 1rem;
  padding: 10px;
  margin: 0;
  color: #fff;
  font-weight: normal;
  text-align: center;
  background: #090909;
  text-transform: uppercase;
`;

export const StudyGallery = styled.div`
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

export const StudySplit = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #090909;
  font-size: 1rem;

  div {
    padding: 5px;
    text-align: center;
    -webkit-transition: all 0.1s ease-in-out, 1s;
    -moz-transition: all 0.1s ease-in-out, 1s;
    -o-transition: all 0.1s ease-in-out, 1s;
    transition: all 0.1s ease-in-out, 1s;
    color: #fff;
    text-transform: uppercase;
  }

  i {
    font-size: 1.5rem;
  }

  div:hover {
    cursor: pointer;
    background: #fff;
    color: #2649f0;
  }
`;
