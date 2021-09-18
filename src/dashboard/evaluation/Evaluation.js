import {Helmet} from 'react-helmet';
import {Box, Container, Grid} from '@material-ui/core';
import Description from './Description';
import Respondents from './Respondents';
import Answers from './Answers';
import LastModification from './LastModification';
import AnswerStatistics from './AnswerStatistics';
import Toolbar from './Toolbar';
import {useParams} from "react-router";
import EvaluationLink from "./EvaluationLink";
import Comments from "./Comments";
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { getEvaluation } from '../../graphql/queries';
import {getEvalByID} from "../__mocks__/evals";

const Evaluation = () => {
    const {id} = useParams();
    const [evaluation, setEvaluation] = useState({
        id: 0,
        name: "",
        description: "",
        answers: {items: [], nextToken: null},
        link: "",
        start_date: "",
        status: 0
    });

    useEffect(() => {
        fetchEvaluation();
    }, []);

    async function fetchEvaluation() {
        // const apiData = await API.graphql({ query: getEvaluation, variables: { id: id } });
        // console.log(apiData.data.getEvaluation)
        // setEvaluation(apiData.data.getEvaluation)
        setEvaluation(getEvalByID('0'))
    }

    return (
        <>
            <Helmet>
                <title>{evaluation.name} | Evaluation</title>
            </Helmet>
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100%',
                    py: 3
                }}
            >
                <Container maxWidth={false}>
                    <Grid container spacing={3}>
                        <Grid item lg={12} sm={12} xl={12} xs={12}>
                            <Toolbar evaluation={evaluation}/>
                        </Grid>
                        <Grid item lg={4} sm={12} xl={5} xs={12}>
                            <Description sx={{height: '100%'}} description={evaluation.description}/>
                        </Grid>
                        <Grid item lg={2} sm={6} xl={2} xs={12}>
                            <Answers sx={{height: '100%'}} number={evaluation.answers.items.length}/>
                        </Grid>
                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <EvaluationLink sx={{height: '100%'}} link={evaluation.link}/>
                        </Grid>
                        <Grid item lg={3} sm={6} xl={2} xs={12}>
                            <LastModification sx={{height: '100%'}} date={Date(evaluation.start_date)}/>
                        </Grid>
                        <Grid item lg={4} md={6} xl={4} xs={12}>
                            <AnswerStatistics answers={evaluation.answers}/>
                        </Grid>
                        <Grid item lg={5} md={6} xl={8} xs={12}>
                            <Respondents answers={evaluation.answers}/>
                        </Grid>
                        <Grid item lg={3} md={6} xl={8} xs={12}>
                            <Comments/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Evaluation;
