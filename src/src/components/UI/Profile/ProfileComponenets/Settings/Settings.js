import React from 'react';
import './Settings.css';
import Sidebar from '../Sidebar/Sidebar';
import SettingsList from './SettingsList'
import TextField from '@mui/material/TextField';

const Settings = () => (
  <div className="Settings"> 
    <Sidebar/>
    <SettingsList/>
  </div>
);

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
