import React from 'react';
import PropTypes from 'prop-types';
import { PerfectlyCentered, Error, Button } from '../components/Styled';

const ErrorMessage = ({ error }) => (
  <PerfectlyCentered>
    <Error>{error}</Error>
    <Button notFound onClick={() => window.history.go(-1)}>
      Return to previous page
    </Button>
  </PerfectlyCentered>
);

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
