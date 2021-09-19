import React from 'react';
import {colors} from "@material-ui/core";
import {quiz} from "../../quiz";
import {Chart, Doughnut} from "react-chartjs-2";
import {Document, Font, Image, Page, StyleSheet, Text, View} from '@react-pdf/renderer';
import html2canvas from "html2canvas";
import {Buffer} from 'buffer';

export default function Report(props) {
    const e = props.evaluation

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

    const getChart = (section, i) => {
        const chart = (
            <Doughnut data={data(section, i)} options={options}/>
        )

        return new Promise((resolve, reject) => {
            html2canvas(chart).then(canvas => {
                const img = canvas.toDataURL('image/png');
                const buffer = new Buffer(img)
                resolve(buffer)
            })
        })
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

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            padding: 20,
        },
        title: {
            padding: 10,
            backgroundColor: "#E4E4E4",
            marginBottom: 10
        },
        section: {
            padding: 10
        },
        question: {
            paddingVertical: 4
        }
    });

    Font.registerHyphenationCallback(word => [word]);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.title}>
                    <Text style={{ fontFamily: "Helvetica", fontSize: "17" }}>U2XECS Evaluation Report</Text>
                    <Text style={{ fontFamily: "Helvetica-Bold", fontSize: "24", paddingTop: 16 }}>{e.name}</Text>
                    <Text style={{ fontFamily: "Helvetica", fontSize: "14", paddingTop: 2 }}>{e.description}</Text>
                    <Text style={{ fontFamily: "Helvetica", fontSize: "14", paddingTop: 24 }}>{e.start_date} - {e.end_date},  {e.answers.items.length} answers</Text>
                </View>

                {Object.entries(e.answers.items[0].answers).map(([section, answers]) => (
                    <View style={styles.section}>
                        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: "17" }}>{section}</Text>

                        {answers.map((a, i) => (
                            <View style={styles.question}>
                                <Text style={{ fontFamily: "Helvetica", fontSize: "14", paddingVertical: 4 }}>{i + 1}. {getQuestion(section, i)}</Text>
                                {/*<Image src={getChart(section, i)}/>*/}
                                {/*<h6 style={{paddingLeft: 8, paddingTop: 10}}>Respondent comments</h6>*/}
                                {/*{answers.filter((a) => a.comment !== null).map((a) => (*/}
                                {/*<body style={{fontSize: 11, padding: 10, paddingBottom: 10}}>{a.comment}</body>*/}
                                {/*))}*/}
                            </View>
                        ))}
                    </View>
                ))}
            </Page>
        </Document>
    );
}