import React from 'react';
import PropTypes from 'prop-types';
import './SignUp.css';
import {Paper,Grid,Avatar,TextField, Button, Typography} from '@material-ui/core';
import AccessibilityNewSharpIcon from '@mui/icons-material/AccessibilityNewSharp';
const SignUp = () => {
  
  const logInStyle={padding:20,height:"55vh",width:280,margin:"20px auto"}
  const iconStyle={backgroundColor:'#3f51b5'} 
  const loginButton={backgroundColor:'#3f51b5',color:'#ffffff',margin:"10px auto"}
  
  return(
  <div className="SignUp">
    <Grid>
      <Paper elevation={10} style={logInStyle}>
      <Grid align='center'>
        <Avatar style={iconStyle}>
          <AccessibilityNewSharpIcon/>
        </Avatar>
      </Grid>
        <h2>Sign Up</h2>
        <TextField label="Username" fullWidth required ></TextField>
        <TextField label="Password" fullWidth required type="password"></TextField>
        <TextField label="Confirm password" fullWidth required type="password"></TextField>
        <Button type="submit" style={loginButton} fullWidth href="/profile">Join now</Button> 
        <Typography >
            
            <p>Already registered? <Button id="buttonLoginInRegister" href='/log-in'>Log in</Button> </p>             
          </Typography>       
      </Paper>
    </Grid>
  </div>
  );
};

SignUp.propTypes = {};

SignUp.defaultProps = {};

export default SignUp;
