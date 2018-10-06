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

export const StudySplash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  background: none;
  min-height: 200px;

  span {
    padding: 15px 25px;
    background: #090909;
    color: #fff;
    transition: 500ms color;
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
  }

  span:hover {
    color: #2649f0;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 2rem;
  }
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  align-items: center;

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

export const StudyTech = styled.li`
  user-select: none;
  display: inline-block;
  text-align: center;
  outline: none;
  margin: 5px;
  padding: 3px 6px 2px;
  line-height: 17px;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.1rem;
  font-weight: 500;
  background: ${props => (props.hot ? '#2447F9' : 'none')};
  color: ${props => (props.hot ? '#fff' : '#090909')};
  border: 1px solid ${props => (props.hot ? '#2447F9' : '#090909')};
  -webkit-transition: all 0.1s ease-in-out, 1s;
  -moz-transition: all 0.1s ease-in-out, 1s;
  -o-transition: all 0.1s ease-in-out, 1s;
  transition: all 0.1s ease-in-out, 1s;

  &:hover {
    opacity: ${props => (props.hot ? 'none' : '0.2')};
    box-shadow: 0px 0px 0px 2px ${props => (props.hot ? '#2447F9' : '#090909')};
  }

  @media only screen and (max-width: 1200px) {
    padding: 0.3 1em;
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
