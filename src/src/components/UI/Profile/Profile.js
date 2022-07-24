import React from "react";
import Box from '@mui/material/Box';
import "./Profile.css";
import Sidebar from "./ProfileComponenets/Sidebar/Sidebar";
import { Avatar,Button,TextField } from "@material-ui/core";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogIn from '../LogIn/LogIn'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { indigo } from "@mui/material/colors";

function Profile(){
  const withdrawButton = { margin:"0px 5px 0px 0px",background:"rgba(253,106,124,255)",color:"white" 
  }
  return( 
  <div className="Profile">
    <Sidebar />
    <div className="profileInfos">
      
      {/* <div className="floatingBar">
       <h2 id="welcomeMessage"> Welcome Name !</h2>
        <div className="avatarAndEmailInfo">         
          <Avatar id="profileAvatar"><AccountCircleOutlinedIcon/></Avatar>
          <p id="mailStyle">cryptosimulator@email.com</p>
        </div>        
      </div> */}
      <div className="profileContent">
          <div className="leftSide">
            <div className="credentialsInput">
              <h2>Account Settings</h2>
              <hr></hr>
              <h3>Personal Information</h3>
              <Box className='ProfileBox' component="form" noValidate autoComplete="off" sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}>
              <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{
          color: indigo[500]}} />
              <TextField id="outlined-basic" label="Last Name" variant="outlined" />
              </Box>
              <Box className='ProfileBox' component="form" noValidate autoComplete="off" sx={{
                  '& > :not(style)': { m: 1, width: '52ch' },
                }}>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
              </Box>
              <hr></hr>
                <h2>Notifications</h2>
                {/* <hr></hr>
                <h3>Choose the type of notifications you want to recieve</h3> */}
                <FormGroup className="checkboxForm">
                  <FormControlLabel control={<Checkbox defaultChecked sx={{
          color: indigo[500], '&.Mui-checked': {
          color: indigo[500],
          },}} />} label="Withdraw Activity" />
                  <FormControlLabel control={<Checkbox defaultChecked sx={{
          color: indigo[500], '&.Mui-checked': {
          color: indigo[500],
          },}} />} label="Weekly Report" />
                  <FormControlLabel control={<Checkbox defaultChecked sx={{
          color: indigo[500], '&.Mui-checked': {
          color: indigo[500],
          },}} />} label="Payment Success" />
                </FormGroup>
              <hr></hr>
              <Button variant="contained" id='DiscardChangesButton'>
                Discard Changes
              </Button><Button variant="contained" id='SaveChangesButton'>
                Save Changes
              </Button>
            </div>
            <span id="verticalLine"></span>
            
            {/* <div className="buttonsAndBalance">
              <h4 id="balanceDetails">Balance details:</h4>
              <div id="buttons">
              <Button variant="contained" style={withdrawButton}><ArrowCircleUpIcon/>Withdraw</Button>
              <Button variant="contained"><ArrowCircleDownIcon/>Deposit</Button>
              </div>              
            </div> */}
          </div>
        </div>
    </div>
  </div>
  );
  }

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
