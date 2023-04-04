// import { Bodytext } from '../styled/Font';
// import { ButtonGroupContainer } from '../styled/StyledContainer';
// import Grid from '@mui/material/Unstable_Grid2';
// import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
// import { IconTitle } from '../styled/Font'
// import BlindIcon from '@mui/icons-material/Blind';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import NightsStayIcon from '@mui/icons-material/NightsStay';
// import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
// import { OptionBox } from '../styled/StyledContainer';
import { StyledLinkButton } from '../styled/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { Colors } from '../styled/Theme'


const Item = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginBottom: 100,
        marginTop: 10,
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.blue,
    marginBottom: 60,
}));



export default function FindingSitter() {

    return (
            <Item sx={{
                bgcolor:Colors.white,
            }}>
                {/* <OptionBox sx={{marginBottom: '70px'}}>
                    <Grid container spacing={2.2}>
                        <Grid xs={6} md={4}>
                            <Item>
                                <LightModeIcon fontSize='large' />
                                <IconTitle>Day Care</IconTitle>
                            </Item>
                        </Grid>

                        <Grid xs={6} md={4}>
                            <Item>
                                <NightsStayIcon fontSize='large' />
                                <IconTitle>Overnight Care</IconTitle>
                            </Item>
                        </Grid>

                        <Grid xs={6} md={4}>
                            <Item>
                                <LocalTaxiIcon fontSize='large' />
                                <IconTitle>Pet Taxi</IconTitle>
                            </Item>
                        </Grid>

                        <Grid xs={6} md={6}>
                            <Item>
                                <BlindIcon fontSize='large' />
                                <IconTitle>Dog Walking</IconTitle>
                            </Item>
                        </Grid>

                        <Grid xs={12} md={6}>
                            <Item>
                                <MapsHomeWorkIcon fontSize='large' />
                                <IconTitle>Drop-In Visits</IconTitle>
                            </Item>
                        </Grid>
                    </Grid>
                </OptionBox> */}
                <StyledLinkButton
                    to={'/petparent/sitters'}> 
                    FIND YOUR SITTER
                </StyledLinkButton>
            </Item>
    )
}