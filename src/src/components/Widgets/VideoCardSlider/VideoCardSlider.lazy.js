import React, { lazy, Suspense } from 'react';

const LazyVideoCardSlider = lazy(() => import('./VideoCardSlider'));

const VideoCardSlider = props => (
  <Suspense fallback={null}>
    <LazyVideoCardSlider {...props} />
  </Suspense>
);

export default VideoCardSlider;
