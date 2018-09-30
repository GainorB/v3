import React from 'react';
import { Button, PerfectlyCentered, H1, H4 } from '../components/Styled';

const NotFound = () => (
  <PerfectlyCentered>
    <H1 error>The requested page was not found</H1>.
    <H4>The page may have been removed or the link you followed could be broken</H4>
    <Button notFound onClick={() => window.history.go(-1)}>
      Return to previous page
    </Button>
  </PerfectlyCentered>
);

export default NotFound;
