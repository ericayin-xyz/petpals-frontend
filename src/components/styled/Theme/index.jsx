import { createTheme } from '@mui/material/styles';

export const Colors = {
    primary: '#F1F7FF',
    secondary: '#F1F7FF',
    white: '#fffcf2',
    blue: '#252ED9',
    background: '#edede9',
    danger: "#e3d5ca",
    success: "#d62828",
    button_bg: '#252ED9',
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
                    colors: Colors.blue,
                    margin: '10px',
                    fontWeight: 'bolder'
                }
            }
        },

    }
});


export default theme;