import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';
import {SidebarLink} from "./SidebarLink";
import { Link } from "react-router-dom";
import { Avatar, Button, TextField } from "@material-ui/core";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Sidebar(){
  return(
    <div className="sidebar"> 
    <ul className="SidebarList">  
      <div className="avatarAndEmailInfo">         
          <Avatar id="profileAvatar"></Avatar>
          <span id='credentials'>Name Lastname</span>
          <p id='userEmail'>cryptosimulator@email.com</p>
      </div>         
        {SidebarLink.map((val, key)=>{
          return (
            <li key={key} 
            className="row"
            id={window.location.pathname === val.link ? "active" : ""}
            onClick={()=>{window.location.pathname = val.link}}>               
                      <div id="icon">{val.icon}</div> {" "}
                        <div id="title">
                          {val.title}
                      </div>
            </li>              
        ); 
        })}     
      </ul>  
    </div>
  );
}

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
