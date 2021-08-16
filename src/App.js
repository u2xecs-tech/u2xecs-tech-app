import 'react-perfect-scrollbar/dist/css/styles.css';
import {useRoutes} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core';
import GlobalStyles from './theme/GlobalStyles';
import theme from './theme/index';
import dashboardRoutes from './dashboard/routes';
import questionnaireRoutes from './questionnaire/routes';

const App = () => {
    const routing = useRoutes([...dashboardRoutes, ...questionnaireRoutes]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            {routing}
        </ThemeProvider>
    );
};

export default App;