import { styled, Typography } from "@mui/material";
import { Colors } from "./Theme";

export const Bodytext = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
    fontSize: '1.8rem',
    textAlign: 'center',
    // lineHeight: '2rem',
}))

export const Footertext = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },
    fontSize: '0.9rem',
    textAlign: 'center',
    fontWeight: 'lighter',
}))

export const IconTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '1.6rem',
        marginLeft: '1.5rem',
    },
    marginLeft: '1rem',
    fontSize: '1.2rem',
    fontWeight: 'lighter',
    color: Colors.black
}))

export const StepTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '1.6rem',
    },
    marginTop: '.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: Colors.black
}))

export const Icontext = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
        marginLeft: '1.5rem',
    },
    marginTop: '1.1rem',
    fontSize: '1rem',
    fontWeight: 'lighter',
    textAlign: 'center',
    color: Colors.black
}))

 