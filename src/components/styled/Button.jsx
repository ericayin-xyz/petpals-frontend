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
    borderRadius: '10px',
    backgroundColor: Colors.black,
    color: Colors.white,
    border: `1px solid ${Colors.black}`,
    width: '22rem',
    '&:hover': {
        backgroundColor: lighten(0.06, Colors.black),
        boxShadow: '1px 2px 6px rgba(0, 0, 0.7, 0.8);',
    },
});

export const LinkedButtonOnHomePage = styled(Button)({
    textTransform: 'none',
    fontSize: 13,
    letterSpacing: 1.2,
    padding: '11px 10px',
    borderRadius: '18px',
    backgroundColor: Colors.white,
    color: Colors.black,
    border: `1px solid ${Colors.white}`,
    width: '70vw',
    maxWidth: '450px',
    '&:hover': {
        backgroundColor: lighten(0.09, Colors.white),
        border: `1px solid ${Colors.black}`,
        boxShadow: '1px 2px 8px rgba(0, 0, 1, 0.9);',
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


export const StyledLinkButtonOnHomePage = ({to, children}) => {
    return (
        <Link
            to={to}
            style= {{ textDecoration: 'none' }}
        ><LinkedButtonOnHomePage>{children}</LinkedButtonOnHomePage> </Link>
    )
}

export const StyledLinkButton = ({to, children}) => {
    return (
        <Link
            to={to}
            style= {{ textDecoration: 'none' }}
        ><LinkedButton>{children}</LinkedButton> </Link>
    )
}

export const CardButton = styled(Button)({
    textTransform: 'none',
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: 'lighter',
    width: '100%',
    marginTop: '12px',
    padding: '6px 20px',
    borderRadius: '5px',
    backgroundColor: Colors.button_bg,
    color: Colors.white,
    '&:hover': {
        backgroundColor: lighten(0.04, Colors.button_bg),
        boxShadow: '1px 2px 6px rgba(0, 0, 1, 0.3);',
    },
});

export const ReviewButton = styled(Button)({
    textTransform: 'none',
    fontSize: 13,
    fontWeight: 'lighter',
    marginTop: '12px',
    padding: '3px 8px',
    borderRadius: '5px',
    border:' 1px solid black',
    color: Colors.black,
    '&:hover': {
        // backgroundColor: Colors.button_bg,
        // color: Colors.primary,
        boxShadow: '0px 1px 3px rgba(0, 0, 6, 0.5);',
        // border:' 0px solid black',
    },
});
