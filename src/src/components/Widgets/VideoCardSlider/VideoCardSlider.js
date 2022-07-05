import React from 'react';
import PropTypes from 'prop-types';
import './VideoCardSlider.css';
import VideoCard from '../VideoCard/VideoCard';
import { Grid } from '@mui/material';

const videos = [
	{
		lable: "My Crypto Trading Strategy REVEALED!! Top TIPS! 💯",
		description: "The backbone of my personal crypto trading strategy is Bitcoin.This is simply because BTCs price has a huge influence over the price of other cryptocurrencies",
		url: "https://www.youtube.com/watch?v=EADLE7kO4tA&ab_channel=CoinBureau"
	},
	{
		lable: "How does a blockchain work - Simply Explained",
		description: "What is a blockchain and how do they work? I'll explain why blockchains are so special in simple and plain English!",
		url: "https://www.youtube.com/watch?v=SSo_EIwHSd4&ab_channel=SimplyExplained"
	},
	{
		lable: "NFT's Explained in 4 minutes!",
		description: "What are NFT's? NFT's are an innovation in the blockchain/cryptocurrency space that allows you to track who owns a particular item.",
		url: "https://www.youtube.com/watch?v=FkUn86bH34M&ab_channel=SimplyExplained"
	}
];

const VideoCardSlider = () => (
  <div className="VideoCardSlider">
		<div className="container">
			<Grid container spacing={6}>
				{videos.map((video, index) => {
					return ( 
						<Grid item xs={12} sm={6} md={4} key={index}>
							<VideoCard video={video}></VideoCard>
						</Grid>
					)	
				})}
			</Grid>
		</div>
  </div>
);

VideoCardSlider.propTypes = {};

VideoCardSlider.defaultProps = {};

export default VideoCardSlider;
