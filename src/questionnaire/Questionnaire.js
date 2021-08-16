import {Helmet} from 'react-helmet';
import {Box, Container, Grid} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { API } from 'aws-amplify';
import { listEvaluations} from "../graphql/queries";
import {quiz} from "../quiz";
import crypto from "crypto";
import {createEvaluation as createEvaluationMutation} from "../graphql/mutations";
import Section from "./Section";

class Questionnaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            evaluation: null,
            enabledSections: [],
            answer: {}
        };
    }

    componentDidMount() {
        API.graphql({ query: listEvaluations, variables: { filter: { link: { eq: this.props.link } } } }).then((apiData) => {
            console.log(apiData.data.listEvaluations.items)
            this.setState({
                evaluation: apiData.data.listEvaluations.items[0],
                enabledSections: JSON.parse(apiData.data.listEvaluations.items[0].enabled_sections)
            })
            console.log(JSON.parse(apiData.data.listEvaluations.items[0].enabled_sections))
        }).catch((error) => {
            console.log(error)
        })
    }

    updateAnswer(section, question, answerToUpdate) {
        const newAnswer = this.state.answer
        newAnswer[section][question] = answerToUpdate
        this.setState({
            answer: newAnswer
        })
    }

    render() {
        return (
            <>
                <Box>
                    <Container>
                        {
                            this.state.enabledSections.map((section) => (
                                <Section title={Object.keys(quiz)[section]} questions={quiz[Object.keys(quiz)[section]]}/>
                            ))
                        }
                    </Container>
                </Box>
            </>
        )
    }
}

export default Questionnaire;
