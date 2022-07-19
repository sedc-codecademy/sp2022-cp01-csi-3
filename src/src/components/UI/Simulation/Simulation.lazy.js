
import React, { lazy, Suspense } from 'react';

const LazyHome = lazy(() => import('./Simulation'));

const Simulation = props => (
  <Suspense fallback={null}>
    <LazyHome {...props} />
  </Suspense>
);

export default Simulation;
