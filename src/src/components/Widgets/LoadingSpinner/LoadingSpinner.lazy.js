import React, { lazy, Suspense } from 'react';

const LazyLoadingSpinner = lazy(() => import('./LoadingSpinner'));

const LoadingSpinner = props => (
  <Suspense fallback={null}>
    <LazyLoadingSpinner {...props} />
  </Suspense>
);

export default LoadingSpinner;
