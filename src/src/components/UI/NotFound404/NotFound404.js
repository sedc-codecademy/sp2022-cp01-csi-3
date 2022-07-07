import React from 'react';
import PropTypes from 'prop-types';
import './NotFound404.css';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const NotFound404 = () => (
	<div className='NotFound404'>
		<div className='c'>
			<div className='_404'>404</div>
			<br />
			<hr />
			<br />
			<div className='_1'>THE PAGE</div>
			<br />
			<div className='_2'>WAS NOT FOUND</div>
			<br />
			<br />
			<Link to={''} style={{textDecoration: 'none'}}>
				<Button variant="contained">
					Home
				</Button>
			</Link>
		</div>
	</div>
);

NotFound404.propTypes = {};

NotFound404.defaultProps = {};

export default NotFound404;
