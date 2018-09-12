import React from 'react';
import PropTypes from 'prop-types';
import { PerfectlyCentered, ProjectError, Button } from './Styled';

const InvalidProject = ({ error }) => (
  <PerfectlyCentered>
    <ProjectError>{error}</ProjectError>
    <Button notFound onClick={() => window.history.go(-1)}>
      Return to previous page
    </Button>
  </PerfectlyCentered>
);

InvalidProject.propTypes = {
  error: PropTypes.string.isRequired,
};

export default InvalidProject;
