import React from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Chip,
    colors,
    Divider,
    MenuItem,
    Select,
    Typography
} from '@material-ui/core';
import choiceColors from '../../theme/colors';
import labels from '../../theme/labels';
import {quiz} from "../../quiz";

const sectionNames = Object.keys(quiz)

class AnswerStatistics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            section: 0,
            question: 0,
            chart: 0,
        };
    }

    getStats() {
        const stats = [0, 0, 0, 0, 0]
        const answers = this.props.answers.map((a) => a.answers[this.state.section][this.state.question].answer)
        answers.forEach((a) => {
            stats[a]++
        })
        return stats;
    }

    getPercentages(stats) {
        const sum = stats.reduce((a, b) => a + b)
        return stats.map((s) => s * 100 / sum)
    }

    render() {
        const data = {
            datasets: [
                {
                    data: this.getStats(),
                    backgroundColor: choiceColors,
                    borderColor: colors.common.white,
                    hoverBorderColor: colors.common.white
                }
            ],
            labels: labels
        };

        const options = {
            animation: false,
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false,
                    },
                    ticks: {
                        display: false
                    },
                    offset: true
                },
                y: {
                    grid: {
                        display: this.state.chart === 1,
                        drawBorder: false,
                        drawTicks: false,
                    },
                    ticks: {
                        display: this.state.chart === 1,
                        stepSize: 1
                    }
                },
            }
        };

        const sections = this.props.answers.length > 0 ? this.props.answers[0].answers : []

        return (
            <Card {...this.props}>
                <CardHeader title="Answer Statistics"/>
                <Divider/>
                {
                    this.props.answers.length === 0
                        ?
                        <Typography
                            variant='body'
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 100
                            }}
                        >
                            No one has answered this evaluation yet.
                        </Typography>
                        :
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Box sx={{display: 'flex'}}>
                                    <Select value={this.state.section} variant='standard' onChange={(e) => {
                                        this.setState({section: e.target.value, question: 0})
                                    }}>
                                        {Object.keys(sections).map((s) => (
                                            <MenuItem value={s}>{sectionNames[s]}</MenuItem>
                                        ))}
                                    </Select>
                                    <Select value={this.state.question} variant='standard' onChange={(e) => {
                                        this.setState({question: e.target.value})
                                    }}>
                                        {Array(sections[this.state.section].length).fill(0).map((a, i) => (
                                            <MenuItem value={i}>Q{i + 1}</MenuItem>
                                        ))}
                                    </Select>
                                </Box>
                                <Select value={this.state.chart} variant='standard' onChange={(e) => {
                                    this.setState({chart: e.target.value})
                                }}>
                                    <MenuItem value={0}>Doughnut Chart</MenuItem>
                                    <MenuItem value={1}>Bar Chart</MenuItem>
                                </Select>
                            </Box>
                            <Box
                                sx={{
                                    height: 300,
                                    position: 'relative',
                                    pt: 3
                                }}
                            >
                                {
                                    this.state.chart === 0
                                        ? <Doughnut data={data} options={options}/>
                                        : <Bar data={data} options={options}/>
                                }
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    pt: 2
                                }}
                            >
                                {labels.map((label, i) => (
                                    <div>
                                        <Divider/>
                                        <Box
                                            key={label}
                                            sx={{
                                                pt: 0.8,
                                                pb: 0.8,
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Chip
                                                label={label}
                                                style={{
                                                    backgroundColor: choiceColors[i]
                                                }}
                                            />
                                            <Typography variant="h5">
                                                {Math.round(this.getPercentages(this.getStats())[i])}
                                                %
                                            </Typography>
                                        </Box>
                                    </div>
                                ))}
                            </Box>
                        </CardContent>
                }
            </Card>
        );
    }
}

export default AnswerStatistics;
