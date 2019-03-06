import React from 'react';
import { Button, PerfectlyCentered, H1 } from '../components/Styled';

const NotFound = () => (
  <PerfectlyCentered>
    <H1 error>The requested page was not found</H1>.
    <Button notFound onClick={() => window.history.go(-1)}>
      Return to previous page
    </Button>
  </PerfectlyCentered>
);

export default NotFound;
