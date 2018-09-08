import styled from 'styled-components';

export const Foot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #090909;
  color: #fff;
  height: 250px;
  font-size: 1.2rem;

  .footer__email {
    color: #3d3d3d;
    font-weight: bold;
    font-size: 1.1rem;
    margin: 0;
    padding: 0;
  }

  a:link,
  a:active {
    color: #3d3d3d;
    text-transform: none;
  }

  a:hover {
    color: #fff;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1rem;

    .footer__email {
      font-size: 1rem;
    }
  }
`;
