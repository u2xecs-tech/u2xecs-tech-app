import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Box, Checkbox, colors, FormControlLabel, MenuItem, Select, Typography} from "@material-ui/core";
import {PDFDownloadLink} from "@react-pdf/renderer";
import Report from "./Report"
import {Bar, Chart, Doughnut} from "react-chartjs-2";
import PerfectScrollbar from "react-perfect-scrollbar";
import {CSVLink} from "react-csv";
import {quiz} from "../../quiz";
import ChartDataLabels from "chartjs-plugin-datalabels";

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
                `I totally agree`,
                `I partially agree`,
                `I neither agree nor disagree`,
                `I partially disagree`,
                `I totally disagree`
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
            },
            datalabels: {
                formatter: (value, ctx) => {
                    let sum = 0
                    let dataArr = ctx.chart.data.datasets[0].data
                    dataArr.forEach(data => {
                        sum += data
                    })
                    if (value === 0) {
                        return ""
                    }
                    return (value*100 / sum).toFixed(1)+"%"
                },
                color: 'white',
                labels: {
                    title: {
                        font: {
                            weight: 'bold',
                            size: 16
                        }
                    },
                },
            }
        },
    }

    function csvData() {
        const data = []
        const first = [e.name, '']
        const second = ['', '']
        Object.entries(e.answers.items[0].answers).forEach(([section, answers]) => {
            const name = Object.keys(quiz)[section]
            quiz[name].forEach((question, i) => {
                first.push(name)
                second.push(`${i+1}. ${question}`)
                if (comments) {
                    first.push(name)
                    second.push(`${i+1}- Comments`)
                }
            })
        })
        data.push(first)
        data.push(second)

        const labels = [`I totally agree`, `I partially agree`, `I neither agree nor disagree`, `I partially disagree`, `I totally disagree`]
        e.answers.items.forEach((answer, idx) => {
            const line = [idx + 1, answer.name]
            Object.values(answer.answers).flat().forEach((a) => {
                line.push(labels[a.answer])
                if (comments) {
                    line.push(a.comment)
                }
            })
            data.push(line)
        })

        return data
    }

    function didDownload() {
        if (!downloadReady) {
            return
        }

        setTimeout(handleClose, 300)
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
                            <MenuItem value={1}>CSV</MenuItem>
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
                    <PerfectScrollbar>
                        <br/>
                        <Box sx={{maxHeight: 2, overflow: 'hidden'}}>
                            {e.answers.items.length !== 0 &&
                                Object.entries(e.answers.items[0].answers).map(([section, answers]) => (
                                    <div>
                                        {answers.map((a, i) => (
                                            <div>
                                                {chartType === 0
                                                    ? <Doughnut id={`chart${section}-${i}`} data={data(section, i)} options={options} plugins={[ChartDataLabels]} width={520} height={200}/>
                                                    : <Bar id={`chart${section}-${i}`} data={data(section, i)} options={options} plugins={[ChartDataLabels]} width={520} height={200}/>
                                                }
                                            </div>
                                        ))}
                                    </div>
                                ))
                            }
                        </Box>
                    </PerfectScrollbar>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error">
                        Cancel
                    </Button>
                    {downloadReady ?
                        <div>
                            {file === 0 ?
                                <Button onClick={didDownload}>
                                    <PDFDownloadLink document={<Report evaluation={e} comments={comments} charts={getCharts()}/>} fileName={`${e.name}.pdf`}>
                                        {({ blob, url, loading, error }) =>
                                            loading ? 'Generating.....' : 'Download'
                                        }
                                    </PDFDownloadLink>
                                </Button>
                                :
                                <Button onClick={didDownload}>
                                    <CSVLink data={csvData()} filename={`${e.name}`}>Download</CSVLink>
                                </Button>
                            }
                        </div>
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