import styled from 'styled-components';

export const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  align-items: center;
  justify-items: center;
  border: 2px solid #c5c5c5;
  padding: 1em;
  -webkit-transition: all 0.1s ease-in-out, 0.8s;
  -moz-transition: all 0.1s ease-in-out, 0.8s;
  -o-transition: all 0.1s ease-in-out, 0.8s;
  transition: all 0.1s ease-in-out, 0.8s;

  img {
    width: 100%;
    height: 100%;
    max-height: 100px;
    object-fit: contain;
  }

  span {
    font-size: 1.2rem;
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
    letter-spacing: 1px;
  }

  &:hover {
    cursor: crosshair;
    border-color: #2f2f3a;
    transform: scale(1.05, 1.05);
  }
`;

export const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 15px;
  margin: 1em 0;
`;
