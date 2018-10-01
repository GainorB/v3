import styled from 'styled-components';

export const Skill = styled.div`
  user-select: none;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 10px;
  padding: 1em;
  border: 1px solid #dbe2e8;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  transition: box-shadow 0.3s ease, border 0.3s ease;
  -webkit-transition: box-shadow 0.3s ease, border 0.3s ease;
  ${props =>
    props.stack &&
    `background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(https://res.cloudinary.com/dplvzflkc/image/upload/v1538266584/portfolio/fiyah.png);
    background-size: 100px 100px;
    background-repeat: no-repeat;
    background-position: center 50%;
    `};

  .skill__rows {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
  }

  .skill__projectCount {
    text-align: center;
    font-size: 0.9rem;
    padding: 10px;
    background: none;
    border: 1px solid #dbe2e8;
    color: #090909;
    transition: box-shadow 0.3s ease;
    -webkit-transition: box-shadow 0.3s ease;
  }

  .skill__projectCount:hover {
    cursor: pointer;
    box-shadow: 0px 0px 0px 2px #dbe2e8;
  }

  .skill__projectCount a {
    color: #fff;
  }

  img {
    width: 100%;
    max-height: 100px;
    object-fit: contain;
  }

  .skill__Tech {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }

  &:hover {
    box-shadow: 0px 0px 0px 2px #dbe2e8;
  }
`;

export const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  padding: 1em;
`;
