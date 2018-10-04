import styled from 'styled-components';

export const Avatar = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 50% !important;
    margin-bottom: 20px;
    display: block;
    margin: auto;
    user-select: none;
    border: 1px solid #e9ecef;
  }

  img:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;
