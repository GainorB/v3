import styled from 'styled-components';

export const BrowserHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: #303030;

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

  .browser__title {
    color: #fff;
    font-size: 1rem;
    text-align: center;
    width: 100%;
    user-select: none;
  }
`;

export const BrowserWrapper = styled.div`
  background: #ebebeb;
`;

export const BrowserBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto) 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px 10px 0px 10px;

  i {
    font-size: 2rem;
    color: #090909;
    transition: 500ms color;
  }

  i:hover {
    color: #3149ea;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  .browser__searchBar {
    background: #dddddd;
    color: #090909;
    padding: 15px;
    border-radius: 30px;
    width: 100%;
    font-size: 1rem;
    transition: background 0.5s ease;
  }

  .browser__searchBar:hover {
    background: #b6b6b6;
  }
`;

export const BrowserBookmarks = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px 10px 10px;
  padding-bottom: 5px;
  font-size: 1rem;
  -webkit-box-shadow: -1px 6px 5px -4px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -1px 6px 5px -4px rgba(0, 0, 0, 0.1);
  box-shadow: -1px 6px 5px -4px rgba(0, 0, 0, 0.1);

  .bookmark {
    background: #dddddd;
    padding: 10px 15px;
    border-radius: 30px;
    margin: 5px;
    transition: background 0.5s ease;
  }

  .bookmark:hover {
    cursor: pointer;
    background: #b6b6b6;
  }

  .bookmark span {
    font-size: 0.9rem;
  }
`;

export const ProjectTitle = styled.div`
  font-size: 4rem;
  text-align: center;
  font-weight: 500;
  margin-top: 20px;
`;

export const ProjectHeadline = styled.div`
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
  color: #c6c6c6;
  margin-top: 10px;
`;

export const ProjectDescription = styled.div`
  text-align: center;
  font-size: 1.4rem;
  padding: 30px;
  line-height: 35px;
  margin-top: 10px;
`;

export const ProjectLayout = styled.div`
  display: grid;
  grid-template-rows: auto;
`;
