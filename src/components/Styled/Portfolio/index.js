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

  &:hover {
    background: #2348f3;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  margin: 0.5em;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
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
