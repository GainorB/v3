import styled from 'styled-components';

export const Foot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #090909;
  color: #fff;
  height: 300px;
  font-size: 1.1rem;
  letter-spacing: 1px;

  a {
    text-transform: none;
    font-weight: bold;
    color: #fff;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1rem;

    .footer__email {
      font-size: 1rem;
    }
  }
`;

export const FooterIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-size: 2rem;

  i {
    opacity: 0.3;
  }

  .linkedin i {
    color: #0577b2;
  }

  .email i {
    color: #ba4444;
  }

  .github i {
    color: #3f4448;
  }

  .twitter i {
    color: #1e95dc;
  }

  i {
    transition: all 500ms;
    padding: 10px;
  }

  i:hover {
    color: #fff;
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
`;
