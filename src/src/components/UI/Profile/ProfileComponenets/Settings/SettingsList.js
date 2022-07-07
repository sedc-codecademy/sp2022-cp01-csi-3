import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import './Settings.css';

function SettingsList () {
  return(
      <div className="SettingsList">
        <ul className="row">
          <li>
        <FormControl id="userName">
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />            
          </FormControl>
          </li>
          <li>
          <FormControl id="password">
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />            
          </FormControl>
          </li>
          <li>
          <FormControl id="email">
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />            
          </FormControl>
          </li>   
          </ul> 
        
      </div>
);
}

SettingsList.propTypes = {};

SettingsList.defaultProps = {};

export default SettingsList;
