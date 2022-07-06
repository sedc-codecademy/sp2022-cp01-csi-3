
// Importing files from Material-UI
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export default function Navbar() {

	return (
		<div className="Header">
			<AppBar position="static" className='navBar'>
				<Toolbar variant="dense">
					<img src='https://i.imgur.com/uBLKwse.png' height={50} width={50} ></img>
					<NavLink to={'/'} className="link" style={({ isActive }) =>
						isActive
							? {
								backgroundColor: 'rgba(143, 255, 255, 0.400)',
								color: 'rgb(255, 255, 255)',
							}
							: {}
					}>
						<Typography variant="h6" color="inherit">
							Home
						</Typography>
					</NavLink>
					<NavLink to={'/market'} className="link" style={({ isActive }) =>
						isActive
							? {
								backgroundColor: 'rgba(143, 255, 255, 0.400)',
								color: 'rgb(255, 255, 255)',
							}
							: {}
					}>
						<Typography variant="h6" color="inherit">
							Market
						</Typography>
					</NavLink>
					<NavLink to={'/log-in'} className="link rightSide" style={({ isActive }) =>
						isActive
							? {
								backgroundColor: 'rgba(143, 255, 255, 0.400)',
								color: 'rgb(255, 255, 255)',
							}
							: {}
					}>
						<Typography variant="h6" color="inherit">
							Log In
						</Typography>
					</NavLink>
					<NavLink to={'/sign-up'} className="link rightSide" style={({ isActive }) =>
						isActive
							? {
								backgroundColor: 'rgba(143, 255, 255, 0.400)',
								color: 'rgb(255, 255, 255)',
							}
							: {}
					}>
						<Typography variant="h6" color="inherit">
							Sign Up
						</Typography>
					</NavLink>
				</Toolbar>
			</AppBar>
		</div>
	);
}