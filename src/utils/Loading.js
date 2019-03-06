import React from 'react';
import PropTypes from 'prop-types';
import { LoadingImage, PerfectlyCentered } from '../components/Styled';
import Config from './Config';

const Loading = ({ size }) => (
  <PerfectlyCentered>
    <LoadingImage size={size}>
      <img src={Config.global.logo} alt="Loading.." />
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
