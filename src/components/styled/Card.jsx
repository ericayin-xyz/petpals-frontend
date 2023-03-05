import { Box, styled, } from '@mui/system'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { IconButton, Button, show } from '@mui/material';
import theme, { Colors } from './Theme';


export const CardWrapper = styled(Box)(({ theme }) => ({
    padding: '28px 35px 32px 35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: '0px 0px 10px 0.1px rgba(0, 0, 0, 0.1)',
    borderRadius: '30px',
    transition: '0.3s',
    cursor: 'pointer',
    minHeight: '500px',
    backgroundColor: Colors.secondary,
    ' &:hover': {
        boxShadow: '0px 0px 10px 1px rgba(4, 5, 5, 0.3)'
    },

    [theme.breakpoints.up('md')]: {
        position: 'relative',
        maxWidth: '400px',
    }
}))

export const CardActionButton = styled(IconButton)(() => ({
    background: Colors.primary,
    margin: 4,
}))

export const AddToCard = styled(Button)(() => ({
    width: '120px',
    fontSize: '12px',
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        buttom: '2%',
        width: '300px',
        padding: '10px 5px',
    },
    background: Colors.secondary,
    opacity: 0.9,

}))

export const CardText = styled(Box)(({ theme }) => ({
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
}))

export const CardActionWapper = styled(Box)(({ isfav, theme }) => ({
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        // display: show ? 'visible' : 'none',
        right: 0,
        top: '20%',
    }
}))


