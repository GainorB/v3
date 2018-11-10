import styled from 'styled-components';

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background: none;
  min-height: 150px;

  .poweredWith {
    color: #090909;
    text-align: center;
    font-size: 1.4rem;
    letter-spacing: 0.1px;
  }

  .tech {
    font-weight: bold;
    font-style: italic;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1.7rem;

    .tech {
      padding: 0;
      border: none;
    }
  }
`;
