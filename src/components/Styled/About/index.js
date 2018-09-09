import styled from 'styled-components';

export const Me = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5% 6%;
  line-height: 1.2;
  color: #090909;
  background: #fff;
  font-size: 1.7rem;
  min-height: 350px;

  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  font-weight: regular;
  margin: 0;

  h1 {
    font-size: 2.1rem;
    font-weight: bold;
    letter-spacing: -0.026em;
    margin: 0;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1.2rem;
    min-height: 300px;

    h1 {
      font-size: 1.4rem;
    }
  }
`;
