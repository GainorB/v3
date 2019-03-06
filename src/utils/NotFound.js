import React from 'react';
import { Button, PerfectlyCentered, H1 } from '../components/Styled';

const NotFound = () => (
  <PerfectlyCentered>
    <H1 error>404, Not Found</H1>.
    <Button notFound onClick={() => window.history.go(-1)}>
      Go back
    </Button>
  </PerfectlyCentered>
);

export default NotFound;
