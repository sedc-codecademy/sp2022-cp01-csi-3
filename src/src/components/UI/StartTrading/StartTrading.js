import React from 'react';
import PropTypes from 'prop-types';
import './StartTrading.css';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const StartTrading = () => (
  <div className="StartTrading">
	<Grid item xs={12} >
		<div className='title'>
			<h3>Start Simulation</h3>
		</div>
	</Grid>
	<Grid item xs={12}>
		<div className='content'>
			<p>Test your knowledge about crypto, decision making when it matters and luck. Simulate the real thing right here.</p>
			<Button variant="contained" className='button'>
				<Link to={"/log-in"} style={{textDecoration: "none", color: "white", fontWeight: "bolder"}}>
					Start Simulation
				</Link>
			</Button>
		</div>
	</Grid>
  </div>
)

StartTrading.defaultProps = {};

export default StartTrading;
