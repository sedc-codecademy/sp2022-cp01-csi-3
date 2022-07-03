import React, { lazy, Suspense } from 'react';

const LazyStartTrading = lazy(() => import('./StartTrading'));

const StartTrading = props => (
  <Suspense fallback={null}>
    <LazyStartTrading {...props} />
  </Suspense>
);

export default StartTrading;
