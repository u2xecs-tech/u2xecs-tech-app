import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Box, Checkbox, FormControlLabel, MenuItem, Select, Typography} from "@material-ui/core";
import {Report} from "@material-ui/icons";

export default function ReportGenerator(props) {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const [chart, setChart] = React.useState(0);
    // const [file, setFile] = React.useState(0);
    const [comments, setComments] = React.useState(true);

    const handleClickOpen = (scrollType) => () => {
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

    return (
        <div>
            <Button sx={{mx: 1}} color="primary" variant="contained" onClick={handleClickOpen('paper')}>
                Generate report
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
                        Generate evaluation report
                    </Typography>
                </DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <Typography gutterBottom>
                        This will generate a PDF report of this evaluation's questions and the corresponding respondent
                        statistics.
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            py: 2,
                        }}
                    >
                        <Typography variant='h5'>
                            Chart type:
                        </Typography>
                        <Select value={chart} variant='standard' onChange={(e) => {
                            setChart(e.target.value)
                        }}>
                            <MenuItem value={0}>Doughnut</MenuItem>
                            <MenuItem value={1}>Bar</MenuItem>
                        </Select>
                    </Box>
                    {/*<Box*/}
                    {/*    sx={{*/}
                    {/*        display: 'flex',*/}
                    {/*        alignItems: 'center',*/}
                    {/*        gap: 2,*/}
                    {/*        pb: 2,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <Typography variant='h5'>*/}
                    {/*        File format:*/}
                    {/*    </Typography>*/}
                    {/*    <Select value={file} variant='standard' onChange={(e) => {setFile(e.target.value)}}>*/}
                    {/*        <MenuItem value={0}>PDF</MenuItem>*/}
                    {/*        <MenuItem value={1}>CSV</MenuItem>*/}
                    {/*    </Select>*/}
                    {/*</Box>*/}
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={comments}
                                onChange={(e) => setComments(e.target.checked)}
                                color="primary"
                            />
                        }
                        label="Include respondent comments"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Report/>
                </DialogActions>
            </Dialog>
        </div>
    );
}