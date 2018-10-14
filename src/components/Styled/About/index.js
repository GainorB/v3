import styled from 'styled-components';

export const Me = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  color: #090909;
  background: #fff;
  font-size: 1.7rem;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  margin: 0;

  h1 {
    font-size: 2.1rem;
    font-weight: bold;
    letter-spacing: -0.026em;
    margin: 0;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  a:link {
    text-decoration: none;
    font-weight: bold;
  }

  .developedWith {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1.2rem;

    h1 {
      font-size: 1.4rem;
    }
  }
`;
