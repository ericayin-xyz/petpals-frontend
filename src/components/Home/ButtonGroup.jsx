import { ButtonGroupContainer } from '../styled/StyledContainer'
import Stack from '@mui/material/Stack';
import { Bodytext } from '../styled/Font';
import { StyledLinkButtonOnHomePage } from '../styled/Button';
import { Colors } from "../styled/Theme";

export default function ButtonGroup() {

    return (
        <ButtonGroupContainer>
            <Bodytext variant='h1' sx={{color: Colors.white}}>
                What Would You Like To Do?
            </Bodytext>
            <Stack
                direction={{ xs: 'column', md: 'column' }}
                spacing={{ xs: 3, md: 4}}
                marginTop={'75px'}
                alignItems={'center'}
                display={'flex'}
                adjustPosition={'center'}
            >
                <StyledLinkButtonOnHomePage to='/petparent'>
                {'FIND A PET SITTER'}
                </StyledLinkButtonOnHomePage>
                <StyledLinkButtonOnHomePage to='/petsitter'>
                {'BECOME A PET SITTER'}
                </StyledLinkButtonOnHomePage>
            </Stack>
        </ButtonGroupContainer>
    )
}