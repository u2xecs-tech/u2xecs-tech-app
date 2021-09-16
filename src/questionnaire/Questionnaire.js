import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    TextField,
    Typography
} from '@material-ui/core';
import React from 'react';
import { API } from 'aws-amplify';
import { listEvaluations } from "../graphql/queries";
import {quiz} from "../quiz";
import Section from "./Section";
import {createAnswer} from "../graphql/mutations";
import {usingWindowSize} from "./util/useWindowSize";

class Questionnaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            evaluation: null,
            enabledSections: [],
            answers: {},
            name: "",
            email: null,
            submitted: false
        };
        this.firstSection = React.createRef()
    }

    componentDidMount() {
        API.graphql({ query: listEvaluations, variables: { filter: { link: { eq: this.props.link } } } }).then((apiData) => {
            const enabledSections = JSON.parse(apiData.data.listEvaluations.items[0].enabled_sections)
            const answers = {}
            enabledSections.map((section) => {
                answers[section] = []
            })
            const evaluation = apiData.data.listEvaluations.items[0]
            this.setState({
                evaluation: evaluation.status !== 0 ? -1 : evaluation,
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

    updateName = (evt) => this.setState({ name: evt.target.value })

    updateEmail= (evt) => this.setState({ email: evt.target.value })

    sendAnswers(evt) {
        if (this.state.submitted === true) {
            alert("You cannot resubmit the same answers, please reload the page to retake the questionnaire.")
            return
        }

        evt.preventDefault()
        const start_date = Date.now()
        const formData = { name: this.state.name, email: this.state.email, date: start_date.toString(), answers: JSON.stringify(this.state.answers), evaluationID: this.state.evaluation.id };
        API.graphql({ query: createAnswer, variables: { input: formData }}).then((answer) => {
            console.log(answer)
            this.setState({ submitted: true })
            alert("Thank you! You have successfully submitted your answers.")
        }).catch((error) => {
            console.log(error)
        })
    }

    startQuiz() {
        if (this.state.name !== "") {
            this.firstSection.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    submitAnswers() {
        if (this.state.name !== "" /*&& all questions and boxes answered*/) {
            // submit
        }
    }

    render() {
        const windowSize = this.props.windowSize
        return (
            <Box>
                <Container sx={{height: windowSize.height - 124, display: "flex", alignItems: "center"}}>
                    <Card style={{textAlignVertical: "center", textAlign: "center", width: "520px", margin: "50px auto", padding: "20px"}}>
                        <CardContent>
                            {this.state.evaluation !== -1 ?
                                <div>
                                    <Typography variant="h1">Hi! Please tell us who you are</Typography><br/>
                                    <TextField sx={{p: 2}} fullWidth placeholder="Please enter your full name"
                                               onChange={this.updateName.bind(this)}/>
                                </div>
                                :
                                <div>
                                    <Typography variant="h1">Sorry! Looks like this evaluation has been closed.</Typography><br/><br/>
                                    <Typography variant="p">Believe this is an error? Contact the evaluation's owner!</Typography>
                                </div>
                            }
                        </CardContent>
                        {this.state.evaluation !== -1 &&
                        <CardActions>
                            <Button variant="contained" color="primary" size="large" style={{margin: "auto"}}
                                    onClick={this.startQuiz.bind(this)}>Let's go!</Button>
                        </CardActions>
                        }
                    </Card>
                </Container>
                {this.state.evaluation !== -1 &&
                this.state.enabledSections.map((section, i) => (
                    <div ref={i === 0 ? this.firstSection : null}>
                        <Section sections={section} title={Object.keys(quiz)[section]}
                                 questions={quiz[Object.keys(quiz)[section]]}
                                 updateAnswer={this.updateAnswer.bind(this)}/>
                    </div>
                ))
                }
                {this.state.evaluation !== -1 &&
                <Container sx={{height: windowSize.height - 4, display: "flex", alignItems: "center"}}>
                    <Card style={{textAlignVertical: "center", textAlign: "center", width: "520px", margin: "50px auto", padding: "20px",}}>
                        <CardContent>
                            <Typography variant="h1">You're done!<br/>Thank you for answering</Typography><br/>
                            {/*<label>If you'd like to receive a copy of your answers, please enter your email below:</label><br/><br/>*/}
                            {/*<TextField sx={{p: 2}} fullWidth placeholder="Your email" onChange={updateEmail}/>*/}
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="primary" size="large" style={{margin: "auto"}} onClick={this.sendAnswers.bind(this)}>Submit answers</Button>
                        </CardActions>
                    </Card>
                </Container>
                }
            </Box>
        )
    }
}

export default usingWindowSize(Questionnaire);
