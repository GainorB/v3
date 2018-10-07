import styled from 'styled-components';

export const Foot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #090909;
  color: #fff;
  height: 300px;
  font-size: 1rem;
  letter-spacing: 1px;

  .footer__changelog a {
    font-weight: normal;
    color: rgba(255, 255, 255, 0.2);
  }

  a {
    text-transform: none;
    font-weight: bold;
    color: #fff;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 0.85rem;
  }
`;

export const FooterFinePrint = styled.div`
  color: #fff;
  text-align: center;
  margin: 30px 0px;
  font-size: 0.8rem;

  p {
    margin: 0.4rem 0;
    padding: 0;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 0.7rem;
  }
`;
