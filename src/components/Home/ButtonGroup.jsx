import { ButtonGroupContainer } from '../styled/StyledContainer'
import Stack from '@mui/material/Stack';
import { Bodytext } from '../styled/Font';
import { StyledLinkButton } from '../styled/Button';

export default function ButtonGroup() {

    return (
        <ButtonGroupContainer>
            <Bodytext variant='h1'>
                What Would You Like To Do?
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
                {'FIND A PET SITTER'}
                </StyledLinkButton>
                <StyledLinkButton to='/petsitter'>
                {'BECOME A PET SITTER'}
                </StyledLinkButton>
            </Stack>
        </ButtonGroupContainer>
    )
}