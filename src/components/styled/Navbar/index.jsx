import * as React from 'react';
import { List, Typography, IconButton}  from "@mui/material";
import { styled } from "@mui/material/styles"
import { Box } from "@mui/material"
import '@fontsource/montez';
import {Colors} from "../Theme"
import { Link } from 'react-router-dom';


export const NavbarContainer = styled(Box)(() => ({
    display: 'flex',
    height: '75px',
    // backgroundColor: Colors.white,
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1);',
    alignItems: 'center',
    width: '100%',
    position: 'fixed',
    top: 0,
    opacity: 0.85,
    zIndex: 99,
}));

export const NavbarDesktopWidth = styled(Box)(() => ({
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    maxWidth: '1800px',
    paddingRight: '2rem',
    paddingLeft: '1rem',
}));

export const NavbarMobileWidth = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: '1.8rem',
    paddingRight: '1rem',
}));


export const NavbarHeader = styled(Typography)(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: '2.3em',
    },
    fontSize: '2.7em',
    flexGrow: 2,
    fontFamily: "Montez",
    color: Colors.black,
}))

export const NavList = styled(List)({
    display: 'flex',
    flexGrow: 3,
    justifyContent: 'right',
})


export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'fixed',
    top: '51vh',
    right: 18,
    zIndex: 1999,
}))


export const StyledLink = ({to, children}) => {
    return (
        <Link
            to={to}
            style= {{ textDecoration: 'none', color: Colors.black, fontSize: '1.2rem', padding:'2rem' }}
        > {children}</Link>
    )
}