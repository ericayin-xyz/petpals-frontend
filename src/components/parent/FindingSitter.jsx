import { BannerContainer } from '../styled/Banner';
import { Bodytext } from '../styled/Font';
import { ContentContainer } from '../styled/StyledContainer';
import { Colors } from '../styled/Theme'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { IconTitle } from '../styled/Font'
import BlindIcon from '@mui/icons-material/Blind';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { OptionBox } from '../styled/StyledContainer';
import { StyledLinkButton } from '../styled/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';


const Item = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        height: 160,
    },
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.black,
    // background: Colors.primary,
    borderRadius: 20,
    height: 110,
    border: `1px solid ${Colors.black}`,
}));

export default function FindingSitter() {

    return (
        <BannerContainer sx={{ bgcolor: Colors.body_bg }}>
            <ContentContainer sx={{ margin: '50px 0px' }}>
                <Bodytext>
                    <h1>Customize Your Own Service</h1>
                </Bodytext>

                <OptionBox sx={{marginBottom: '70px'}}>
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
                </OptionBox>

                <StyledLinkButton
                to={'/petparent/sitters'}>
                    Search
                </StyledLinkButton>
            </ContentContainer>
        </BannerContainer>
    )
}