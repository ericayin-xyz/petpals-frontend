import { Box, Container, styled } from "@mui/material";
import { Colors } from './Theme';

export const StyledContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        maxwidth: '1300px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const ButtonGroupContainer = styled(Box)({
    padding: '80px 0px 90px 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    background: Colors.blue,
})

export const AdContainer = styled(Box)(({ theme }) => ({
    display: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: Colors.white,
    width: '100%',
}))

export const ContentContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '7rem 20px 5rem 20px',
        minHeight: '700px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '7% 6%',
}))

export const SittersContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '5rem 1.5rem 5rem 1.5rem',
        minHeight: '700px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5% 6%',
}))

export const ReviewContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        // padding: '7rem 20px 5rem 20px',
        minHeight: '700px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
}))

export const PostReview = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: '100%',
        maxWidth: '800px' ,
        marginTop: '7rem'
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    // alignItems: 'center',
    padding: '5rem 4rem',
}))


export const AddCardContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '110px 0px 0px 0px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '90px 0 0 0',
}))

export const ServiceContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '80px',
    // [theme.breakpoints.down('md')]: {
        // flexDirection: 'column', 
        // width: '100%'
    // },
}))

export const ServiceBox = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flexDirection: 'column',
        minWidth: '480px',
        width: '20erm',
        boxSizing: 'border-box',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '15px',
    padding: '10px 20px',
    Width: '100%',
}))

export const IconBox = styled(Box)({
    padding: '30px',
    display: 'flex',
    color: Colors.blue,
})

export const OptionBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginTop: 90, 
        maxWidth: '1000px' 
    },
    flexGrow: 1, 
    marginTop: 60, 
    marginBottom: 60
}))

export const CardBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginTop: 80, 
    },
    flexGrow: 1, 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
}))