import {AppBar, Box, Toolbar, Typography} from '@material-ui/core';
import React from "react";

const DashboardNavbar = () => {
    return (
        <AppBar elevation={0}>
            <Toolbar>
                <Typography color="white" variant="h2">
                    U2XECS
                </Typography>
                <Box sx={{flexGrow: 1}}/>
                <Typography sx={{pr: 2}}>
                    Evaluation Name by Evaluation Owner
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default DashboardNavbar;
