import React, { lazy, Suspense } from 'react';

const LazyVideoCard = lazy(() => import('./VideoCard'));

const VideoCard = props => (
  <Suspense fallback={null}>
    <LazyVideoCard {...props} />
  </Suspense>
);

export default VideoCard;
