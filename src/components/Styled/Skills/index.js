import styled from 'styled-components';

export const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  align-items: center;
  justify-items: center;
  border: 2px solid #090909;
  padding: 1em;
  margin: 0.7em;
  -webkit-transition: all 0.1s ease-in-out, 0.8s;
  -moz-transition: all 0.1s ease-in-out, 0.8s;
  -o-transition: all 0.1s ease-in-out, 0.8s;
  transition: all 0.1s ease-in-out, 0.8s;

  img {
    width: 100%;
    max-height: 100px;
    object-fit: contain;
  }

  span {
    color: #090909;
    font-size: 1.2rem;
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
    letter-spacing: 1px;
  }

  &:hover {
    cursor: crosshair;
    border-color: #2348f3;
    transform: scale(1.05, 1.05);
  }
`;

export const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 1em 0;
`;
