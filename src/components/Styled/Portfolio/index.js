import styled from 'styled-components';

export const ProjectGrid = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: 1fr auto;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    box-shadow: 0 2px 4px 0 rgba(46, 61, 73, 0.12);
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #090909;
  }

  &:hover .overlay {
    opacity: 1;
  }

  .overlay__text {
    color: #2348f3;
    font-weight: bold;
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }

  .overlay__text .technologies {
    font-size: 1rem;
    color: rgb(255, 255, 255);
    margin-top: 10px;
    font-weight: normal;
  }

  .test {
    color: #fff;
    font-size: 1rem;
  }
`;
