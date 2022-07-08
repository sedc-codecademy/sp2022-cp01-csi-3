import React, { lazy, Suspense } from 'react';

const LazyMarketsTable = lazy(() => import('./MarketsTable'));

const MarketsTable = props => (
  <Suspense fallback={null}>
    <LazyMarketsTable {...props} />
  </Suspense>
);

export default MarketsTable;
