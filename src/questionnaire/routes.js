import QuestionnaireLayout from "./layout/QuestionnaireLayout";
import QuestionnaireContainer from "./QuestionnaireContainer";

const routes = [
    {
        path: '/questionnaire',
        element: <QuestionnaireLayout/>,
        children: [
            {path: '/:link', element: <QuestionnaireContainer/>},
        ]
    },
];

export default routes;
