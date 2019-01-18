import styled from 'styled-components';

export const Skill = styled.div`
  user-select: none;
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 140px;
  grid-gap: 10px;
  padding: 1em;
  border: 1px solid #dbe2e8;
  transition: box-shadow 0.7s ease, border 0.7s ease;
  -webkit-transition: box-shadow 0.7s ease, border 0.7s ease;
  ${props =>
    props.stack &&
    `background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(https://res.cloudinary.com/dplvzflkc/image/upload/v1538266584/portfolio/fiyah.png);
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
    max-width: 200px;
    margin: 0 auto;
    transition: box-shadow 0.6s ease;
    -webkit-transition: box-shadow 0.6s ease;
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
