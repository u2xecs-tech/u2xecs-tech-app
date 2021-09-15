import {Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppBar, Box, Toolbar, Typography} from '@material-ui/core';

const DashboardNavbar = ({onMobileNavOpen, ...rest}) => {
    return (
        <AppBar elevation={0} {...rest}>
            <Toolbar>
                <RouterLink to="/">
                    <Typography color="white" variant="h2">
                        U2XECS
                    </Typography>
                </RouterLink>
                <Box sx={{flexGrow: 1}}/>
            </Toolbar>
        </AppBar>
    );
};

DashboardNavbar.propTypes = {
    onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
