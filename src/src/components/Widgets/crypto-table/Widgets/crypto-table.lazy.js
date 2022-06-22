import React, { lazy, Suspense } from 'react';

const LazyWidgets/crypto-table = lazy(() => import('./Widgets/crypto-table'));

const Widgets/crypto-table = props => (
  <Suspense fallback={null}>
    <LazyWidgets/crypto-table {...props} />
  </Suspense>
);

export default Widgets/crypto-table;
