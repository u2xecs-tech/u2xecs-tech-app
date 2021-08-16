import {Navigate} from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import Evaluations from "./evaluations/Evaluations";
import Evaluation from "./evaluation/Evaluation";

const routes = [
    {
        path: '/',
        element: <DashboardLayout/>,
        children: [
            {path: '/', element: <Navigate to="evaluations"/>},
            {path: 'evaluations', element: <Evaluations/>},
            {path: 'evaluation/:id', element: <Evaluation/>},
        ]
    },
];

export default routes;
