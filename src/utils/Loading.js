import React from 'react';
import { PerfectlyCentered } from '../components/Styled';

const style = {
  fontSize: '1rem',
};

const logo = 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028357/portfolio/logo.jpg';

const Loading = () => (
  <PerfectlyCentered>
    <span style={style}>Loading..</span>
  </PerfectlyCentered>
);

export default Loading;
