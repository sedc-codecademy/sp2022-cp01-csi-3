import React, { lazy, Suspense } from 'react';

const LazyCoinStatistic = lazy(() => import('./CoinStatistic'));

const CoinStatistic = props => (
  <Suspense fallback={null}>
    <LazyCoinStatistic {...props} />
  </Suspense>
);

export default CoinStatistic;
