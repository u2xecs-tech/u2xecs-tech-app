import {Box, Button, TextField, Typography} from "@material-ui/core";
import React from "react";
import labels from '../theme/labels';
import colors from "../theme/colors";
import {getAbsoluteNumber, quiz} from "../quiz";

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.section = props.section
        this.getRef = props.getRef
        this.questions = quiz[Object.keys(quiz)[props.section]]
        this.title = Object.keys(quiz)[this.section]

        this.state = {
            answers: Array(this.questions.length).fill(null).map(() => {
                return {
                    answer: null,
                    comment: null
                }
            })
        };
    }

    setAnswer(evt) {
        const question = evt.target.attributes.question.value
        const answer = evt.target.attributes.answer.value
        const newAnswers = this.state.answers
        newAnswers[question].answer = parseInt(answer)
        this.setState({ answers: newAnswers })
        this.props.updateAnswer(this.props.section, question, newAnswers[question])
    }

    setComment(evt) {
        const question = evt.target.attributes.question.value
        const newAnswers = this.state.answers
        newAnswers[question].comment = evt.target.value
        this.setState({ answers: newAnswers })
        this.props.updateAnswer(this.props.section, question, newAnswers[question])
        console.log(newAnswers)
    }

    getOpacity(idx, i) {
        if (this.state.answers[idx].answer == null) {
            return 1
        }
        return this.state.answers[idx].answer === i ? 1 : 0.4
    }

    isRed(idx) {
        return getAbsoluteNumber(this.props.section, idx) === this.props.flashingQuestion
    }

    render() {
        return (
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: 8,
            }}>
                <Typography variant="h1">{this.title}</Typography>
                {
                    this.questions.map((question, idx) => (
                        <Box ref={this.getRef(this.props.section, idx)} key={getAbsoluteNumber(this.props.section, idx)} sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            py: 4,
                            maxWidth: 880,
                        }}>
                            <Typography variant="h4" sx={{m: 1, color: this.isRed(idx) ? "red" : "black"}}>
                                {getAbsoluteNumber(this.props.section, idx)+1}. {question}
                            </Typography>
                            <Box>
                                {labels.map((label, i) => (
                                    <Button variant="contained"
                                            question={idx} answer={i}
                                            onClick={this.setAnswer.bind(this)}
                                            sx={{
                                                width: 160,
                                                height: 60,
                                                m: 1,
                                                opacity: this.getOpacity(idx, i),
                                                background: colors[i],
                                                '&:hover': {
                                                    // background: colors[i],
                                                }
                                            }}>
                                        {label}
                                    </Button>
                                ))}
                            </Box>
                            {this.state.answers[idx].answer !== 0 && this.state.answers[idx].answer !== null &&
                                <Typography variant="p" sx={{mt: 2, mx: 1}}>Based on the statement above and your answer, describe the {this.title} issues you identified in the system.</Typography>
                            }
                            {this.state.answers[idx].answer !== 0 && this.state.answers[idx].answer !== null &&
                                <TextField inputProps={{question: idx}} multiline onChange={this.setComment.bind(this)} sx={{width: "98%", m: 1}}/>
                            }
                        </Box>
                    ))
                }
            </Box>
        )
    }
}

export default Section;