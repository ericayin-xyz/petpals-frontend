import { ButtonGroupContainer } from '../styled/StyledContainer'
import Stack from '@mui/material/Stack';
import { Bodytext } from '../styled/Font';
import { StyledLinkButtonOnHomePage } from '../styled/Button';
import { Colors } from "../styled/Theme";


export default function ButtonGroup() {
    return (
        <ButtonGroupContainer>
            <Bodytext variant='h1' sx={{color: Colors.white, padding: '1rem'}}>
                What Would You Like To Do?
            </Bodytext>
            <Stack
                direction='column'
                spacing={{ xs: 3, md: 4}}
                marginTop={'75px'}
                alignItems={'center'}
                display={'flex'}
            >
                <StyledLinkButtonOnHomePage to='/petparent'>
                {'Find a Pet Sitter'}
                </StyledLinkButtonOnHomePage>
                <StyledLinkButtonOnHomePage to='/petsitter'>
                {'Become a Pet Sitter'}
                </StyledLinkButtonOnHomePage>
            </Stack>
        </ButtonGroupContainer>
    )
}