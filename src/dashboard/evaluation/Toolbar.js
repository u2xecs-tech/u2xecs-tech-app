import {Box, Button, Typography} from '@material-ui/core';
import {useState} from "react";
import AlertDialog from "../util/AlertDialog";
import {useNavigate} from "react-router-dom";
import {removeEval} from "../__mocks__/evals";
import Report from "./Report";
import {updateEvaluation, deleteEvaluation} from "../../graphql/mutations";
import {API} from "aws-amplify";


const Toolbar = (props) => {
    const navigate = useNavigate();
    const evaluation = props.evaluation
    const [status, setStatus] = useState(evaluation.status)

    const onClose = () => {
        switch (status) {
            case 0: setStatus(1); break;
            case 1: setStatus(0); break;
            case 2: alert('You need to UNARCHIVE this evaluation before reopening it.'); break;
            default: break;
        }
        API.graphql({ query: updateEvaluation, variables: { id: evaluation.id, input: { status :status} }}).then(() => {
            alert('Evaluation closed. You can reopen it later.')
        })
    }

    const onArchive = () => {
        switch (status) {
            case 0: alert('You need to CLOSE this evaluation before archiving it.'); break;
            case 1: setStatus(2); break;
            case 2: setStatus(1); break;
            default: break;
        }
        API.graphql({ query: updateEvaluation, variables: { id: evaluation.id, input: { status :status} }}).then(() => {
            alert('Evaluation archived. You can unarchive it later.')
        })
    }

    const onDelete = () => {
        API.graphql({ query: deleteEvaluation, variables: { id: evaluation.id }}).then(() => {
            alert('Evaluation successfully deleted.')
            navigate('/')
        })
    }

    return (
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
                        flexDirection: 'column',
                        alignItems: 'start'
                    }}
                >
                    <Typography align="start" variant="h6" color="textSecondary">
                        EVALUATION
                    </Typography>
                    <Typography align="start" variant="h1">
                        {evaluation.name}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'start'
                    }}
                >
                    <Report evaluation={evaluation}/>
                    {status !== 2 &&
                    <Button sx={{mx: 1}} onClick={onClose}>{status === 0 ? 'Close' : 'Open'}</Button>
                    }
                    {status !== 0 &&
                    <Button sx={{mx: 1}} onClick={onArchive}>{status === 2 ? 'Unarchive' : 'Archive'}</Button>
                    }
                    {status === 2 &&
                    <AlertDialog sx={{mx: 1}} button={'Delete'}
                                 title={'Are you sure you want to delete this evaluation?'}
                                 description={'All information related to this evaluation will be lost forever.'}
                                 onYes={onDelete}/>
                    }
                </Box>
            </Box>
        </Box>
    );
}

export default Toolbar;
