import styled from 'styled-components';

export const StudyGrid = styled.div`
  display: grid;
  background: #f6f7fb;
  grid-template-rows: 400px 1fr auto;
  grid-gap: 1.3em;
  padding: 3em;
`;

export const StudySplash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  font-weight: bold;
  background: rgba(9, 9, 9, 0.9);
  color: #fff;

  span {
    padding: 2rem;
    background: rgba(9, 9, 9, 0.7);
  }
`;

export const StudyContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 10px;
  font-size: 1rem;
  min-height: 100vh;
`;

export const StudyInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 100%;
  }
`;

export const StudyContent = styled.div`
  font-size: 1rem;
  line-height: 1.7;

  p {
    text-align: center;
  }
`;

export const Study = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border: 1px solid #eff0f5;
`;

export const StudyHeader = styled.h1`
  font-size: 2.4rem;
  color: #848a8a;
  font-weight: normal;
  text-align: center;
  margin-bottom: 0.2em;
  text-transform: lowercase;
`;

export const GalleryGrid = styled.div`
  display: block;
  padding: 30px;
  background-color: white;
  border: 1px solid #eff0f5;
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
  display: inline-block;
  outline: none;
  font-weight: 600;
  margin: 0.3em;
  padding: 0.3em 2em;
  border: 2px solid #89a2b5;
  border-radius: 4px;
  color: #89a2b5;

  &:hover {
    box-shadow: 0px 0px 0px 2px #89a2b5;
    opacity: 1;
  }
`;
