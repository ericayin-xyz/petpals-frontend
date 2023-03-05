import CustomizedButtons from "../styled/Button"
import StyledButton from '../styled/Button';
import { ButtonGroupContainer } from '../styled/StyledContainer'
import Stack from '@mui/material/Stack';
import { Bodytext } from '../styled/Font';
import { StyledLinkButton } from '../styled/Button';

export default function ButtonGroup() {

    return (
        <ButtonGroupContainer>
            <Bodytext>
                <h1>What would you like to do?</h1>
            </Bodytext>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 3, sm: 4, md: 6}}
                marginTop={'60px'}
                alignItems={'center'}
                display={'flex'}
                adjustPosition={'center'}
            >
                <StyledLinkButton to='/petparent'>
                {'Find a Pet Sitter'}
                </StyledLinkButton>
                <StyledLinkButton to='/petsitter'>
                {'Become a Pet Sitter'}
                </StyledLinkButton>
            </Stack>
        </ButtonGroupContainer>
    )
}