import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import "./Profile.css";
import Sidebar from "./ProfileComponenets/Sidebar/Sidebar";
import { Avatar,Button,TextField } from "@material-ui/core";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogIn from '../LogIn/LogIn'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function Profile(){
  const withdrawButton = { margin:"0px 5px 0px 0px",background:"rgba(253,106,124,255)",color:"white" 
  }
  return(
  <div className="Profile">
    <Sidebar />
    <div className="profileInfos">
      <div className="floatingBar">
       <h2 id="welcomeMessage"> Welcome {} </h2>
        <div className="avatarAndEmailInfo">         
          <Avatar id="profileAvatar"><AccountCircleOutlinedIcon/></Avatar>
          <p id="mailStyle">cryptosimulator@email.com</p>
        </div>        
      </div>
      <div className="profileContent">
          <div className="leftSide">
            <div className="buttonsAndBalance">
              <h4 id="balanceDetails">Balance details:</h4>
              <div id="buttons">
              <Button variant="contained" style={withdrawButton}><ArrowCircleUpIcon/>Withdraw</Button>
              <Button variant="contained"><ArrowCircleDownIcon/>Deposit</Button>
              </div>              
            </div>
          </div>

        </div>
    </div>
  </div>
  );
  }

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
