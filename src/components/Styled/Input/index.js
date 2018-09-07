import styled from 'styled-components';

export const Input = styled.input`
  color: #fff;
  background: none;
  outline: none;
  font-size: 5rem;
  letter-spacing: -0.026em;
  border: none;
  text-align: center;
  font-weight: 500;
  caret-color: #2348f3;
  width: 400px;

  &:focus {
    -webkit-box-shadow: 0px 9px 0px -3px rgba(38, 73, 240, 1);
    -moz-box-shadow: 0px 9px 0px -3px rgba(38, 73, 240, 1);
    box-shadow: 0px 9px 0px -3px rgba(38, 73, 240, 1);
  }

  &::placeholder {
    color: #fff;
    font-size: 5rem;
    font-weight: 500;
    letter-spacing: -0.026em;
  }
`;
