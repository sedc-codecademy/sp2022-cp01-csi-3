import React, { lazy, Suspense } from 'react';

const LazyCryptoTable = lazy(() => import('./CryptoTable'));

const CryptoTable = props => (
  <Suspense fallback={null}>
    <LazyCryptoTable {...props} />
  </Suspense>
);

export default CryptoTable;
