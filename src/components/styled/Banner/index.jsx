import { styled } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";
import { Colors } from '../Theme';

export const MainPageBanner = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        // height: '100%',
        padding: '80px 0 2px 0',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: '50px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.3)',
}))

export const BannerContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        // height: '100%',
        paddingTop: '55px',

    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: '80px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.3)',
}))

export const BannerContent = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        paddingRight: '0px',
        paddingTop: '0rem',

    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 750,
    width: '100%',
    height: '100%',
}))

export const BannerDescription = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        lineHeight: 2,
        letterSpacing: 1.2,
        paddingTop: '3rem',
        width: '80%',
        minWidth: '300px',
    },
    lineHeight: 1.5,
    letterSpacing: 1,
    marginBottom: '2rem',
    marginTop: '2rem',
    width: '80%',
    display: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}))

export const BannerImage = styled('img')(({ src, theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: '35rem',
    },
    src: `url(${src})`,
    position: 'relative',
    zIndex: 10,
    // width: '30rem',
    maxWidth: '65%',
}))