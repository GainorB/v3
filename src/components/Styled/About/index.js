import styled from 'styled-components';

export const Me = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  color: #090909;
  background: #fff;
  font-size: 1.7rem;
  line-height: 1.4;
  letter-spacing: -0.9px;
  margin: 0;

  h1 {
    font-size: 2.1rem;
    font-weight: bold;
    letter-spacing: -0.026em;
    margin: 0;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1.1rem;

    h1 {
      font-size: 1.4rem;
    }
  }
`;
