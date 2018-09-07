import styled from 'styled-components';

export const ExpGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-gap: 10px;
  font-size: 1rem;
  padding: 20px;
  border: 2px solid #090909;

  .exp__companyDescription {
    color: #666666;
  }

  .exp__responsibilities {
    margin: 0.4em 0;
    padding-left: 20px;
  }

  .exp__responsibilities li {
    padding: 0.3em 0;
  }

  .exp__responsibilities span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const ExpHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 20px;
  align-items: center;
  font-size: 1rem;
  padding: 15px;
  border-bottom: 2px solid #090909;

  img {
    width: 100%;
    max-height: 80px;
    object-fit: contain;
    user-select: none;
  }

  .exp__companyName {
    text-transform: uppercase;
    color: #2f2f3a;
    font-size: 1.3rem;
    letter-spacing: 0.5px;
  }

  .exp__jobTitle {
    display: block;
    font-size: 1rem;
    margin: 0.4em 0;
    font-weight: bold;
  }
`;

export const ExpFooter = styled.div`
  padding: 20px;
  color: #fff;
  border: none;
  font-size: 1rem;
  background: #090909;
  margin: 0 0 0.5em 0;
`;

export const ExpContainer = styled.div`
  padding: 1em;
`;
