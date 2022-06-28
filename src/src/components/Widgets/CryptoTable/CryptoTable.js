import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './CryptoTable.css';

function createData(name, logo, price, stable, growth) {
	return {
		name,
		logo,
		price,
		stable,
		growth,
		history: [
			{
				date: '2020-01-05',
				customerId: '11091700',
				amount: 3,
			},
			{
				date: '2020-01-02',
				customerId: 'Anonymous',
				amount: 1,
			},
		],
	};
}

function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);

	return (
		<React.Fragment>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{row.name}
				</TableCell>
				<TableCell align="right">{row.logo}</TableCell>
				<TableCell align="right">{row.price}</TableCell>
				<TableCell align="right">{row.stable}</TableCell>
				<TableCell align="right">{row.growth}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant="h6" gutterBottom component="div">
								History
							</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>Date</TableCell>
										<TableCell>Customer</TableCell>
										<TableCell align="right">Amount</TableCell>
										<TableCell align="right">Total price ($)</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.history.map((historyRow) => (
										<TableRow key={historyRow.date}>
											<TableCell component="th" scope="row">
												{historyRow.date}
											</TableCell>
											<TableCell>{historyRow.customerId}</TableCell>
											<TableCell align="right">{historyRow.amount}</TableCell>
											<TableCell align="right">
												{Math.round(historyRow.amount * row.price * 100) / 100}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

Row.propTypes = {
	row: PropTypes.shape({
		logo: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		growth: PropTypes.number.isRequired,
		history: PropTypes.arrayOf(
			PropTypes.shape({
				amount: PropTypes.number.isRequired,
				customerId: PropTypes.string.isRequired,
				date: PropTypes.string.isRequired,
			}),
		).isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		protein: PropTypes.number.isRequired,
	}).isRequired,
};

const rows = [
	createData('BitCoin', 'https://bitcoin.org/img/icons/opengraph.png?1656252469', 5555, 'Yes', 5.0),
	createData('Etherium', 'https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg', 8832, 'Yes', 10.0),
	createData('Ada Cardano', 'https://s2.coinmarketcap.com/static/img/coins/200x200/2010.png', 555, 'No', 0.0),
	createData('Luna', 'https://www.cryptocoinzone.com/wp-content/uploads/2021/10/Terra-LUNA-logo.png', 5555, 'Yes', 5.0),
	createData('BitCoin', 'https://bitcoin.org/img/icons/opengraph.png?1656252469', 5555, 'Yes', 5.0),
	createData('BitCoin', 'https://bitcoin.org/img/icons/opengraph.png?1656252469', 5555, 'Yes', 5.0),
];

const CryptoTable = () => (
	<TableContainer component={Paper}>
		<Table aria-label="collapsible table">
			<TableHead>
				<TableRow>
					<TableCell />
					<TableCell>Dessert (100g serving)</TableCell>
					<TableCell align="right">Logo</TableCell>
					<TableCell align="right">Price</TableCell>
					<TableCell align="right">Stable</TableCell>
					<TableCell align="right">Growth</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map((row) => (
					<Row key={row.name} row={row} />
				))}
			</TableBody>
		</Table>
	</TableContainer>
);

CryptoTable.propTypes = {};

CryptoTable.defaultProps = {};

export default CryptoTable;
