import { Box, Container, styled } from "@mui/material";
import { Colors } from './Theme'

export const StyledContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        maxwidth: '1400px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '30px',
    background: Colors.secondary,
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '70px',
}))

export const ContentContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '120px 35px 70px 35px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5% 6%',
    paddingBottom: '50px',
    background: Colors.primary,
}))

export const AddCardContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '70px 0px 20px 0px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8% 5% 0 5%',
}))

export const ServiceContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 5%',
    marginBottom: '100px',
})

export const ServiceBox = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        padding: '20px 50px',
        margin: '20px',
        maxWidth: '900px',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px',
    padding: '30px 20px',
    // borderRadius: '30px',
    Width: '100px',
    // boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.2);',
}))


export const IconBox = styled(Box)({
    padding: '30px',
    display: 'flex',
    marginRight: '1rem',
})


export const OptionBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginTop: 80, 
        maxWidth: '1000px' 
    },
    flexGrow: 1, 
    marginTop: 60, 
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