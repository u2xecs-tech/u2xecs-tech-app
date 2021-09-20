import {Box, Button, Tooltip, Typography} from '@material-ui/core';
import React, {useState} from "react";
import AlertDialog from "../util/AlertDialog";
import {useNavigate} from "react-router-dom";
import Report from "./Report";
import {updateEvaluation, deleteEvaluation} from "../../graphql/mutations";
import {API} from "aws-amplify";


const Toolbar = (props) => {
    const navigate = useNavigate();
    const evaluation = props.evaluation
    const [status, setStatus] = useState(0)
    if (status != evaluation.status) {
        setStatus(evaluation.status)
    }

    // 0:open <-> 1:closed <-> 2:archived

    const onClose = () => {
        let msg = ''
        let statusToBeSaved = 0
        switch (status) {
            case 0: setStatus(1); statusToBeSaved = 1; msg = 'Evaluation closed.'; break;
            case 1: case 2: setStatus(0); msg = 'Evaluation opened.'; break;
            default: break;
        }
        API.graphql({ query: updateEvaluation, variables: { input: { id: evaluation.id, status : statusToBeSaved, _version: evaluation._version }}}).then((data) => {
            console.log(data)
            alert(msg)
        }).catch((error) => {
            console.log(error)
            alert(error)
        })
    }

    const onArchive = () => {
        let msg = ''
        let statusToBeSaved = 1
        switch (status) {
            case 0: case 1: setStatus(2); statusToBeSaved = 2; msg = 'Evaluation archived'; break;
            case 2: setStatus(1); msg = 'Evaluation unarchived'; break;
            default: break;
        }
        API.graphql({ query: updateEvaluation, variables: { input: { id: evaluation.id, status : statusToBeSaved, _version: evaluation._version }}}).then(() => {
            alert(msg)
        }).catch((error) => {
            alert(error)
        })
    }

    const onDelete = () => {
        console.log("onDelete")
        API.graphql({ query: deleteEvaluation, variables: { input: { id: evaluation.id, _version: evaluation._version }}}).then(() => {
            alert('Evaluation successfully deleted.')
            navigate('/')
        }).catch((error) => {
            alert(error)
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
                    {status === 1 ?
                        <Button sx={{mx: 1}} onClick={onClose}>{'Open'}</Button>
                        :
                        <AlertDialog sx={{mx: 1}} button={status === 0 ? 'Close' : 'Open'}
                                     title={`Do you wish to ${status === 0 ? 'close' : 'open'} further answering for this evaluation?`}
                                     description={status === 0 ? 'You can reopen it later.' : 'This action will unarchive the evaluation.'}
                                     onYes={onClose}/>
                    }
                    {status !== 0 ?
                        <Button sx={{mx: 1}} onClick={onArchive}>{status === 2 ? 'Unarchive' : 'Archive'}</Button>
                        :
                        <AlertDialog sx={{mx: 1}} button={'Archive'}
                                     title={'Do you wish to archive this evaluation?'}
                                     description={'This action will automatically close further answering. You can unarchive and reopen it later.'}
                                     onYes={onArchive}/>
                    }
                    {typeof evaluation.answers.isEmpty !== 'undefined' ?
                        <Tooltip title={'Only evaluations with no respondents can be deleted. You may archive it instead.'}>
                            <span>
                                <Button sx={{mx: 1, color: props.color}} disabled>
                                    Delete
                                </Button>
                            </span>
                        </Tooltip>
                        :
                        <AlertDialog sx={{mx: 1}} button={'Delete'} color={'red'}
                                     title={'Are you sure you want to delete this evaluation?'}
                                     description={'All information will be lost forever.'}
                                     onYes={onDelete}/>
                    }
                </Box>
            </Box>
        </Box>
    );
}

export default Toolbar;
