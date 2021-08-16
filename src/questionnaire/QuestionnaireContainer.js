import {useParams} from "react-router";
import Questionnaire from "./Questionnaire";

const QuestionnaireContainer = () => {
    const {link} = useParams();

    return (
        <Questionnaire link={link}/>
    )
}

export default QuestionnaireContainer;