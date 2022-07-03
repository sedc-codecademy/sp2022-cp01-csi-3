import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './CryptoTable.css';
import { environment } from '../../../environment';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Grid } from '@mui/material';


function CryptoTable() {
	const [loading, setLoading] = useState(true);
	const [rows, setRows] = useState([]);
	
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(environment.coinGeckoBaseURL + "coins/markets?vs_currency=USD");
			const data = await response.json();
			
			setTimeout(() => {
				setRows(data);
				setLoading(false);
			}, 2000);
			
		}
		fetchData();
	}, []);

		if(loading) {
			return (
				<LoadingSpinner></LoadingSpinner>
			)
		}

		return (
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 250 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell><strong>Logo</strong></TableCell>
							<TableCell><strong>Name</strong></TableCell>
							<TableCell><strong>Price</strong></TableCell>
							<TableCell><strong>Last Update Time</strong></TableCell>
							<TableCell><strong>Price Change in 24h(%)</strong></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, index) => (
							<TableRow
								key={index}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell><img src={row.image} alt="Logo not found" className='logo'></img></TableCell>
								<TableCell>{row.name}</TableCell>
								<TableCell>{row.current_price} $</TableCell>
								<TableCell>{row.last_updated}</TableCell>
								<TableCell>{row.price_change_percentage_24h} %</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		);
	}

CryptoTable.propTypes = {};

CryptoTable.defaultProps = {};

export default CryptoTable;