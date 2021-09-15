import {Outlet} from 'react-router-dom';
import {experimentalStyled} from '@material-ui/core';
import QuestionnaireNavbar from "./QuestionnaireNavbar";

const QuestionnaireLayoutRoot = experimentalStyled('div')(
    ({theme}) => ({
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    })
);

const QuestionnaireLayoutWrapper = experimentalStyled('div')(
    ({theme}) => ({
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64,
    })
);

const QuestionnaireLayoutContainer = experimentalStyled('div')({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
});

const QuestionnaireLayoutContent = experimentalStyled('div')({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
});

const QuestionnaireLayout = () => {
    return (
        <QuestionnaireLayoutRoot>
            <QuestionnaireNavbar/>
            <QuestionnaireLayoutWrapper>
                <QuestionnaireLayoutContainer>
                    <QuestionnaireLayoutContent>
                        <Outlet/>
                    </QuestionnaireLayoutContent>
                </QuestionnaireLayoutContainer>
            </QuestionnaireLayoutWrapper>
        </QuestionnaireLayoutRoot>
    );
};

export default QuestionnaireLayout;
