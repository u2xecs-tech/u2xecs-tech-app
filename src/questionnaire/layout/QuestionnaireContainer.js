import {useParams} from "react-router";
import Questionnaire from "../Questionnaire";
import {useState} from "react";
import LoadingOverlay from "react-loading-overlay";

const QuestionnaireContainer = () => {
    const {link} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const didLoad = () => {
        setIsLoading(false);
    }

    return (
        <LoadingOverlay active={isLoading} spinner styles={{
            content: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            spinner: (base) => ({
                ...base,
                height: "100%"
            })
        }}>
            <Questionnaire link={link} didLoad={didLoad}/>
        </LoadingOverlay>
    )
}

export default QuestionnaireContainer;