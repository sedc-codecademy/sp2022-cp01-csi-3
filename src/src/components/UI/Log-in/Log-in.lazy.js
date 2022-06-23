import React, { lazy, Suspense } from 'react';

const LazyLog-in = lazy(() => import('./Log-in'));

const Log-in = props => (
  <Suspense fallback={null}>
    <LazyLog-in {...props} />
  </Suspense>
);

export default Log-in;
