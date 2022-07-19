import React, { lazy, Suspense } from 'react';

const LazySimulation = lazy(() => import('./Home'));

const Home = props => (
  <Suspense fallback={null}>
    <LazySimulation {...props} />
  </Suspense>
);

export default Home;

