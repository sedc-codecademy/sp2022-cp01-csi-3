import React from 'react';
import { Grid, Box, Link, Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Footer.css';

export default function Footer() {
  return <footer>
    <Box className='Footer' px={{xs:3, sm:8}} 
    py={{xs:5,sm:8}}>
      <Container maxWidth="lg">
      <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box className="Box"><p>Help</p></Box>
              <Box>
                <Link href="/" color="inherit" className='Link'>
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" className='Link'>
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" className='Link'>
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box  className="Box"><p>Account</p></Box>
              <Box>
                <Link href="/log-in" color="inherit" className='Link'>
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/sign-up" color="inherit" className='Link'>
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="Box"><p>Social</p></Box>
              <Box>
              <InstagramIcon/>
                <Link href="/" color="inherit" className='Link'>
                    Instagram
                </Link>
              </Box>
              <Box>
                <FacebookIcon></FacebookIcon>
                <Link href="/" color="inherit" className='Link'>
                  Facebook
                </Link>
              </Box>
              <Box>
                <WhatsAppIcon/>
                <Link href="/" color="inherit" className='Link'>
                  Whatsapp
                </Link>
              </Box>
            </Grid>
          </Grid>
        <Box textAlign="center">
          Copyright &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  </footer>
}