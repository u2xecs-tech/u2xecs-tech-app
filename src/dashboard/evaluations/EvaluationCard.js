import {Box, Card, CardActionArea, CardContent, Chip, Typography} from '@material-ui/core';
import {green, red, yellow} from "@material-ui/core/colors";

function statusVisual(status) {
    switch (status) {
        case 0:
            return {label: "Ongoing", color: green[500]}
        case 1:
            return {label: "Closed", color: red[500]}
        case 2:
            return {label: "Archived", color: yellow[900]}
        default:
            // error
            return {label: "Archived", color: yellow[900]}
    }
}

const EvaluationCard = (props) => (
    <Card {...props}>
        <CardActionArea sx={{height: '100%', flexDirection: 'column', alignItems: 'flex-start'}}>
            <CardContent container>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        pb: 1,
                    }}
                >
                    <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h3"
                        sx={{
                            maxWidth: '9em',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                        }}
                    >
                        {props.name}
                    </Typography>
                    <Chip
                        size="small"
                        label={statusVisual(props.status).label}
                        style={{
                            color: 'white',
                            backgroundColor: statusVisual(props.status).color
                        }}
                    />
                </Box>
                <Typography
                    color="textPrimary"
                    variant="body2"
                    sx={{
                        wordBreak: 'break-word',
                        maxHeight: '4.2em',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'pre-wrap'
                    }}
                >
                    {/*{props.description}*/}
                    {props.description.slice(0, 120) + (props.description.length > 120 ? '...' : " ".repeat(120 - props.description.length))}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);

export default EvaluationCard;
