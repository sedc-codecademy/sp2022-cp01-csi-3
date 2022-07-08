import React from 'react';
import { Grid, Box, Link, Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Footer.css';

export default function Footer() {
  return <footer style={{
	  position: document.body.scrollHeight > document.body.clientHeight ? console.log("does have") : console.log("dosenthave"),
	  left: 0,
	  bottom: 0,
	  right: 0,
  }}>
    <Box className='Footer' px={{xs:3, sm:8}} 
    py={{xs:5,sm:8}}>
      <Container maxWidth="lg">
      <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box className="Box"><p className='heading'>Help</p></Box>
              <Box>
                <Link href="/contact" color="inherit" className='Link'>
                <p className='text'>⮞&nbsp;&nbsp;Contact</p>
                </Link>
              </Box>
              <Box>
                <Link href="/privacy" color="inherit" className='Link'>
                <p className='text'>⮞&nbsp;&nbsp;Privacy</p>
                </Link>
              </Box>
              <Box>
                <Link href="/terms-of-service" color="inherit" className='Link'>
                <p className='text'>⮞&nbsp;&nbsp;Terms of Service</p>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box  className="Box"><p className='heading'>Account</p></Box>

              <Box>
                <Link href="/log-in" color="inherit" className='Link'>
                <p className='text'>⮞&nbsp;&nbsp;Login</p>
                </Link>
              </Box>
              <Box>
                <Link href="/sign-up" color="inherit" className='Link'>
                <p className='text'>⮞&nbsp;&nbsp;Register</p>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="Box"><p className='heading'>Social</p></Box>
              <Box className='socialIcons'>
              <InstagramIcon/>
                <Link href="/" color="inherit" className='Link'>
                    Instagram
                </Link>
              </Box>
              <Box className='socialIcons'>
                <FacebookIcon/>
                <Link href="/" color="inherit" className='Link'>
                  Facebook
                </Link>
              </Box>
              <Box className='socialIcons'>
                <WhatsAppIcon/>
                <Link href="/" color="inherit" className='Link'>
                  Whatsapp
                </Link>
              </Box>
            </Grid>
          </Grid>
        <Box className='copyright'>
        Copyright &reg; {new Date().getFullYear()}. All rights reserved.
        </Box>
      </Container>
    </Box>
  </footer>
}