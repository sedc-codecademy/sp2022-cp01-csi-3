import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import './CryptoCard.css';
import { Link } from '@mui/material';

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
			<Button size="small">
				<Link to={"/log-in"}>
					Watch Video
				</Link>
			</Button>
		</CardActions>
	</Card>
);

CryptoCard.propTypes = {};

CryptoCard.defaultProps = {};

export default CryptoCard;
