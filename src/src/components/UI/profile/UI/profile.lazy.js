import React, { lazy, Suspense } from 'react';

const LazyUI/profile = lazy(() => import('./UI/profile'));

const UI/profile = props => (
  <Suspense fallback={null}>
    <LazyUI/profile {...props} />
  </Suspense>
);

export default UI/profile;
