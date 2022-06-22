import React, { lazy, Suspense } from 'react';

const LazyUI/sign-up = lazy(() => import('./UI/sign-up'));

const UI/sign-up = props => (
  <Suspense fallback={null}>
    <LazyUI/sign-up {...props} />
  </Suspense>
);

export default UI/sign-up;
