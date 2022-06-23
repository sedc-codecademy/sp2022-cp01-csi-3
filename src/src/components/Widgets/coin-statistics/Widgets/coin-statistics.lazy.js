import React, { lazy, Suspense } from 'react';

const LazyWidgets/coin-statistics = lazy(() => import('./Widgets/coin-statistics'));

const Widgets/coin-statistics = props => (
  <Suspense fallback={null}>
    <LazyWidgets/coin-statistics {...props} />
  </Suspense>
);

export default Widgets/coin-statistics;
