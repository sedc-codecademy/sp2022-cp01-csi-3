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

const ListComponent = () => { 
  return ( 
    <div> 
      <h1>TEST</h1> 
    </div> 
  ); 
}; 

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} className="Container">
      <Grid className="Grid" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid  className="Box" item xs={2} sm={4} md={4}>
            <Item className='Item'><img className="Image" src='https://cdn-icons-png.flaticon.com/512/5341/5341448.png'></img>
              <h1>How to use crypto</h1>
              <ul>
                <li className="ListItem">Secure your crypto</li>
                <li className="ListItem">Make transactions</li>
                <li className="ListItem">Advanced crypto use-cases</li>
              </ul>
              <Button variant="contained" onClick={ListComponent}>
                  Learn More →
              </Button>
            </Item>
          </Grid>
          <Grid className="Box" item xs={2} sm={4} md={4}>
            <Item><img className="Image" src='https://cdn-icons-png.flaticon.com/512/4285/4285667.png'></img>
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
            <Item><img className="Image" src='https://cdn-icons-png.flaticon.com/512/2685/2685027.png'></img>
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
  );
}

// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from "@material-ui/core/Button";
// import Grid from '@mui/material/Grid';
// import './About.css';

// const About = () => (
//   <div className="About">
    
//   </div>
// );


// About.propTypes = {};

// About.defaultProps = {};

// export default About;
