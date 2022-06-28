import React, { lazy, Suspense } from 'react';

const LazyTradingChart = lazy(() => import('./TradingChart'));

const TradingChart = props => (
  <Suspense fallback={null}>
    <LazyTradingChart {...props} />
  </Suspense>
);

export default TradingChart;
