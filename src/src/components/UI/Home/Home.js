import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import { Grid } from '@mui/material';

import VideoCardSlider from '../../Widgets/VideoCardSlider/VideoCardSlider';
import CryptoTable from '../../Widgets/CryptoTable/CryptoTable';

const Home = () => (
  <div className="Home">
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<VideoCardSlider></VideoCardSlider>
			</Grid>
			<Grid item xs={1}></Grid>
			<Grid item xs={10}>
				<CryptoTable></CryptoTable>
			</Grid>
		</Grid> 
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
