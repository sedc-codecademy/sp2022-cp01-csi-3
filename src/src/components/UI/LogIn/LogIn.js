import React from 'react';
import PropTypes from 'prop-types';
import './LogIn.css';
import {Paper,Grid,Avatar,TextField, Button, Typography} from '@material-ui/core';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';


const LogIn = () => {
  
  const logInStyle={padding:20,height:"60vh",width:280,margin:"20px auto"}
  const iconStyle={backgroundColor:'#3f51b5'} 
  const loginButton={backgroundColor:'#3f51b5',color:'#ffffff',margin:"10px auto"}
  return(
  <div className="LogIn">
    <Grid>
      <Paper elevation={10} style={logInStyle}>
      <Grid align='center'>
        <Avatar style={iconStyle}>
          <LockOpenOutlinedIcon/>
        </Avatar>
      </Grid>
        <h2>Login</h2>
        <TextField label="Username" fullWidth required></TextField>
        <TextField label="Password" fullWidth required type="password"></TextField>
        <Button type="submit" style={loginButton} href="/profile" fullWidth>Log In</Button>
        <Typography>           
                        Don't have an account? <br /> Join now it's free!          
          <Button type="submit" style={loginButton} fullWidth href="/sign-up">Register</Button>
        </Typography>
      </Paper>
    </Grid>
  </div>
  );
};

LogIn.propTypes = {};

LogIn.defaultProps = {};

export default LogIn;
