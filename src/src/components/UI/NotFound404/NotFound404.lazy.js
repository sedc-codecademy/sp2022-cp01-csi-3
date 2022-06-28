import React, { lazy, Suspense } from 'react';

const LazyNotFound404 = lazy(() => import('./NotFound404'));

const NotFound404 = props => (
  <Suspense fallback={null}>
    <LazyNotFound404 {...props} />
  </Suspense>
);

export default NotFound404;
