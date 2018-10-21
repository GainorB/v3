import React from 'react';
import { LoadingImage } from '../components/Styled';

const logo = 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028357/portfolio/logo.jpg';

const Loading = () => (
  <LoadingImage>
    <img src={logo} alt="Loading.." />
    <p>Loading..</p>
  </LoadingImage>
);

export default Loading;
