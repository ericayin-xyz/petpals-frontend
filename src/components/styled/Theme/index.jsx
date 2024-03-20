import { createTheme } from '@mui/material/styles';

export const Colors = {
    primary: '#FED736',
    yellow: '#FED736',
    white: '#F3F0ED',
    black: '#26201E',
    blue: '#118ab2',
    background: '#332824',
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
                    background: Colors.white,
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