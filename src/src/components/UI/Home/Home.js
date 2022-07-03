import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import { Grid } from '@mui/material';

import VideoCardSlider from '../../Widgets/VideoCardSlider/VideoCardSlider';
import CryptoTable from '../../Widgets/CryptoTable/CryptoTable';
import StartTrading from '../StartTrading/StartTrading';

const Home = () => (
  <div className="Home">
		<Grid container spacing={4}>
			<Grid item xs={12}>
				<hr></hr>
				<h2 className='title'>
					Tutorial Videos
				</h2>
			</Grid>
			<Grid item xs={0} sm={1} md={2}></Grid>
			<Grid item xs={12} sm={10} md={8}>
				<VideoCardSlider></VideoCardSlider>
			</Grid>
			<hr></hr>
			<Grid item xs={0} sm={1} md={1}></Grid>
			<Grid item xs={12} sm={6} md={5}>
				<h2 className='title'>
					Crypto Data Table
				</h2>
				<CryptoTable></CryptoTable>
			</Grid>
			<Grid item xs={0} sm={1} md={1}></Grid>
			<Grid item xs={12} sm={4} md={3}>
				<StartTrading></StartTrading>
			</Grid>
		</Grid>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
