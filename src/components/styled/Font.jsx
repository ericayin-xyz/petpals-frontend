import { styled, Typography } from "@mui/material";
import { Colors } from "./Theme";

export const Bodytext = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
    fontSize: '2.5rem',
    color: Colors.black,
}))

export const ServiceText = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '1.4rem',
        paddingLeft: '2rem',
    },
    fontSize: '1.6rem',
    textAlign: 'center',
    lineHeight: '2rem',
}))

export const Footertext = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '0.8rem',
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
    color: Colors.blue
}))

export const StepTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '1.6rem',
    },
    marginTop: '.5rem',
    fontSize: '1.2rem',
    color: Colors.black
}))

export const Icontext = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '0.9rem',
        // marginLeft: '1.5rem',
    },
    marginTop: '1.2rem',
    fontSize: '1rem',
    fontWeight: 'lighter',
    textAlign: 'center',
    color: Colors.background
}))


