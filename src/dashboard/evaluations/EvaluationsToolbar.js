import {Box, MenuItem, Select, Typography} from '@material-ui/core';
import CreateEvaluation from "./CreateEvaluation";

const EvaluationsToolbar = (props) => (
    <Box {...props}>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h2" paddingRight='20px'>
                    My Evaluations
                </Typography>
                <Select value={props.filter} variant='standard' onChange={props.selectChange}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>Ongoing</MenuItem>
                    <MenuItem value={2}>Closed</MenuItem>
                    <MenuItem value={3}>Archived</MenuItem>
                </Select>
            </Box>
            <Box>
                <CreateEvaluation addEval={props.addEval}/>
            </Box>
        </Box>
    </Box>
);

export default EvaluationsToolbar;
