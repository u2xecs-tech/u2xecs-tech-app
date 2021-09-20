import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import moment from "moment";
import {Box, Chip, Typography} from "@material-ui/core";
import {quiz} from "../../quiz";
import AlertNoActionDialog from "../util/AlertNoActionDialog";

export default function RespondentAnswers(props) {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sectionNames = Object.keys(quiz)

    const getQuestion = (s, q) => {
        return quiz[sectionNames[s]][q]
    }

    const getAnswerChip = (a) => {
        const chips = [
            {color: '#00BF07', text: 'I totally agree'},
            {color: '#ABCF08', text: 'I partially agree'},
            {color: '#FFCD03', text: 'I neither agree nor disagree'},
            {color: '#FF8800', text: 'I partially disagree'},
            {color: '#FF380F', text: 'I totally disagree'},
        ]
        const chip = chips[a]

        return (
            <Chip label={chip.text} style={{backgroundColor: chip.color}}/>
        )
    }

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Button color="primary" size="small" variant="text" onClick={handleClickOpen('paper')}>See answers</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">
                    <Typography variant="h5">
                        {props.name} - Answered on {moment(Date(props.date)).format('DD/MM/YYYY')}
                    </Typography>
                </DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    {
                        Object.entries(props.answers).map(([section, answers]) => (
                            <Box sx={{pb: 2}}>
                                <Typography gutterBottom variant='h3'>{sectionNames[section]}</Typography>
                                {
                                    answers.map((a, i) => (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                pb: 2
                                            }}
                                        >
                                            <Typography variant='body'>{i + 1}. {getQuestion(section, i)}</Typography>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    spacing: 2,
                                                    py: 1
                                                }}
                                            >
                                                {getAnswerChip(a.answer)}
                                                {a.answer !== 0 &&
                                                    <AlertNoActionDialog button="Show respondent comment" title={i+1 + ". "+ getQuestion(section, i)} text={a.comment}/>
                                                }
                                            </Box>
                                        </Box>
                                    ))
                                }
                            </Box>
                        ))
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}