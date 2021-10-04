import {Helmet} from 'react-helmet';
import {Box, Container, Grid} from '@material-ui/core';
import EvaluationCard from "./EvaluationCard";
import EvaluationsToolbar from "./EvaluationsToolbar";
import React from 'react';
import {Link} from "react-router-dom";
import { listEvaluations } from '../../graphql/queries';
import { createEvaluation as createEvaluationMutation } from '../../graphql/mutations';
import { API } from 'aws-amplify';
import Auth from "@aws-amplify/auth";

class Evaluations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 0,
            evaluations: [],
            creatorName: ""
        };
    }

    componentDidMount() {
        Auth.currentAuthenticatedUser().then((user) => {
            return new Promise((resolve, reject) => {
                resolve(user.attributes.name)
            })
        }).then((name) => {
            API.graphql({ query: listEvaluations }).then((apiData) => {
                this.setState({evaluations: apiData.data.listEvaluations.items.filter((e) => {return e._deleted !== true}), creatorName: name})
            }).catch((error) => {
                console.log(error)
            })
        })
    }

    selectChange = (e) => {
        this.setState({filter: e.target.value});
    }

    filteredEvals = () => {
        if (this.state.filter === 0) {
            return this.state.evaluations;
        }
        return this.state.evaluations.filter((e) => {return e.status+1 === this.state.filter});
    }

    addEvaluation = (name, description, disclaimer, enabled_sections) => {
        const start_date = Date.now()
        const formData = { name: name, description: description, disclaimer: disclaimer, enabled_sections: enabled_sections, start_date: start_date.toString(), status: 0, creator: this.state.creatorName };
        return API.graphql({ query: createEvaluationMutation, variables: { input: formData }})
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>My Evaluations</title>
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
                                <EvaluationsToolbar sx={{pb: 1}} filter={this.state.filter} selectChange={this.selectChange} addEval={this.addEvaluation}/>
                            </Grid>
                            {this.filteredEvals().map((e) => (
                                <Grid item lg={3} sm={6} xl={3} xs={12}>
                                    <Link to={`/evaluation/${e.id}`}>
                                        <EvaluationCard sx={{height: 140}} name={e.name} description={e.description} status={e.status}/>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </>
        );
    }
}

export default Evaluations;
