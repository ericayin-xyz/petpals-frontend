import { styled } from "@mui/material/styles";
import { Box, Typography, Container } from "@mui/material";
import theme, { Colors } from '../Theme';

export const BannerContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: '100px',
    // backgroundColor: Colors.dk_primary,

}))

export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 780,
    width: '100%',
    height: '100%',
    padding: '30px',
}))


export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.8,
    letterSpacing: 1.4,
    marginBottom: '3em',
    fontSize: '25px',
    width: '90%',
    marginLeft: '3rem',
    position: 'relative',
    flexDirection: 'column',
    padding: '0px, 50px, 0px, 0px',
    [theme.breakpoints.down('sm')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em',
        padding: '0px, 50px, 0px, 0px',
    },
}))

export const BannerImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: '50%',


    [theme.breakpoints.down('sm')]: {
        // width: '220px',
        // height: '300px',
    }
}))