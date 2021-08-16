import {Box, Button, TextField, Typography} from "@material-ui/core";
import React from "react";

class Section extends React.Component {
    constructor(props) {
        super(props);
        let answers = Array(props.questions.length).fill(null)
        this.state = {
            answers: answers.map(() => {
                return {
                    answer: 0,
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
        this.props.updateAnswer(this.props.sections, question, newAnswers[question])
    }

    setComment(evt) {
        const question = evt.target.attributes.question.value
        const newAnswers = this.state.answers
        newAnswers[question].comment = evt.target.value
        this.setState({ answers: newAnswers })
        this.props.updateAnswer(this.props.sections, question, newAnswers[question])
        console.log(newAnswers)
    }

    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                {
                    this.props.questions.map((question, idx) => (
                        <div key={question}>
                            <h3>{idx + 1} - {question}</h3>
                            <Box>
                                <Button variant="contained" question={idx} answer={1} onClick={this.setAnswer.bind(this)} color={ this.state.answers[idx].answer === 1 ? "primary" : "secondary"} sx={{mx: 1}}>I totally disagree</Button>
                                <Button variant="contained" question={idx} answer={2} onClick={this.setAnswer.bind(this)} color={ this.state.answers[idx].answer === 2 ? "primary" : "secondary"} sx={{mx: 1}}>I partially disagree</Button>
                                <Button variant="contained" question={idx} answer={3} onClick={this.setAnswer.bind(this)} color={ this.state.answers[idx].answer === 3 ? "primary" : "secondary"} sx={{mx: 1}}>I neither agree nor
                                    disagree</Button>
                                <Button variant="contained" question={idx} answer={4} onClick={this.setAnswer.bind(this)} color={ this.state.answers[idx].answer === 4 ? "primary" : "secondary"} sx={{mx: 1}}>I partially agree</Button>
                                <Button variant="contained" question={idx} answer={5} onClick={this.setAnswer.bind(this)} color={ this.state.answers[idx].answer === 5 ? "primary" : "secondary"} sx={{mx: 1}}>I totally agree</Button>
                            </Box>
                            {this.state.answers[idx].answer !== 5 && this.state.answers[idx].answer !== 0 && <Typography variant="p" sx={{mx: 1}}>Based on the statement above and your answer, describe the satisfaction issues you identified in the system.</Typography>}
                            <br/>
                            {this.state.answers[idx].answer !== 5 && this.state.answers[idx].answer !== 0 && <TextField inputProps={{question: idx}} multiline onChange={this.setComment.bind(this)}/>}
                            <br/><br/>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Section;