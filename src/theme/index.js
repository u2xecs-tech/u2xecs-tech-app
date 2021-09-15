import {colors, createTheme} from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';
import choiceColors from './colors'

const theme = createTheme({
    palette: {
        background: {
            default: '#F4F6F8',
            paper: colors.common.white
        },
        primary: {
            contrastText: '#ffffff',
            main: '#5664d2'
        },
        text: {
            primary: '#172b4d',
            secondary: '#6b778c'
        },
        secondary: {
            contrastText: '#ffffff',
            main: '#929292'
        },
        choice1: {
            contrastText: '#ffffff',
            main: choiceColors[0]
        },
        choice2: {
            contrastText: '#ffffff',
            main: choiceColors[1]
        },
        choice3: {
            contrastText: '#ffffff',
            main: choiceColors[2]
        },
        choice4: {
            contrastText: '#ffffff',
            main: choiceColors[3]
        },
        choice5: {
            contrastText: '#ffffff',
            main: choiceColors[4]
        },
    },
    shadows,
    typography
});

export default theme;
