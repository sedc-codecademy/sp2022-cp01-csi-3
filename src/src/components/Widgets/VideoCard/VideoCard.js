import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player/youtube';
import './VideoCard.css';

const VideoCard = (props) => (
	<div className="VideoCard">
		<Card style={{height: 350}}>
			<CardMedia>
				<ReactPlayer height="100%" width="100%" url={props.video.url}></ReactPlayer>
			</CardMedia>
			<CardContent>
				<Typography gutterBottom variant="h6" component="div">
					{ props.video.lable }
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{ props.video.description }
				</Typography>
			</CardContent>
		</Card>
  </div>
);

VideoCard.propTypes = {};

VideoCard.defaultProps = {};

export default VideoCard;
