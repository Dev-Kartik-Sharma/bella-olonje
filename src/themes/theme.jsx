import { createTheme } from '@mui/material/styles';

const theme = createTheme({

    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#FFFFFF',
        },
        info: {
            main: '#FA4A0C',
        }
    },

});

theme.typography.h1 = {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: 48,
    letterSpacing: 0.2,
}

theme.typography.h2 = {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 32,
    letterSpacing: 0.2,
}

theme.typography.h3 = {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: 18,
}

theme.typography.subtitle1 = {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 21,
    letterSpacing: 0.1,
}

export default createTheme(theme);
