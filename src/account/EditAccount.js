import {useEffect, useState} from "react";
import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    CardHeader,
    TextField,
    Divider,
    Button
} from '@material-ui/core';
import {Auth} from "aws-amplify";
import LoadingOverlay from "react-loading-overlay";

const Account = (props) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        user: null
    });
    const [isLoading, setIsLoading] = useState(true);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        let user = await Auth.currentAuthenticatedUser();
        setValues({
            name: user.attributes.name,
            email: user.attributes.email,
            user: user
        });
        setIsLoading(false);
    }

    const onSubmit = (event) => {
        setIsLoading(true);
        Auth.updateUserAttributes(values.user, {
            name: values.name,
            email: values.email
        }).then((data) => {
            setIsLoading(false);
            alert("User updated succesfully!")
        }).catch((error) => {
            setIsLoading(false);
            alert("Error: " + error.message)
        })
    }

    return (
        <>
            <LoadingOverlay active={isLoading} spinner styles={{
                wrapper: {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                spinner: (base) => ({
                    ...base,
                    height: "100%"
                })
            }}>
                <Box
                    sx={{
                        backgroundColor: 'background.default',
                        minHeight: '100%',
                        py: 3
                    }}
                >
                    <Container maxWidth="lg">
                        <form
                            autoComplete="off"
                            noValidate
                            {...props}
                        >
                            <Card>
                                <CardHeader
                                    subheader="The information can be edited"
                                    title="Profile"
                                />
                                <Divider/>
                                <CardContent>
                                    <Grid
                                        container
                                        spacing={3}
                                    >
                                        <Grid
                                            item
                                            md={12}
                                            xs={12}
                                        >
                                            <TextField
                                                fullWidth
                                                helperText="Please specify the name"
                                                label="Name"
                                                name="name"
                                                onChange={handleChange}
                                                required
                                                value={values.name}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            md={12}
                                            xs={12}
                                        >
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                name="email"
                                                onChange={handleChange}
                                                required
                                                value={values.email}
                                                variant="outlined"
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <Divider/>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        p: 2
                                    }}
                                >
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        onClick={onSubmit}
                                    >
                                        Save details
                                    </Button>
                                </Box>
                            </Card>
                        </form>
                    </Container>
                </Box>
            </LoadingOverlay>
        </>
    );
}

export default Account;