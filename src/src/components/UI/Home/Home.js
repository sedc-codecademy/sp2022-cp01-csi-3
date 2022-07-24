import React, { useState } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Typography from '@material-ui/core/Typography';
import { Link, NavLink } from 'react-router-dom';
import './Home.css';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

const Home = () => (
	<div className="Home">
		<div id='HomeContainer'>
			<img src='https://imgur.com/tHEuCWK.png' className='HomeSticker'></img>
			<h1>LEARN. INVEST. EARN.</h1>
			<p>Technology is always changing and evolving, and with that come new and exciting ways to implement it. 
				An interesting trend is the blockchain and cryptocurrency market. For this reason, 
				we created a website that simulates the values of popular cryptocurrencies and lets a user "BUY" cryptocurrencies 
				on a certain day and see how their values fluctuate. Our site creates a simulated crypto portfolio for people that 
				are not familiar with the concept yet or can't invest in crypto but want to experience the crypto trading world.
			</p>
			<Button variant="contained" href='/simulation' id='HomeGetStartedButton'>
				Get Started →
			</Button>
		</div>
		<Box sx={{ flexGrow: 1 }} className="HomeContainer">
      <Grid className="HomeGrid-3x3" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid  className="HomeBox" item xs={2} sm={4} md={4}>
            <Item className='HomeItem'>
				<p>There are only <span>21 MILLION BITCOIN</span> ever created. However, out of this, 
					an estimated <span>3.7 MILLION BITCOIN</span> have been lost forever, leaving only <br></br> <span>17.3 MILLION BITCOIN </span> 
					that can ever be accessed and sold.</p>
            </Item>
          </Grid>
          <Grid className="HomeBox" item xs={2} sm={4} md={4}>
            <Item className='HomeItem'>
				<p>Some of the biggest gaining cryptocurrencies in 2021 were gaming and metaverse projects. 
					Sandbox gained <span>12,763%</span>. But that was beaten by Axie Infinity which gained <span>15,132%</span>. 
					And those were dwarfed by Gala which gained <span>40,400%</span>.</p>
            </Item>
          </Grid>
          <Grid className="HomeBox" item xs={2} sm={4} md={4}>
            <Item className='HomeItem'>
				<p>The highest-selling NFT in history was <span>“Everydays: The First 5000 Days”</span>, 
					by Beeple. It sold for <span>$69,346,250</span> (38,525 ETH) on March 11, 2021.</p>
            </Item>
          </Grid>
      </Grid>
    </Box>
	</div>
  ); 
  
Home.propTypes = {};
  
Home.defaultProps = {};
  
export default Home;
