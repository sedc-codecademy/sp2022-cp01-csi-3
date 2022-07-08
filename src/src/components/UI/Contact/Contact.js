import React from 'react';
import PropTypes from 'prop-types';
import {Paper,Grid,Avatar,TextField, Button, Typography, Card, CardContent} from '@material-ui/core';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import './Contact.css';

const Contact = () => {
  
  const logInStyle={padding:20,width:280,margin:"20px auto"}
  const iconStyle={backgroundColor:'#3f51b5'} 
  const loginButton={backgroundColor:'#3f51b5',color:'#ffffff',margin:"10px auto"}
  return(
  <div className="Contact">
    <Grid align='center' >
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
          <Avatar style={iconStyle} >
          <MailOutlineOutlinedIcon/>
          </Avatar>
            <Typography gutterBottom variant="h5">
              <h2 className='contactUs'>Contact Us</h2>
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" fullWidth required/>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" style={loginButton} fullWidth>Submit</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
  </div>
  );
};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact; 
