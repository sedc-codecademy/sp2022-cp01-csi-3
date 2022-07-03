import React from 'react';
import PropTypes from 'prop-types';
import './LoadingSpinner.css';

const LoadingSpinner = () => (
	<div className="spinner-container">
		<div className="loading-spinner"></div>
	</div>
);

LoadingSpinner.propTypes = {};

LoadingSpinner.defaultProps = {};

export default LoadingSpinner;
