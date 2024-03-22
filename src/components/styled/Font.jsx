import { styled, Typography } from "@mui/material";
import { Colors } from "./Theme";

export const Bodytext = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '4rem',
    },
    fontSize: '3rem',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: Colors.blue,
    textAlign: 'center',
}))

export const ServiceText = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '15px',
        paddingLeft: '2rem',
        maxWidth: '100%',
    },
    fontSize: '18px',
    textAlign: 'left',
    lineHeight: '1.7rem',
    bond: 'light',
    maxWidth: '72%',
}))

export const Footertext = styled('span')(({ theme }) => ({
    fontSize: '0.8rem',
    textAlign: 'center',
    fontWeight: '300',
}))

// export const IconTitle = styled(Typography)(({ theme }) => ({
//     [theme.breakpoints.up('md')]: {
//         fontSize: '1.6rem',
//         marginLeft: '1.5rem',
//     },
//     marginLeft: '1rem',
//     fontSize: '1.2rem',
//     fontFamily: 'Montserrat',
//     // fontWeight: 'lighter',
//     color: Colors.blue
// }))

export const StepTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
    },
    fontFamily: 'Montserrat',
    fontWeight: '800',
    marginTop: '.4rem',
    fontSize: '1.5rem',
}))

export const Icontext = styled('span')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '14px',
    },
    marginTop: '1.3rem',
    fontSize: '15px',
    fontWeight: 'light',
    textAlign: 'center',
    lineHeight: 1.6
}))

export const ReviewDescription = styled('span')(({ theme }) => ({
    display: 'flex',
    textAlign: 'left',
    marginLeft: '-1',
    fontWeight: '800',
    fontSize: '13px',
    lineHeight: 1.5,
}))