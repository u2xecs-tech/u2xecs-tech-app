import React, { useState, useEffect } from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {AppBar, Box, IconButton, Toolbar, Typography} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import Auth from '@aws-amplify/auth';

const DashboardNavbar = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        await Auth.currentAuthenticatedUser().then((user) => {
            setUser(user.username);
        });
    }

    const signOut = (e) => {
        e.preventDefault();
        Auth.signOut();
        window.location.reload();
    }

    return (
        <AppBar elevation={0}>
            <Toolbar>
                <RouterLink to="/">
                    <Typography color="white" variant="h2">
                        U2XECS
                    </Typography>
                </RouterLink>
                <Box sx={{flexGrow: 1}}/>
                <Typography sx={{pr: 2}}>
                    Signed in as { user }
                </Typography>
                <IconButton color="inherit" onClick={signOut}>
                    <InputIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default DashboardNavbar;
