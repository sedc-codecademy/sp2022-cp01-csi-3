import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import './VideoCard.css';

const VideoCard = () => (
  <div className="VideoCard">
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				height="140"
				image="https://www.techsmith.com/blog/wp-content/uploads/2019/06/YouTube-Thumbnail-Sizes.png"
				alt="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Video
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Informational videos for CP and crypto!!!
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Watch Video</Button>
			</CardActions>
		</Card>
  </div>
);

VideoCard.propTypes = {};

VideoCard.defaultProps = {};

export default VideoCard;
