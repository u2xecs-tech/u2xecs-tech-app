import {Avatar, Button, Card, CardActions, CardContent, Grid, Tooltip, Typography} from '@material-ui/core';
import {indigo} from "@material-ui/core/colors";
import LinkIcon from "@material-ui/icons/Link";
import {useState} from "react";

const copyToClipboard = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

const EvaluationLink = (props) => {
    const url = "https://u2xecs.tech/questionnaire/" + props.link

    const [didCopy, setDidCopy] = useState(false)

    const onCopy = () => {
        copyToClipboard(url)
        setDidCopy(true)
        setTimeout(() => setDidCopy(false), 3000)
    }

    return (
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
                            {url.slice(0, 25)}...
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
                <Tooltip title={url}>
                    <Button size="small" color="primary" onClick={onCopy}>
                        {didCopy ? "Link copied!" : "Copy link"}
                    </Button>
                </Tooltip>
            </CardActions>
        </Card>
    );
}

export default EvaluationLink;
