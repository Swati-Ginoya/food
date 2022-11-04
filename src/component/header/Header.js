import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MopedIcon from '@mui/icons-material/Moped';
import Alert from '../alert/Alert';

function Header(props) {
    const drawerWidth = 200;

    const itemList = [
        {label:'Order Now' ,to:'/Order' ,icon:<MopedIcon/>} ,
    ]

    return (
        <div>
            {/* <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
                >
                </AppBar>
                
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="right"
                >
                    <Toolbar />
                    <Divider />
                    <List>
                        {itemList.map((text, index) => (
                            <ListItem key={text} to={text.to} component={NavLink} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Box> */}
            <header>
                {/* Header desktop */}
                <div className="wrap-menu-header gradient1 trans-0-4">
                    <div className="container h-full">
                        <div className="wrap_header trans-0-3">
                            {/* Logo */}
                            <div className="logo">
                                <NavLink className="nav-link scrollto " to="/">
                                    <img src="images/icons/logo.png" alt="IMG-LOGO" data-logofixed="images/icons/logo2.png" />
                                </NavLink>
                            </div>
                            {/* Menu */}
                            <div className="wrap_menu p-l-45 p-l-0-xl">
                                <nav className="menu">
                                    <ul className="main_menu">
                                        <li>
                                            <NavLink className="nav-link scrollto " to="/">Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link scrollto " to="/Menu">Menu</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link scrollto " to="/Reservation">Reservation</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link scrollto " to="/Gallery">Gallery</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link scrollto " to="/About">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link scrollto " to="/Blog">Blog</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link scrollto " to="/Contact">Contact</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link scrollto " to="/Login">Login</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <Alert />
                            {/* Social */}
                            <div className="social flex-w flex-l-m p-r-20">
                                <a href="#"><i className="fa fa-facebook m-l-21" aria-hidden="true" /></a>
                                <a href="#"><i className="fa fa-twitter m-l-21" aria-hidden="true" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    );
}

export default Header;