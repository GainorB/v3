import styled from 'styled-components';

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
