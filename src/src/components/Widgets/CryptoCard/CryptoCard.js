import React from 'react';
import PropTypes from 'prop-types';
import './CryptoCard.css';

const CryptoCard = (prop) => (
	<Card sx={{ maxWidth: 400 }}>
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">
				{ prop.name }
			</Typography>
			<Typography variant="body2" color="text.secondary">
				{ prop.description }
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small">Watch Video</Button>
		</CardActions>
	</Card>
);

CryptoCard.propTypes = {};

CryptoCard.defaultProps = {};

export default CryptoCard;
