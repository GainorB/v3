import styled from 'styled-components';

export const ProjectGrid = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: auto 1fr auto auto;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    -webkit-filter: blur(0px);
    filter: blur(0px);
    transition: filter 300ms ease-in;
  }

  .toolbar {
    display: flex;
    align-items: center;
    padding: 10px;
    background: #303030;
  }

  .dot {
    margin-right: 4px;
    width: 12px;
    height: 12px;
    border-radius: 100%;
  }

  .dot-one {
    background: #ff564f;
  }

  .dot-two {
    background: #ffb429;
  }

  .dot-third {
    background: #24c239;
  }

  .project__image {
    position: relative;
  }

  .project__meta {
    padding: 20px;
    background: #ebebeb;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 5em;
    opacity: 0;
  }

  &:hover .overlay {
    opacity: 1;
  }

  &:hover img {
    -webkit-filter: blur(4px);
    filter: blur(4px);
  }

  .overlay__text {
    color: #090909;
    font-weight: bold;
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .project__name {
    font-size: 1.5rem;
    padding: 10px;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
    background: #090909;
  }

  .project__name span {
    display: block;
  }

  .project__name span:nth-child(1) {
    font-weight: bold;
  }

  .project__name span:nth-child(2) {
    font-size: 0.8rem;
    margin-top: 3px;
    color: #dbe2e8;
  }
`;
