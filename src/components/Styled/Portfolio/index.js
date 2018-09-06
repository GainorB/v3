import styled from 'styled-components';

export const Button = styled.span`
  background: #090909;
  border: none;
  font-size: 1.2rem;
  text-align: center;
  -webkit-transition: all 0.1s ease-in-out, 0.8s;
  -moz-transition: all 0.1s ease-in-out, 0.8s;
  -o-transition: all 0.1s ease-in-out, 0.8s;
  transition: all 0.1s ease-in-out, 0.8s;
  color: #fff;
  padding: 0.4em;
  display: block;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    color: #2348f3;
  }
`;

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
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

// export const Project = styled.div`
//   width: 100%;
//   height: 100%;
//   color: black;
//   font-size: 1rem;
//   padding: 15px;
// `;

// export const Tech = styled.div`
//   display: inline-block;
//   background: #bdc7d8;
//   color: #45425b;
//   border-radius: 4px;
//   padding: 0.2em;
//   margin: 0.3em 0.3em 0.3em 0;
//   width: 140px;
//   text-align: center;
// `;

// export const ProjectTitle = styled.h1`
//   color: #272d50;
// `;

// export const ProjectDesc = styled.div`
//   line-height: 1.3rem;
// `;
