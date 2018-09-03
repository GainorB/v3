import styled from 'styled-components';

export const MoreDetails = styled.span`
  background: none;
  text-transform: uppercase;
  border: 2px solid #2f2f3a;
  font-size: 1.2rem;
  text-align: center;
  -webkit-transition: all 0.1s ease-in-out, 0.8s;
  -moz-transition: all 0.1s ease-in-out, 0.8s;
  -o-transition: all 0.1s ease-in-out, 0.8s;
  transition: all 0.1s ease-in-out, 0.8s;
  color: #2f2f3a;
  padding: 0.4em;
  margin: 0.5em 0;
  display: block;
  cursor: pointer;

  &:hover {
    color: #fff;
    border-color: #c5c5c5;
    background: #c5c5c5;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export const Project = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  font-size: 1rem;
  padding: 15px;
`;

export const Tech = styled.div`
  display: inline-block;
  background: #bdc7d8;
  color: #45425b;
  border-radius: 4px;
  padding: 0.2em;
  margin: 0.3em 0.3em 0.3em 0;
  width: 140px;
  text-align: center;
`;

export const Online = styled(MoreDetails)`
  border-color: #c5c5c5;
  background: none;
  color: #c5c5c5;

  &:hover {
    color: #fff;
    border-color: #2f2f3a;
    background: #2f2f3a;
  }
`;

export const ProjectTitle = styled.h1`
  color: #272d50;
`;

export const ProjectDesc = styled.div`
  line-height: 1.3rem;
`;
