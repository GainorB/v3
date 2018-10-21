import styled from 'styled-components';

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background: none;
  min-height: 150px;

  .title {
    color: #090909;
    text-align: center;
    white-space: nowrap;
    font-weight: bold;
  }

  .tech {
    border-bottom: 2px solid #090909;
    padding-bottom: 5px;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 2rem;
  }
`;
