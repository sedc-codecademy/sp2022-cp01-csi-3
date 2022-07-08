import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import { Grid } from '@mui/material';
import VideoCardSlider from '../../Widgets/VideoCardSlider/VideoCardSlider';
import CryptoTable from '../../Widgets/CryptoTable/CryptoTable';
import StartTrading from '../StartTrading/StartTrading';
import CryptoCard from '../../Widgets/CryptoCard/CryptoCard';

export default function Home() {
	const [coins, setCoins] = useState([]);

	const getCoins = coins => {
		setCoins(coins);
	}

  return (
  <div className="Home">
		<Grid container spacing={5} >
			<Grid item xs={0} sm={1} md={2}></Grid>
			<Grid item xs={12} sm={10} md={8} id="sliderBackground">
				<VideoCardSlider></VideoCardSlider>
			</Grid>
			<hr></hr>
			<Grid item xs={0} sm={1} md={1}></Grid>
			<Grid item xs={12} sm={6} md={5}>
				<h2 className='title'>
					Crypto Data Table
				</h2>
				<CryptoTable getCoins={getCoins}></CryptoTable>
			</Grid>
			<Grid item xs={0} sm={1} md={1}></Grid>
			<Grid item xs={12} sm={5} md={4}>
				<StartTrading></StartTrading>
				<br />
				<br />
				<br />
				<CryptoCard coins={coins}></CryptoCard>
			</Grid>			
		</Grid>
	</div>
  );
};

Home.propTypes = {};

Home.defaultProps = {};