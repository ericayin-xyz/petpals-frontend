import { styled } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";


export const MainPageBanner = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        padding: '20px 0 0 0',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: '100px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
}))

export const BannerContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '0 1rem 0 1rem',
        flexDirection: 'row',
        paddingTop: '55px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: '80px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
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
    maxWidth: '65%',
}))