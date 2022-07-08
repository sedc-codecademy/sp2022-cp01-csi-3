import React, { lazy, Suspense } from 'react';

const LazyTrendingMarkets = lazy(() => import('./TrendingMarkets'));

const TrendingMarkets = props => (
  <Suspense fallback={null}>
    <LazyTrendingMarkets {...props} />
  </Suspense>
);

export default TrendingMarkets;
