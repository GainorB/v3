import styled from 'styled-components';

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  background: none;
  min-height: 200px;

  span {
    padding: 15px 25px;
    background: #090909;
    color: #fff;
    transition: 500ms color;
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
  }

  span:hover {
    color: #2649f0;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 2rem;
  }
`;
