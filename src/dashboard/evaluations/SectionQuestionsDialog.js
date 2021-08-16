import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Box, IconButton, Typography} from "@material-ui/core";

export default function SectionQuestionsDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton size="small" color="primary" onClick={handleClickOpen}>
                {props.button}
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography variant='h4' sx={{pt: 1}}>
                        {props.title}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    {
                        props.questions.map((q, i) => (
                            <Box sx={{py: 1}}>
                                <Typography gutterBottom variant='subtitle'>
                                    {i+1}. {q}
                                </Typography>
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