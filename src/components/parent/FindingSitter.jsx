import { StyledLinkButton } from '../styled/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

const Item = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginTop: 10,
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
}));

export default function FindingSitter() {
    return (
            <Item>
                <StyledLinkButton
                    to={'/petparent/sitters'}> 
                    FIND YOUR SITTER
                </StyledLinkButton>
            </Item>
    )
}