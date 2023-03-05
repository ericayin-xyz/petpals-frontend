import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { styled } from '@mui/material/styles';
import { Colors } from '../styled/Theme';
import { lighten } from 'polished';

const StyledButton = styled(Button)({
    backgroundColor: Colors.primary,
    color: Colors.black,
    textTransform: 'none',
    fontSize: 16,
    width: '25rem',
    borderRadius: '60px',
    marginTop: '30px',
    justifyContent: 'center',
    lineHeight: 2.3,
    boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.2);',
    
    '&:hover': {
        boxShadow: `0 0 0 0.1rem ${Colors.primary}`,
        
        // backgroundColor: lighten(.06, Colors.primary),
    },
})

export default function IconLabelButtons(props) {
    return (

            <StyledButton endIcon={<KeyboardArrowRightRoundedIcon />}>
                {props.text}
            </StyledButton>

    );
}


