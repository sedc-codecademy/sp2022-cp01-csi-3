import React, { lazy, Suspense } from 'react';

const LazyTermsOfService = lazy(() => import('./TermsOfService'));

const TermsOfService = props => (
  <Suspense fallback={null}>
    <LazyTermsOfService {...props} />
  </Suspense>
);

export default TermsOfService;
