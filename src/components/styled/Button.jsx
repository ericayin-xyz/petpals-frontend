import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Colors } from './Theme';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';


const BootstrapButton = styled(Button)({
    textTransform: 'none',
    fontSize: 18,
    padding: '7px 38px',
    borderRadius: '60px',
    lineHeight: 1.5,
    '&:hover': {
        backgroundColor: Colors.primary,
        borderColor: 'secondary',
    },
    '&:active': {
        backgroundColor: lighten(1, Colors.primary),
    },
});

export const LinkedButton = styled(Button)({
    textTransform: 'none',
    fontSize: 13,
    letterSpacing: 1.2,
    padding: '9px 10px',
    borderRadius: '20px',
    backgroundColor: Colors.blue,
    color: Colors.white,
    width: '22rem',
    '&:hover': {
        backgroundColor: lighten(0.07, Colors.blue),
        boxShadow: '0px 0px 8px rgba(0, 0, 0.4, 0.3);',
    },
});

export const LinkedButtonOnHomePage = styled(Button)({
    textTransform: 'none',
    fontSize: 13,
    padding: '8px 0',
    borderRadius: '20px',
    backgroundColor: Colors.white,
    color: Colors.black,
    width: '400px',
    '&:hover': {
        backgroundColor: lighten(0.09, Colors.white),
        boxShadow: '0px 0px 8px rgba(0, 0, 0.4, 0.3);',
    },
});

export default function CustomizedButtons(props) {
    return (
        <Stack spacing={2} direction="row">
            <BootstrapButton variant="contained" onClick={props.onClick} disableRipple>
                {props.text}
            </BootstrapButton>
        </Stack>
    );
};

export const SelectionButton = styled(Button)(({ props }) => ({
    padding: '80px 0px 40px 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'lightblue',
}))

export const StyledLinkButtonOnHomePage = ({ to, children }) => {
    return (
        <Link
            to={to}
            style={{ textDecoration: 'none' }}
        ><LinkedButtonOnHomePage>{children}</LinkedButtonOnHomePage> </Link>
    )
}

export const StyledLinkButton = ({ to, children }) => {
    return (
        <Link
            to={to}
            style={{ textDecoration: 'none' }}
        ><LinkedButton>{children}</LinkedButton> </Link>
    )
}

export const CardButton = styled(Button)({
    textTransform: 'none',
    fontSize: 12,
    letterSpacing: 0.5,
    marginTop: '12px',
    padding: '3px 15px 1px 15px',
    color: Colors.blue,
    position: 'relative',
    overflow: 'hidden', 
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        width: '65%',
        height: '1px',
        backgroundColor: Colors.blue,
        transition: 'width 0.7s ease 0.2s ',
        transform: 'translateX(-50%)',
    },
    '&:hover::after': {
        width: '100%',
        transition: 'width 0.5s ease',
    },
    '&:hover': {
        backgroundColor: Colors.white,
        width: '100%',
    },
    // textTransform: 'none',
    // fontSize: 12,
    // letterSpacing: 0.5,
    // marginTop: '12px',
    // padding: '5px 15px',
    // color: Colors.blue,
    // textDecoration: 'underline',
    // borderBottom: '1px solid transparent', 
    // transition: 'border-bottom 0.5s ease, color 0.5s ease, background-color 0.5s ease',
    // '&:hover': {
    //     // borderBottom: `1px solid ${Colors.blue}`,
    //     color: Colors.black,
    //     backgroundColor: Colors.white,

    // },
});

export const ReviewButton = styled(Button)({
    textTransform: 'none',
    fontSize: 13,
    fontWeight: 'lighter',
    marginTop: '12px',
    padding: '3px 8px',
    borderRadius: '5px',
    border: '1px solid black',
    color: Colors.black,
    '&:hover': {
        // backgroundColor: Colors.primary,
        boxShadow: '0px 1px 3px rgba(0, 0, 6, 0.5);',
        // border:' 0px solid black',
    },
});
