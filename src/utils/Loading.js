import React from 'react';
import PropTypes from 'prop-types';
import { LoadingImage, PerfectlyCentered } from '../components/Styled';

const logo = 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028357/portfolio/logo.jpg';

const Loading = ({ size }) => (
  <PerfectlyCentered>
    <LoadingImage size={size}>
      <img src={logo} alt="Loading.." />
      <p>Loading..</p>
    </LoadingImage>
  </PerfectlyCentered>
);

Loading.propTypes = {
  size: PropTypes.string,
};

Loading.defaultProps = {
  size: '70px',
};

export default Loading;
