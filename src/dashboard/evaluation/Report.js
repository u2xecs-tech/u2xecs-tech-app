import React from 'react';
import {quiz} from "../../quiz";
import {Document, Font, Image, Page, StyleSheet, Text, View} from '@react-pdf/renderer';

export default function Report(props) {
    const e = props.evaluation
    const comments = props.comments
    const charts = props.charts

    const getQuestion = (s, q) => {
        return quiz[s][q]
    }

    const getComments = (s, q) => {
        return e.answers.items
            .filter(a => a.answers[s][q].comment !== null)
            .map(a => {return {name: a.name, comment: a.answers[s][q].comment}})
    }

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            padding: 20,
        },
        title: {
            padding: 10,
            backgroundColor: '#E4E4E4',
            marginBottom: 10
        },
        section: {
            padding: 10
        },
        question: {
            paddingVertical: 8
        },
        comments: {
            padding: 10,
            backgroundColor: '#E4E4E4',
            marginVertical: 10
        }
    });

    Font.registerHyphenationCallback(word => [word]);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.title}>
                    <Text style={{fontFamily: "Helvetica", fontSize: "17"}}>U2XECS Evaluation Report</Text>
                    <Text style={{fontFamily: "Helvetica-Bold", fontSize: "24", paddingTop: 16}}>{e.name}</Text>
                    <Text style={{fontFamily: "Helvetica", fontSize: "14", paddingTop: 2}}>{e.description}</Text>
                    <Text style={{fontFamily: "Helvetica", fontSize: "14", paddingTop: 24}}>{e.start_date} - {e.end_date}, {e.answers.items.length} answers</Text>
                </View>

                {Object.entries(e.answers.items[0].answers).map(([section, answers]) => (
                    <View style={styles.section}>
                        <Text style={{fontFamily: "Helvetica-Bold", fontSize: "17"}}>{section}</Text>

                        {answers.map((a, i) => (
                            <View style={styles.question}>
                                <Text style={{fontFamily: "Helvetica", fontSize: "14", paddingVertical: 8}}>{i + 1}. {getQuestion(section, i)}</Text>

                                <Image src={charts[section][i]} style={{paddingVertical: 10}}/>

                                {comments &&
                                    <View style={styles.comments}>
                                        <Text style={{fontFamily: "Helvetica-Bold", fontSize: "11", paddingBottom: 10}}>Respondent
                                            comments</Text>
                                        {getComments(section, i).map((a) => (
                                            <Text
                                                style={{fontFamily: "Helvetica", fontSize: "11", paddingVertical: 4}}><Text
                                                style={{fontFamily: "Helvetica-Bold"}}>{a.name}</Text>: {a.comment}</Text>
                                        ))}
                                    </View>
                                }
                            </View>
                        ))}
                    </View>
                ))}
            </Page>
        </Document>
    )
}