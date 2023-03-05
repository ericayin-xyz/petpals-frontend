import { Box, Container, styled } from "@mui/material";
import { Colors } from './Theme'

export const StyledContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '60px 0px 0px 0px',
        maxwidth: '1400px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '70px',
    // background: Colors.dk_primary,
}))

export const ButtonGroupContainer = styled(Box)({
    padding: '60px 0px 90px 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    background: Colors.secondary,
})

export const AdContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '70px',
    // background: Colors.dk_primary,
}))

export const ContentContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '50px 35px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '7% 6%',
}))

export const ServiceBox = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        padding: '35px 50px',
        margin: '20px',
        maxWidth: '900px',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px',
    padding: '35px 20px',
    borderRadius: '30px',
    Width: '100px',
    border: `1px solid ${Colors.black}`,
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
    },
    flexGrow: 1, 
    marginTop: 45, 
    maxWidth: '1000px' 
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