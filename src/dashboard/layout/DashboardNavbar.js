import React, { useState, useEffect } from 'react';
import {Link, Link as RouterLink} from 'react-router-dom';
import {AppBar, Box, Icon, IconButton, Toolbar, Typography} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import Auth from '@aws-amplify/auth';
import {Settings} from "react-feather";

const DashboardNavbar = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        await Auth.currentAuthenticatedUser().then((user) => {
            console.log(user);
            setUser(user.attributes.name);
        });
    }

    const signOut = (e) => {
        e.preventDefault();
        Auth.signOut().then((data) => {
            console.log(data)
            window.location.reload();
        }).catch((error) => {
            console.log(error)
        });
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
                <Link to={`/account`}>
                    <IconButton color="inherit">
                        <Settings color="white"/>
                    </IconButton>
                </Link>
                <IconButton color="inherit" onClick={signOut}>
                    <InputIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default DashboardNavbar;
