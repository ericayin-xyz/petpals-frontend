import { Box, styled, } from '@mui/system'
import { IconButton, Button } from '@mui/material';
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

export const CardTitle = styled(Box)(({ theme }) => ({
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: '23px'
}))


export const CardReviewWrapper = styled(Box)(({ theme }) => ({
    padding: '30px 20px',
    marginTop: '30px',
    display: 'flex',
    width: '500px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: '30px',
    transition: '0.3s',
    cursor: 'pointer',
    minHeight: '350px',
    // backgroundColor: Colors.secondary,

    [theme.breakpoints.up('md')]: {
        position: 'relative',
        maxWidth: '400px',
    }
}))