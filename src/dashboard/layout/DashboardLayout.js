import {Outlet} from 'react-router-dom';
import {experimentalStyled} from '@material-ui/core';
import DashboardNavbar from './DashboardNavbar';
import {AmplifyAuthenticator, AmplifySignUp} from '@aws-amplify/ui-react';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import React from "react";

const DashboardLayoutRoot = experimentalStyled('div')(
    ({theme}) => ({
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    })
);

const DashboardLayoutWrapper = experimentalStyled('div')(
    ({theme}) => ({
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64,
    })
);

const DashboardLayoutContainer = experimentalStyled('div')({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
});

const DashboardLayoutContent = experimentalStyled('div')({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
});

const DashboardLayout = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        })
    })

    return authState === AuthState.SignedIn && user ? (
        <DashboardLayoutRoot>
            <DashboardNavbar/>
            <DashboardLayoutWrapper>
                <DashboardLayoutContainer>
                    <DashboardLayoutContent>
                        <Outlet/>
                    </DashboardLayoutContent>
                </DashboardLayoutContainer>
            </DashboardLayoutWrapper>
        </DashboardLayoutRoot>
    ) : (
        <AmplifyAuthenticator usernameAlias="email">
            <AmplifySignUp
                slot="sign-up"
                formFields={[
                    { type: "username" },
                    { label: "Name *", type: "name", required: true, placeholder: "Enter your name" },
                    { type: "email" },
                    { type: "password" }
                ]}
            />
        </AmplifyAuthenticator>
    );
};

export default DashboardLayout;
