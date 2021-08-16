import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    FormControl, Input, InputLabel,
    TextField,
    Typography
} from '@material-ui/core';
import React from 'react';
import { API } from 'aws-amplify';
import { listEvaluations } from "../graphql/queries";
import {quiz} from "../quiz";
import Section from "./Section";
import {createAnswer, createEvaluation as createEvaluationMutation} from "../graphql/mutations";

class Questionnaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            evaluation: null,
            enabledSections: [],
            answers: {},
            name: "",
            email: null
        };
    }

    componentDidMount() {
        API.graphql({ query: listEvaluations, variables: { filter: { link: { eq: this.props.link } } } }).then((apiData) => {
            const enabledSections = JSON.parse(apiData.data.listEvaluations.items[0].enabled_sections)
            const answers = {}
            enabledSections.map((section) => {
                answers[section] = []
            })
            this.setState({
                evaluation: apiData.data.listEvaluations.items[0],
                enabledSections: enabledSections,
                answers: answers
            })
            console.log(JSON.parse(apiData.data.listEvaluations.items[0].enabled_sections))
        }).catch((error) => {
            console.log(error)
        })
    }

    updateAnswer(section, question, answerToUpdate) {
        const newAnswers = this.state.answers
        newAnswers[section][question] = answerToUpdate
        this.setState({
            answers: newAnswers
        })
    }

    updateName(evt) {
        this.setState({
            name: evt.target.value
        })
    }

    updateEmail(evt) {
        this.setState({
            email: evt.target.value
        })
    }

    sendAnswers(evt) {
        evt.preventDefault()
        const start_date = Date.now()
        const formData = { name: this.state.name, email: this.state.email, date: start_date.toString(), answers: JSON.stringify(this.state.answers), evaluationID: this.state.evaluation.id };
        API.graphql({ query: createAnswer, variables: { input: formData }}).then((answer) => {
            console.log(answer)
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <>
                <Box style={{textAlignVertical: "center",textAlign: "center",}}>
                    <Container>
                        <Card style={{textAlignVertical: "center",textAlign: "center", width: "500px", margin: "50px auto", padding: "20px",}}>
                            <CardContent>
                                <Typography variant="h1">Hi! Please tell us who you are</Typography><br/>
                                <TextField sx={{p: 2}} fullWidth placeholder="Please enter your full name" onChange={this.updateName.bind(this)}/>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary" style={{margin: "auto"}}>Let's go!</Button>
                            </CardActions>
                        </Card>
                        {
                            this.state.enabledSections.map((section) => (
                                <Section sections={section} title={Object.keys(quiz)[section]} questions={quiz[Object.keys(quiz)[section]]} updateAnswer={this.updateAnswer.bind(this)}/>
                            ))
                        }
                        <Card style={{textAlignVertical: "center",textAlign: "center", width: "500px", margin: "50px auto", padding: "20px",}}>
                            <CardContent>
                                <Typography variant="h1">You're done!<br/>Thank you for answering</Typography><br/>
                                <label>If you'd like to receive a copy of your answers,please enter your email below:</label><br/><br/>
                                <TextField sx={{p: 2}} fullWidth placeholder="Your email" onChange={this.updateEmail.bind(this)}/>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary" style={{margin: "auto"}} onClick={this.sendAnswers.bind(this)}>Submit answers</Button>
                            </CardActions>
                        </Card>
                    </Container>
                </Box>
            </>
        )
    }
}

export default Questionnaire;
