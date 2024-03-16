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
    // marginBottom: '10px',
}))

export const ContentContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '110px 0px 60px 0px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '7% 6%',
    paddingBottom: '50px',
    // background: Colors.primary,
}))

export const AddCardContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '70px 0px 0px 0px',
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
    // padding: '0 5%',
    marginBottom: '80px',
    // [theme.breakpoints.up('md')]: {
    //     flexDirection: 'row'
    // },
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
    // boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.2);',
}))


export const IconBox = styled(Box)({
    padding: '30px',
    display: 'flex',
    // marginRight: '1rem',
    color: Colors.blue,
})


export const OptionBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginTop: 60, 
        maxWidth: '1000px' 
    },
    flexGrow: 1, 
    marginTop: 60, 
    marginBottom: 30
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