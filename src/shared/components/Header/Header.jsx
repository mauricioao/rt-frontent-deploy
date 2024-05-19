import * as React from 'react';
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import useStore from '../../../store/store';
import { useNavigate } from 'react-router-dom';
import { logout as authLogout } from '../../../modules/Authentication/services/auth-service';

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const {updateToken, setHeaders, setUsers, setErrors} = useStore()
    const navigate = useNavigate();

    const logout = async() => {
        const result = await authLogout();
        if(!result.ok) return
        updateToken("")
        setHeaders([])
        setUsers([])
        setErrors([])
        navigate("/login")
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Data loading system
                </Typography>
                {/* {auth && ( */}
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        sx={{ display: { xs: 'flex', sm: 'none' } }}
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        
                    >
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                    <Button color="inherit" sx={{ display: { xs: 'none', sm: 'flex' } }} onClick={logout}>Logout</Button>
                </div>
                {/* )} */}
            </Toolbar>
        </AppBar>
    )
}
export default Header