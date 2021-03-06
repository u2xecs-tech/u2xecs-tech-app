import {Avatar, Card, CardContent, Grid, Typography} from '@material-ui/core';
import {indigo} from "@material-ui/core/colors";
import CalendarIcon from '@material-ui/icons/Today';
import moment from "moment";

const LastModification = (props) => (
    <Card {...props}>
        <CardContent>
            <Grid
                container
                spacing={3}
                sx={{justifyContent: 'space-between'}}
            >
                <Grid item>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="h6"
                    >
                        {/*LAST MODIFICATION*/}
                        CREATION DATE
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="body2"
                    >
                        {moment(Date(props.date)).format('DD/MM/YYYY')}
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            backgroundColor: indigo[400],
                            height: 56,
                            width: 56
                        }}
                    >
                        <CalendarIcon/>
                    </Avatar>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

export default LastModification;
