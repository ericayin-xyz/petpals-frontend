import { createTheme } from '@mui/material/styles';

export const Colors = {
    primary: '#edede9',
    secondary: '#ffffff',
    white: '#fffcf2',
    black: '#000814',
    background: '#edede9',
    danger: "#e3d5ca",
    success: "#d62828",
    button_bg: '#a5a58d',
}

const theme = createTheme({
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    height: 'auto',
                    width: '100%',
                    background: Colors.primary,
                    borderRadius: '0px 170px 0px 0px',
                    padding: '20px 30px 30px 30px',
                },
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    colors: Colors.black,
                    margin: '10px',
                    fontWeight: 'bolder'
                }
            }
        },

    }
});


export default theme;