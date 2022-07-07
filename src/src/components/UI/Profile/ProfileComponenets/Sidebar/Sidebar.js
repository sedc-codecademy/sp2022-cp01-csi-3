import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';
import {SidebarLink} from "./SidebarLink";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Sidebar(){
  return(
    <div className="sidebar"> 
    <ul className="SidebarList">         
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
