import {Avatar, Button, Card, CardActions, CardContent, Grid, Typography} from '@material-ui/core';
import {indigo} from "@material-ui/core/colors";
import LinkIcon from "@material-ui/icons/Link";

const copyToClipboard = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

const EvaluationLink = (props) => (
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
                        LINK FOR RESPONDENTS
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="body2"
                    >
                        ${process.env.PUBLIC_URL + "/questionnaire/" + props.link}
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
                        <LinkIcon/>
                    </Avatar>
                </Grid>
            </Grid>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary" onClick={() => copyToClipboard(props.link)}>
                Copy link
            </Button>
        </CardActions>
    </Card>
);

export default EvaluationLink;
