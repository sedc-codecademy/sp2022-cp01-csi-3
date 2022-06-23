import React, { lazy, Suspense } from 'react';

const LazyUI/about = lazy(() => import('./UI/about'));

const UI/about = props => (
  <Suspense fallback={null}>
    <LazyUI/about {...props} />
  </Suspense>
);

export default UI/about;
