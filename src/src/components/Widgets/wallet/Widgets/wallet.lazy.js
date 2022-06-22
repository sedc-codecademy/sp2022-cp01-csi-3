import React, { lazy, Suspense } from 'react';

const LazyWidgets/wallet = lazy(() => import('./Widgets/wallet'));

const Widgets/wallet = props => (
  <Suspense fallback={null}>
    <LazyWidgets/wallet {...props} />
  </Suspense>
);

export default Widgets/wallet;
