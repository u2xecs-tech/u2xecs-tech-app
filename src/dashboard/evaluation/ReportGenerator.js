import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Box, Checkbox, colors, Divider, FormControlLabel, MenuItem, Select, Typography} from "@material-ui/core";
import {PDFDownloadLink} from "@react-pdf/renderer";
import Report from "./Report"
import {Bar, Chart, Doughnut} from "react-chartjs-2";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function ReportGenerator(props) {
    const [chartType, setChartType] = useState(0);
    const [file, setFile] = useState(0);
    const [comments, setComments] = useState(false);

    const e = props.evaluation

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const [downloadReady, setReady] = useState(false);

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
        setReady(false)
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
            setTimeout(() => setReady(true), 1000)
        }
    }, [open]);

    Chart.register({
        id: 'white',
        beforeDraw: chart => {
            const ctx = chart.ctx;
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, chart.width, chart.height);
        }
    });

    const getStats = (s, q) => {
        const answers = e.answers.items.map((a) => a.answers[s][q].answer)
        const stats = [0, 0, 0, 0, 0]
        answers.forEach((a) => {
            stats[a]++
        })
        return stats;
    }

    const getPercentages = (stats) => {
        const sum = stats.reduce((a, b) => a + b)
        return stats.map((s) => Math.round(s * 100 / sum))
    }

    const getCharts = () => {
        if (e.answers.items.length === 0) {
            return
        }

        const charts = {}
        Object.entries(e.answers.items[0].answers).forEach(([section, answers]) => {
            answers.forEach((a, i) => {
                const context = document.getElementById(`chart${section}-${i}`)
                if (typeof charts[section] === 'undefined') {
                    charts[section] = []
                }
                charts[section].push(context.toDataURL())
            })
        })
        return charts
    }

    const setFileType = (value) => {
        setFile(value)
    }

    const setChartTypeFull = (value) => {
        setReady(false)
        setChartType(value)
        setTimeout(() => setReady(true), 1000)
    }

    const data = (s, q) => {
        const stats = getStats(s, q)
        const percentages = getPercentages(stats)
        return {
            datasets: [
                {
                    data: stats,
                    backgroundColor: [
                        '#00BF07',
                        '#ABCF08',
                        '#FFCD03',
                        '#FF8800',
                        '#FF380F'
                    ],
                    borderColor: colors.common.white,
                    hoverBorderColor: colors.common.white
                }
            ],
            labels: [
                `I totally agree:  ${percentages[0]}%`,
                `I partially agree: ${percentages[1]}%`,
                `I neither agree nor disagree: ${percentages[2]}%`,
                `I partially disagree: ${percentages[3]}%`,
                `I totally disagree: ${percentages[4]}%`
            ]
        }
    }

    const options = {
        animation: false,
        maintainAspectRatio: false,
        responsive: false,
        plugins: {
            legend: {
                display: chartType === 0,
                position: 'right'
            },
            tooltip: {
                enabled: false
            }
        },
    }

    return (
        <div>
            <Button sx={{mx: 1}} color="primary" variant="contained" onClick={handleClickOpen('paper')}
                    disabled={typeof e.answers.items === 'undefined' || e.answers.items.length === 0}>
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
                            File format:
                        </Typography>
                        <Select value={file} variant='standard' onChange={(e) => {setFileType(e.target.value)}}>
                            <MenuItem value={0}>PDF</MenuItem>
                            {/*<MenuItem value={1}>CSV</MenuItem>*/}
                        </Select>
                        {file === 0 &&
                            <>
                                <Typography variant='h5' sx={{ml: 4}}>
                                    Chart type:
                                </Typography>
                                <Select value={chartType} variant='standard' onChange={(e) => setChartTypeFull(e.target.value)}>
                                    <MenuItem value={0}>Doughnut</MenuItem>
                                    <MenuItem value={1}>Bar</MenuItem>
                                </Select>
                            </>
                        }
                    </Box>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={comments}
                                onChange={(e) => setComments(e.target.checked)}
                                color="primary"
                            />
                        }
                        label="Include respondent comments"
                        sx={{mb: 4}}
                    />
                    {file === 0 &&
                        <div>
                            <Divider/>
                            <PerfectScrollbar>
                                <br/>
                                <Box sx={{maxHeight: 300}}>
                                    <Typography variant='body2'>
                                        Charts to include:
                                    </Typography>
                                    {e.answers.items.length !== 0 &&
                                        Object.entries(e.answers.items[0].answers).map(([section, answers]) => (
                                            <div>
                                                {answers.map((a, i) => (
                                                    <div>
                                                        {chartType === 0
                                                            ? <Doughnut id={`chart${section}-${i}`} data={data(section, i)} options={options} width={520} height={200}/>
                                                            : <Bar id={`chart${section}-${i}`} data={data(section, i)} options={options} width={520} height={200}/>
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                    }
                                </Box>
                            </PerfectScrollbar>
                        </div>
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error">
                        Cancel
                    </Button>
                    {file === 0 && downloadReady ?
                        <Button>
                            <PDFDownloadLink document={<Report evaluation={e} comments={comments} charts={getCharts()}/>} fileName={`${e.name}.pdf`}>
                                {({ blob, url, loading, error }) =>
                                    loading ? 'Generating.....' : 'Download'
                                }
                            </PDFDownloadLink>
                        </Button>
                        :
                        <Button>
                            Generating.....
                        </Button>
                    }
                </DialogActions>
            </Dialog>
        </div>
    );
}