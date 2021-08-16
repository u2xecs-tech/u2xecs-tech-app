import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Box, colors, Container, Typography} from "@material-ui/core";
import {jsPDF} from "jspdf";
import {quiz} from "../../quiz";
import {Chart, Doughnut} from "react-chartjs-2";

export default function Report(props) {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

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

    Chart.register({
        id: 'white',
        beforeDraw: chart => {
            const ctx = chart.ctx;
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, chart.width, chart.height);
        }
    });

    const getQuestion = (s, q) => {
        return quiz[s][q]
    }

    const e = props.evaluation

    const getStats = (s, q) => {
        const answers = e.answers.map((a) => a.answers[s][q].answer)
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
        // responsive: false,
        plugins: {
            legend: {
                // display: false
                position: 'right'
            },
            tooltip: {
                enabled: false
            }
        },
        // scales: {
        //     x: {
        //         grid: {
        //             display: false,
        //             drawBorder: false,
        //             drawTicks: false,
        //         },
        //         ticks: {
        //             display: false
        //         },
        //         offset: true
        //     },
        //     y: {
        //         grid: {
        //             display: this.state.chart === 1,
        //             drawBorder: false,
        //             drawTicks: false,
        //         },
        //         ticks: {
        //             display: this.state.chart === 1,
        //             stepSize: 1
        //         }
        //     },
        // }
    }

    const report = () => (
        <Container id="report">
            <h5 style={{paddingTop: 40, color: 'gray'}}>U2XECS Evaluation</h5>
            <h1 style={{paddingBottom: 10}}>{e.name}</h1>
            <body style={{fontSize: 13, padding: 10, paddingBottom: 10}}>{e.description}</body>
            <body style={{fontSize: 13, padding: 10, paddingBottom: 10}}>From {e.start_date} to {e.end_date}</body>
            <body style={{fontSize: 13, padding: 10, paddingBottom: 10}}>Total of {e.answers.length} answers</body>
            {
                Object.entries(props.evaluation.answers[0] != null ? props.evaluation.answers[0].answers : []).map(([section, answers]) => (
                    <Box sx={{pt: 3}}>
                        <h3>{section}</h3>
                        {
                            answers.map((a, i) => (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        py: 1
                                    }}
                                >
                                    <Typography gutterBottom variant='body'>{i + 1}. {getQuestion(section, i)}</Typography>
                                    <Box
                                        sx={{
                                            py: 1,
                                            height: '200px',
                                            backgroundColor: 'white'
                                        }}
                                    >
                                        <Doughnut data={data(section, i)} options={options}/>
                                    </Box>
                                    <h6 style={{paddingLeft: 8, paddingTop: 10}}>Respondent comments</h6>
                                    {answers.filter((a) => a.comment !== null).map((a) => (
                                        <body style={{fontSize: 11, padding: 10, paddingBottom: 10}}>{a.comment}</body>
                                    ))}
                                </Box>
                            ))
                        }
                    </Box>
                ))
            }
        </Container>
    )

    const download = () => {
        const pdf = new jsPDF('p', 'pt', 'a4')
        pdf.html(document.getElementById("report")).then(() => {
            // pdf.output("dataurlnewwindow");
            pdf.save("My Report.pdf")
        })
    }

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
            >
                <DialogTitle id="scroll-dialog-title">
                    <Typography variant="h4">
                        Evaluation report
                    </Typography>
                </DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    {report()}
                </DialogContent>
                <DialogActions>
                    <Button onClick={download} variant="contained">
                        Download PDF
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}