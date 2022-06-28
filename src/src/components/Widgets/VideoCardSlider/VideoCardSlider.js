import React from 'react';
import PropTypes from 'prop-types';
import './VideoCardSlider.css';
import VideoCard from '../VideoCard/VideoCard';

const VideoCardSlider = () => (
  <div className="VideoCardSlider">
		<div className="container">
			<div className="item"><VideoCard></VideoCard></div>
			<div className="item"><VideoCard></VideoCard></div>
			<div className="item"><VideoCard></VideoCard></div>
			<div className="item"><VideoCard></VideoCard></div>
			<div className="item"><VideoCard></VideoCard></div>
		</div>
  </div>
);

VideoCardSlider.propTypes = {};

VideoCardSlider.defaultProps = {};

export default VideoCardSlider;
