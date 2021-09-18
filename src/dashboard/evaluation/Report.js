import React from 'react';
import {Box, colors, Container, Typography} from "@material-ui/core";
import {quiz} from "../../quiz";
import {Chart, Doughnut} from "react-chartjs-2";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export default function Report(props) {

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
        plugins: {
            legend: {
                position: 'right'
            },
            tooltip: {
                enabled: false
            }
        },
    }

    const report = () => (
        <Container id="report">
            <h5 style={{paddingTop: 40, color: 'gray'}}>U2XECS Evaluation</h5>
            <h1 style={{paddingBottom: 10}}>{e.name}</h1>
            <body style={{fontSize: 13, padding: 10, paddingBottom: 10}}>{e.description}</body>
            <body style={{fontSize: 13, padding: 10, paddingBottom: 10}}>From {e.start_date} to {e.end_date}</body>
            <body style={{fontSize: 13, padding: 10, paddingBottom: 10}}>Total of {e.answers.length} answers</body>
            {props.evaluation.answers.length > 0 &&
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

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
            </Page>
        </Document>
    );
}