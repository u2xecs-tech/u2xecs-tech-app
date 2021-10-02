import {
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    TextField,
    Typography
} from '@material-ui/core';
import React, {createRef} from 'react';
import { API } from 'aws-amplify';
import { getEvaluationForQuestionnaire } from "../graphql/customQueries";
import {getAbsoluteNumber, quiz} from "../quiz";
import Section from "./Section";
import {createAnswer} from "../graphql/mutations";
import {usingWindowSize} from "./util/useWindowSize";
import Sidebar from "./Sidebar";

class Questionnaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            evaluation: null,
            enabledSections: [],
            answers: {},
            name: "",
            email: null,
            owner: "",
            evaluationName: "",
            submitted: false,
            flashingQuestion: -1,
            sidebarHidden: true,
        };

        let questionRefs = []
        for (let i = 0; i < 29; i++) {
            questionRefs.push(createRef())
        }
        this.questionRefs = questionRefs

        let sectionRefs = []
        for (let i = 0; i < 10; i++) {
            sectionRefs.push(createRef())
        }
        this.sectionRefs = sectionRefs
    }

    componentDidMount() {
        API.graphql({
            query: getEvaluationForQuestionnaire,
            variables: { id: this.props.link },
            authMode: 'AWS_IAM'
        }).then((apiData) => {
            const evaluation = apiData.data.getEvaluation
            const enabledSections = JSON.parse(evaluation.enabled_sections)
            const answers = {}
            enabledSections.forEach((section) => {
                answers[section] = []
            })
            this.setState({
                evaluation: evaluation.status !== 0 ? -1 : evaluation,
                enabledSections: enabledSections,
                answers: answers,
                evaluationName: evaluation.name,
                owner: evaluation.owner
            })

            console.log(apiData.data.getEvaluation)
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

    updateEmail = (evt) => this.setState({ email: evt.target.value })

    sendAnswers(evt) {
        if (this.state.submitted) {
            return
        }

        if (this.state.name === "") {
            alert("Please input a name.")
            this.sectionRefs[0].current.scrollIntoView({ behavior: 'smooth' })
            return
        }

        let out = false;
        this.state.enabledSections.every((section) => {
            quiz[Object.keys(quiz)[section]].every((question, j) => {
                if (typeof this.state.answers[section][j] === "undefined"
                    || (this.state.answers[section][j].answer !== 0 && [null, ""].includes(this.state.answers[section][j].comment))) {
                    this.getRef(section, j).current.scrollIntoView({behavior: 'smooth'})
                    this.flash(getAbsoluteNumber(section, j)).then()
                    out = true
                    return false
                }
                return true
            })
            return !out
        })
        if (out) {
            return
        }

        evt.preventDefault()
        const start_date = Date.now()
        const formData = { name: this.state.name, email: this.state.email, date: start_date.toString(), answers: JSON.stringify(this.state.answers), evaluationID: this.state.evaluation.id };
        API.graphql({ query: createAnswer, variables: { input: formData }}).then((answer) => {
            console.log(answer)
            this.setState({ submitted: true })
        }).catch((error) => {
            console.log(error)
        })
    }

    startQuiz() {
        if (this.state.name !== "") {
            this.sectionRefs[1].current.scrollIntoView({behavior: 'smooth'})
        }
        this.setState({sidebarHidden: false})
    }

    getRef(s, q) {
        return this.questionRefs[getAbsoluteNumber(s, q)]
    }

    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async flash(q) {
        const flashInterval = 80
        await this.timeout(100)
        for (let i = 0; i < 5; i++) {
            this.setState({ flashingQuestion: q })
            await this.timeout(flashInterval)
            this.setState({ flashingQuestion: -1 })
            await this.timeout(flashInterval)
        }
    }

    goToSection(i) {
        this.sectionRefs[i+1].current.scrollIntoView({ behavior: 'smooth' })
    }

    render() {
        const windowSize = this.props.windowSize
        return (
            <div>
                {!this.state.sidebarHidden && windowSize.width > 1250 &&
                    <Sidebar sections={this.state.enabledSections} goToSection={this.goToSection.bind(this)}/>
                }
                <Container ref={this.sectionRefs[0]} sx={{height: windowSize.height - 124, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                    <Card style={{textAlignVertical: "center", textAlign: "center", width: "520px", margin: "50px auto", padding: "20px"}}>
                        <CardContent>
                            {this.state.evaluation !== -1 ?
                                <div>
                                    <Typography variant="h5">{this.state.evaluationName} by {this.state.owner}</Typography>
                                    <br/><br/>
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
                                    onClick={this.startQuiz.bind(this)}
                                    disabled={this.state.name === "" || this.state.evaluation === null}
                            >Let's go!</Button>
                        </CardActions>
                        }
                    </Card>
                </Container>
                {this.state.evaluation &&
                    this.state.enabledSections.map((section, i) => (
                        <div ref={this.sectionRefs[i+1]}>
                            <Section section={section}
                                     updateAnswer={this.updateAnswer.bind(this)}
                                     getRef={this.getRef.bind(this)}
                                     flashingQuestion={this.state.flashingQuestion}
                            />
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
                            <Button variant="contained" color="primary" size="large" style={{margin: "auto"}}
                                    onClick={this.sendAnswers.bind(this)}
                                    disabled={this.state.submitted || this.state.evaluation === null}
                            >{this.state.submitted ? "Submitted" : "Submit answers"}</Button>
                        </CardActions>
                    </Card>
                </Container>
                }
            </div>
        )
    }
}

export default usingWindowSize(Questionnaire);
