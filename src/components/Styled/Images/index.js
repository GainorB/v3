import styled, { keyframes } from 'styled-components';

export const Avatar = styled.div`
  img {
    width: ${props => props.size && props.size};
    height: ${props => props.size && props.size};
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

export const SocialIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const SocialIcon = styled.span`
  i {
    transition: all 500ms;
    padding: 10px;
    font-size: 1.7rem;
    ${props => props.network && `color: ${props.color}`};
  }

  i:hover {
    color: #fff;
  }
`;

const fadeInAndOut = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const LoadingImage = styled.div`
  animation: ${fadeInAndOut} 2s ease-in-out infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
  }

  img {
    width: ${props => (props.size ? `${props.size}px` : '70px')};
    height: ${props => (props.size ? `${props.size}px` : '70px')};
    object-fit: cover;
  }
`;
