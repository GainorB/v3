import styled from 'styled-components';

export const Me = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em 2em;
  color: #090909;
  background: #fff;
  font-size: 1.7rem;
  line-height: 1.6;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  margin: 0;

  .developedWith {
    margin: 0;
    margin-top: 1em;
  }

  h1 {
    font-size: 2.1rem;
    font-weight: bold;
    letter-spacing: -0.026em;
    margin: 0;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  a:link {
    text-decoration: none;
  }

  .code {
    border: 1px solid #dedede;
    background-color: #ebebeb;
    border-radius: 3px;
    padding: 0.1rem 0.2rem;
    white-space: nowrap;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1.1rem;

    h1 {
      font-size: 1.4rem;
    }
  }
`;
