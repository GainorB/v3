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

export const SocialIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-size: 1.7rem;

  i {
    opacity: 0.5;
  }

  .resume i {
    color: #fcc846;
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
