import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { Colors } from '../Theme';

export const BannerContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        height: '100%',
        paddingTop: '80px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: '100px',
    background: Colors.primary,

}))

export const BannerContent = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        paddingRight: '40px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 780,
    width: '100%',
    height: '100%',
}))

export const BannerDescription = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        lineHeight: 2,
        letterSpacing: 1.2,
        marginLeft: '3rem',
        width: '90%',
    },
    lineHeight: 1.5,
    letterSpacing: 1,
    marginBottom: '8em',
    marginTop: '3.5em',
    fontSize: '25px',
    width: '80%',
    position: 'relative',
    flexDirection: 'column',
    fontColor: Colors.black,
}))

export const BannerImage = styled('img')(({ src, theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: '45rem',
        maxWidth: '55%',
    },
    src: `url(${src})`,
    width: '45rem',
    maxWidth: '90%',
}))