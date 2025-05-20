import React, { useState } from 'react'
import '../Style/header.css'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';

import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from '../assets/image.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { getCart } from '../Service/CartService';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({

    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const CustomSearchIcon = styled(SearchIcon)(({ theme }) => ({
    color: 'grey',
}));


const Header = ({ cartn }) => {





    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear('token');
        navigate('/login');
    }
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            style={{ marginLeft: "5vw", marginTop: "1.5vw" }}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );



    return (
        <>
            <div className="" >
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" style={{ backgroundColor: "rgba(77, 215, 222, 0.83);" }}>
                        <Toolbar className='header' >

                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            ><Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
                                    <span>

                                        <img src={logo} alt="" srcset="" height={"27px"} style={{ marginTop: "15px", marginRight: "10px" }} />

                                    </span>
                                    ONLINE SHOOOPING
                                </Link>
                            </Typography>
                            <Search >
                                <SearchIconWrapper >
                                    <CustomSearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    style={{ width: "30vw", backgroundColor: "white", color: "grey" }}
                                />
                            </Search>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                    style={{ display: "flex", flexDirection: "column", marginRight: "20px" }}

                                >
                                    <AccountCircle />
                                    <span style={{ fontSize: "15px", marginTop: "10px" }}>Profile</span>
                                </IconButton>

                                <NavLink to={'/wishlist'} style={{ textDecoration: "none", color: "white" }}>
                                    <IconButton size="large" aria-label="show 4 new mails" color="inherit" style={{ display: "flex", flexDirection: "column" }}>
                                        <Badge badgeContent={cartn} color="error">
                                            <ShoppingBagIcon />
                                        </Badge>

                                        <span style={{ fontSize: "15px", marginTop: "10px" }}>Wishlist</span>

                                    </IconButton>
                                </NavLink>


                                <NavLink to={'/cart'} style={{ textDecoration: "none", color: "white" }}>
                                    <IconButton size="large" aria-label="show 4 new mails" color="inherit" style={{ display: "flex", flexDirection: "column" }}>
                                        <Badge badgeContent={cartn} color="error">
                                            <ShoppingCartIcon />
                                        </Badge>

                                        <span style={{ fontSize: "15px", marginTop: "10px" }}>Cart</span>

                                    </IconButton>
                                </NavLink>

                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                    {renderMenu}
                </Box>
            </div>
        </>
    )
}

export default Header;
