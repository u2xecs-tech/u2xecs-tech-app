import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    TextField,
    Typography
} from "@material-ui/core";
import {quiz} from "../../quiz";
import {green, red} from "@material-ui/core/colors";
import InfoIcon from "@material-ui/icons/InfoOutlined"
import SectionQuestionsDialog from "./SectionQuestionsDialog";
import {useNavigate} from "react-router-dom";

export default function CreateEvaluation(props) {
    const navigate = useNavigate()

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const sections = Object.keys(quiz)

    const [selected, setSelected] = React.useState({});
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [disclaimer, setDisclaimer] = React.useState('');

    const resetStates = () => {
        const selection = {}
        sections.forEach((s) => selection[s] = false)
        setSelected(selection)
        setTitle('')
        setDescription('')
        setDisclaimer('')
    }

    const handleClickOpen = (scrollType) => () => {
        resetStates()
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const handleSelect = (s) => {
        const selection = {}
        Object.entries(selected).forEach(([k, v]) => selection[k] = v)
        selection[s] = !selected[s]
        setSelected(selection)
    }

    const createEvaluation = () => {
        if (title === '') {
            alert('You must enter a title for your evaluation.')
            return
        }

        if (description === '') {
            alert('You must enter a description for your evaluation.')
            return
        }

        if (Object.values(selected).filter((s) => s === true).length === 0) {
            alert('You must select at least one section to include.')
            return
        }

        // call api
        const enabled_sections = Object.values(selected).map((s, i) => s === true ? i : -1).filter((s) => s !== -1)
        props.addEval(title, description, disclaimer, enabled_sections).then((data) => {
            handleClose()
            alert('Evaluation created successfully.')
            navigate('/evaluation/' + data.createEvaluation.id)
        }).catch((error) => {
            handleClose()
            alert('error:' + error)
            console.log(error)
        })
    }

    return (
        <div>
            <Button sx={{mx: 1}} color="primary" variant="contained" onClick={handleClickOpen('paper')}>
                Create new evaluation
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                sx={{
                    minWidth: 1000
                }}
            >
                <DialogTitle id="scroll-dialog-title">
                    <Typography variant="h4">
                        Create new evaluation
                    </Typography>
                </DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <FormControl>
                        <Box
                            sx={{
                                display: 'flex',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <TextField
                                    sx={{pb: 2}}
                                    variant="standard"
                                    label="Title"
                                    helperText="Required* (max: 40 characters)"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    inputProps={{ maxLength: 40 }}
                                />
                                <TextField
                                    sx={{pb: 2}}
                                    variant="standard"
                                    label="Description"
                                    helperText="Required* (max: 200 characters)"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    inputProps={{ maxLength: 200 }}
                                />
                                <TextField
                                    sx={{pb: 4}}
                                    variant="standard"
                                    label="Note for respondents"
                                    helperText="This will be shown to your respondents when they first open the evaluation. (max: 200 characters)"
                                    value={disclaimer}
                                    onChange={(e) => setDisclaimer(e.target.value)}
                                    inputProps={{ maxLength: 200 }}
                                />
                                <Typography variant='caption' color='red'>
                                    You will NOT be able to change these settings later.
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    pl: 10,
                                    pr: 5,
                                }}
                            >
                                <FormLabel>
                                    <Typography gutterBottom variant="subtitle">
                                        Sections to include
                                    </Typography>
                                </FormLabel>
                                <FormGroup>
                                    {sections.map((s) => (
                                        <FormControlLabel
                                            control={<Checkbox size="small" checked={selected[s]}
                                                               onChange={() => handleSelect(s)}/>}
                                            label={
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <Typography variant='subtitle2'>
                                                        {s}
                                                    </Typography>
                                                    <SectionQuestionsDialog button={<InfoIcon/>} title={s}
                                                                            questions={quiz[s]}/>
                                                </Box>
                                            }
                                        />
                                    ))}
                                </FormGroup>
                            </Box>
                        </Box>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{color: red[600]}}>
                        Cancel
                    </Button>
                    <Button onClick={createEvaluation}
                            sx={{backgroundColor: green[500], '&:hover': {backgroundColor: green[800]}}}
                            variant="contained">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}