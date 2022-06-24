import React, { lazy, Suspense } from 'react';

const LazyWallet = lazy(() => import('./Wallet'));

const Wallet = props => (
  <Suspense fallback={null}>
    <LazyWallet {...props} />
  </Suspense>
);

export default Wallet;
