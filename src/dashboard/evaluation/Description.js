import {Card, CardContent, Grid, Typography} from '@material-ui/core';

const Description = (props) => (
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
                        ADMIN DESCRIPTION
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="body2"
                        sx={{
                            wordBreak: 'break-word',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                        }}
                    >
                        {props.description}
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

export default Description;
