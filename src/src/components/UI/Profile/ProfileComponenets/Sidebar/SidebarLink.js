import React from "react"; 
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';


export const SidebarLink = [  
  // {
  //   title:"Notifications",
  //   icon: <NotificationsActiveIcon/>,
  //   link: "/profile/statistics"
  // },
  {
    title:"Profile",
    icon: <AccountBoxIcon/>,
    link: "/profile"
  },

  {
    title:"Wallet",
    icon: <AccountBalanceWalletIcon/>,
    link: "/profile/wallet"
  },

  {
    title:"Statistics",
    icon: <InsertChartIcon/>,
    link: "/profile/statistics"
  },

  {
    title:"Settings",
    icon: <SettingsApplicationsIcon/>,
    link: "/profile/settings"
  }
]
