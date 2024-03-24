import { Box, styled, } from '@mui/system'
import { IconButton, Button } from '@mui/material';
import theme, { Colors } from './Theme';

export const CardWrapper = styled(Box)(({ theme }) => ({
    padding: '130px 42px 30px 42px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: '0px 0px 10px 0.6px rgba(0, 0, 0, 0.2)',
    borderRadius: '20px',
    transition: '0.3s',
    cursor: 'pointer',
    minHeight: '390px',
    transparent: '80%',
    position: 'relative',
    ' &:hover': {
        boxShadow: '0px 0px 10px 1px rgba(4, 5, 5, 0.4)'
    },
    [theme.breakpoints.up('md')]: {
        position: 'relative',
        maxWidth: '450px',
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
    background: Colors.primary,
    opacity: 0.9,

}))

export const CardText = styled(Box)({
    display: 'flex',
    textAlign: 'center',
    fontWeight: '800',
    fontSize: '12px',
    lineHeight: 1.5,
})

export const CardDescription = styled(Box)(({ theme }) => ({
    display: 'flex',
    textAlign: 'center',
    fontWeight: '800',
    fontSize: '12px',
    lineHeight: 1.5,
    marginTop: '20px',
    // [theme.breakpoints.up('md')]: {
    //     textAlign: 'left',
    // }
}))

export const CardTitle = styled(Box)(({ theme }) => ({
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: '20px',
    marginBottom: '0.5rem',
    marginTop: '0.8rem',
}))

export const CardReviewWrapper = styled(Box)(({ theme }) => ({
    padding: '3% 7%',
    marginTop: '6rem',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'left',
    borderRadius: '30px',
    height: '100%',
    width: '80%',
    boxShadow: '0px 0px 10px 0.6px rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        maxWidth: '950px',
        marginTop: '4.5rem',
    }
}))

export const CardReviewDetail = styled(Box)(({ theme }) => ({
    paddingTop: 30, 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '400px',
    marginBottom: '30px', 
    [theme.breakpoints.up('md')]: {
        paddingTop: '1.5rem',
        marginLeft: '2.5rem',
        height: 150, 
        // position: 'relative',
    }
}))

export const ReviewText = styled(Box)({
    display: 'flex',
    fontWeight: '800',
    fontSize: '15px',
    lineHeight: 2,
    textAlign: 'left',
})

export const ReviewDescription = styled(Box)({
    [theme.breakpoints.up('md')]: {
        padding: '0',
        marginTop: '2rem',
    },
    marginTop: '-1rem',
    display: 'flex',
    fontSize: '13px',
    lineHeight: 1.8,
    textAlign: 'left',
    padding: '6%'
})