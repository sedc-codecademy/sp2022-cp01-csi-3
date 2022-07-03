import React, { lazy, Suspense } from 'react';

const LazyCryptoCard = lazy(() => import('./CryptoCard'));

const CryptoCard = props => (
  <Suspense fallback={null}>
    <LazyCryptoCard {...props} />
  </Suspense>
);

export default CryptoCard;
