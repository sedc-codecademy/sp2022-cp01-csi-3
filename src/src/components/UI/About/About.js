import * as React from 'react';
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

// const ListComponent = () => { 
//   return ( 
//     <div> 
//       <h1>TEST</h1> 
//     </div> 
//   ); 
// }; 

const About = () => (
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
              <Button variant="contained">
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
              <Button variant="contained">
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
              <Button variant="contained">
                  Learn More →
              </Button>
            </Item>
          </Grid>
      </Grid>
    </Box>
  </div>
);


About.propTypes = {};

About.defaultProps = {};

export default About;

// export default function ResponsiveGrid() {
//   return (
//     <
//   );
// }