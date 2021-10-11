import {useParams} from "react-router";
import Questionnaire from "../Questionnaire";
import {useState} from "react";
import LoadingOverlay from "react-loading-overlay";

const QuestionnaireContainer = () => {
    const {link} = useParams();

    return (
        <Questionnaire link={link}/>
    )
}

export default QuestionnaireContainer;