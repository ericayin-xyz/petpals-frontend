import { darken, styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import theme from './Theme'
import { Colors } from './Theme';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';
import { shadows } from '@mui/system';


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
    fontSize: 15,
    fontWeight: 'lighter',
    padding: '9px 10px',
    borderRadius: '5px',
    backgroundColor: Colors.primary,
    color: Colors.black,
    width: '12rem',
    '&:hover': {
        // backgroundColor: Colors.black,
        backgroundColor: lighten(0.04, Colors.primary),
        boxShadow: '1px 2px 6px rgba(0, 0, 1, 0.3);',
    },
    '&:disabled': {
        backgroundColor: 'transparent',
    }
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
    fontSize: 15,
    width: '100%',
    fontWeight: 'lighter',
    marginTop: '10px',
    padding: '6px 20px',
    borderRadius: '5px',
    backgroundColor: Colors.primary,
    color: Colors.black,
    '&:hover': {
        backgroundColor: lighten(0.04, Colors.primary),
        boxShadow: '1px 2px 6px rgba(0, 0, 1, 0.3);',
    },
});