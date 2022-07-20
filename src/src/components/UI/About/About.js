// import * as React from 'react';
import React, { useState } from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './About.css';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// function Hide() {
//   return (
//     <div>
//       <Mycomp />
//     </div>
//   );
// }

// function Mycomp() {
//   const [dp, setDp] = useState(false);
// }


      
// const ListComponent = () => { 
//   return ( 
//     <div> 
//       <h1>TEST</h1> 
//     </div> 
//   ); 
// }; 

function About () {
  const [dp1, setDp1] = useState(false);
  const [dp2, setDp2] = useState(false);
  const [dp3, setDp3] = useState(false);

  return (
  <div className="About">
    <Box sx={{ flexGrow: 1 }} className="aboutContainer">
    <Grid className="Grid">
        <Item className='Item'>
        <img className="Icon" src='https://cdn-icons-png.flaticon.com/512/991/991959.png'></img>
          <h1>What is Cryptocurrency?</h1>
          <p>Cryptocurrency is a new kind of internet money. You can use it to buy things online, and you can send it instantly to other users anywhere in the world, needing nothing more than a smartphone and an internet connection.
            Cryptocurrency can be cheaper and more convenient than many existing services like Paypal or Transferwise, if - for example - you regularly send money overseas. Several million people are actively using it today for that purpose.
            Worthwhile as that is, it isn’t what’s drawing people’s attention
            As well as functioning as a new type of internet money, cryptocurrency is also a very popular form of investment, with eye-popping long-term appreciation.
            Newcomers to cryptocurrency find this aspect very confusing. How can this new internet money, which can’t even be touched, be so valuable? 
            Well, we hope that you will expand your knowledge by using our website!</p>
        </Item>
      </Grid>
      <Grid className='infoGrid'>
        <Item className='infoItem'>
          <span class="span">€60,000,000</span>
          <p className='paragraph'>What €1 invested in 2009 in Bitcoin is worth in 2022</p>
        </Item>
      </Grid>
      <Grid className="Grid" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid  className="Box" item xs={2} sm={4} md={4}>
            <Item className='Item'><img className="Icon" src='https://cdn-icons-png.flaticon.com/512/5341/5341448.png'></img>
              <h1>How to use crypto</h1>
              <ul>
                <li className="ListItem">Secure your crypto</li>
                <li className="ListItem">Make transactions</li>
                <li className="ListItem">Advanced crypto use-cases</li>
              </ul>
              <Button variant="contained" id='AboutLearnMoreButton'
                  onClick={() => setDp1(!dp1)}>
                  Learn More →
              </Button>
            </Item>
          </Grid>
          <Grid className="Box" item xs={2} sm={4} md={4}>
            <Item className='Item'><img className="Icon" src='https://cdn-icons-png.flaticon.com/512/4285/4285667.png'></img>
              <h1>How to trade crypto</h1>
              <ul>
                <li className="ListItem">Understanding risk</li>
                <li className="ListItem">Investing vs Trading</li>
                <li className="ListItem">Technical & Fundamental Analysis</li>
              </ul>
              <Button variant="contained" id='AboutLearnMoreButton' type="button"
                  onClick={() => setDp2(!dp2)}>
                  Learn More →
              </Button>
            </Item>
          </Grid>
          <Grid className="Box" item xs={2} sm={4} md={4}>
            <Item className='Item'><img className="Icon" src='https://cdn-icons-png.flaticon.com/512/2685/2685027.png'></img>
              <h1>How to earn crypto</h1>
              <ul>
                <li className="ListItem">Earn by Learning & Working</li>
                <li className="ListItem">Trading, Defi & Mining</li>
                <li className="ListItem">Hoddling, DCA & Passive Interest</li>
              </ul>
              <Button variant="contained" id='AboutLearnMoreButton'
                onClick={() => setDp3(!dp3)}>
                  Learn More →
              </Button>
            </Item>
          </Grid>
          {dp1 && <div id="onClickDiv">
            <h3 className="HiddenDivHeading">HOW TO USE CRYPTO</h3>
            <p></p>A crypto wallet is a device for storing, sending and receiving cryptocurrency.<br></br><br></br>
            To set up your own mobile crypto wallet, go to the App Store or Play Store. That's where you will find a wide 
            selection of wallets to choose from, and as with any other app that you are considering downloading, it is worth 
            looking at the reviews with the store - or externally - to get a sense of how good it is.<br></br><br></br>
            We recommend that you start with an easy to use, non-custodial Mobile/Web wallet like Blockchain, putting you in 
            control of your all-important Private Keys and giving you access both on your phone and PC. But feel free to research 
            and choose your own, the process will be similar, so long as it uses a Seed.<br></br><br></br>
            The walk-through process will work as follows:
            <ul>
              <li>Downloading</li>
              <li>Creating an account</li>
              <li>Setting Your Two-Factor Authentication</li>
              <li>Back-up Your Seed</li>
              <li>Understand the Home Screen</li>
              <li>Sending</li>
              <li>Receiving</li>
            </ul>
          </div>}
          {dp2 && <div id="onClickDiv">
            <h3 className="HiddenDivHeading">HOW TO TRADE CRYPTO</h3>
            <p>When we researched cryptocurrency, one of the top asked questions was
            <i> "How can I trade cryptocurrency"</i>.<br></br><br></br> 
            This shouldn’t be a surprise. Cryptocurrency is an ideal asset to trade because its short-term price is volatile. 
            In other words, price changes quickly and by significant amounts on a regular basis.<br></br><br></br>
            A volatile asset presents a lot of opportunity for traders who make money by exploiting price movement, 
            but trading cryptocurrency is a double-edged sword. Greater volatility means greater risk, and the risk to a novice
             trader of losing money is much greater than the chance of making money.<br></br><br></br>
            Cryptocurrency is also a novel and relatively immature asset, which means that its true potential over the longer 
            term is especially hard to predict.<br></br><br></br>
            Its novelty - especially in relation to its challenge to traditional forms of money - means 
            its use case and legitimacy in the eyes of governments are unproven, and so there too, lies a lot of risk, 
            to weigh against the opportunity.<br></br><br></br>
          </p></div>}
          {dp3 && <div id="onClickDiv">
            <h3 className="HiddenDivHeading">HOW TO EARN CRYPTO</h3>
            <p>There are three categories that can be summarised as: 
          <ul>
            <li>Earning by Learning</li>
            <li>Earning by Stacking</li>
            <li>Earning by Speculating</li>
          </ul>
            <h4>Earning by Learning</h4>
            The opportunities that focus on earning crypto simply by learning will be your starting point along the path of earning 
            cryptocurrency, as though the returns are modest, you can earn your first Sats for no initial investment, very little risk 
            and just a modest amount of effort.<br></br><br></br>
            As important as earning your first crypto, you’ll absorb both valuable knowledge and experience along the way.<br></br><br></br>
            The first lesson looks at faucets which provide a valuable insight into the origins crypto economy but also the importance 
            of weighing up effort vs reward.<br></br><br></br>
            Clicking a button or watching an advert in return for a small amount of crypto might seem like a no-brainer, but with 
            faucets, much like Facebook, you are the product. Remember, nothing is free.

            <h4>Earning by Stacking</h4>
            Stacking may not sound the most appealing way to earn crypto, but don’t worry it doesn’t evolve filling supermarket shelves,
            just adopting a similar methodical approach to earning cryptocurrency.<br></br><br></br>
            Stacking is a common mantra within the community and done right it is a good passive way to build a portfolio with moderate risk.<br></br><br></br>
            The Stacking category is characterised by what we call earning through Passive Ownership; the risk ramps up because you are
            putting your own money on the line, but the idea of passive earning is that your crypto is working for you.<br></br><br></br>
            There are different ways to build and leverage your stack, from Dollar Cost Averaging (DCA) 
            to interest bearing services, which involve a different level of responsibility and decision making.

            <h4>Earning by Speculating</h4>
            Crypto is evolving, and as it evolves, so do the opportunities to earn, to the point where they start to challenge 
            existing ways to manage your wealth and invest. This includes Defi (Decentralised Finance), Trading and crypto-specific 
            Investment platforms, all of which carry much more considerable risk - and on the flip-side, significant potential returns.<br></br><br></br> 
            Defi and trading form part of the advanced section on earning cryptocurrency, focused on speculating. It will also introduce
            the opportunities from investing in Non Fungible Tokens. NFTs are tokens representing the rights to collectibles like digital
            art, and sit at the cutting edge of speculation within the crypto ecosystem.<br></br><br></br>
            Lastly, we’ll look at how you can earn by participating directly in cryptocurrency functioning as a miner or staker, 
            depending on the consensus mechanism used.
          </p></div>}
      </Grid>
    </Box>
  </div>
);};


About.propTypes = {};

About.defaultProps = {};

export default About;

// export default function ResponsiveGrid() {
//   return (
//     <
//   );
// }