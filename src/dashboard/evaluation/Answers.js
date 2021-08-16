import {Avatar, Card, CardContent, Grid, Typography} from '@material-ui/core';
import {indigo} from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const Answers = (props) => (
    <Card
        sx={{height: '100%'}}
        {...props}
    >
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
                        ANSWERS
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="h2"
                    >
                        {props.number}
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
                        <InsertChartIcon/>
                    </Avatar>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

export default Answers;
