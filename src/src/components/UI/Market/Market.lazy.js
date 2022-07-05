import React, { lazy, Suspense } from 'react';

const LazyMarket = lazy(() => import('./Market'));

const Market = props => (
  <Suspense fallback={null}>
    <LazyMarket {...props} />
  </Suspense>
);

export default Market;
