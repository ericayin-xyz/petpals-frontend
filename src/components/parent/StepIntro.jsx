import React from 'react'
import { BannerContainer } from '../styled/Banner';
import { ContentContainer } from '../styled/StyledContainer';
import { Bodytext } from '../styled/Font';
import { OptionBox } from '../styled/StyledContainer';
import { Colors } from '../styled/Theme'
import { styled, Stack } from '@mui/material';

import Grid from '@mui/material/Grid';
import { Icontext, StepTitle } from '../styled/Font'

import Filter1SharpIcon from '@mui/icons-material/Filter1Sharp';
import Filter2SharpIcon from '@mui/icons-material/Filter2Sharp';
import Filter3SharpIcon from '@mui/icons-material/Filter3Sharp';
import Filter4SharpIcon from '@mui/icons-material/Filter4Sharp';


const Item = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        height: 270,

    },
    padding: '40px 50px',
    spacing: 3,
    alignItems: 'center',
    justifyContent: 'center',
    direction: 'column',
    color: Colors.black,
    border: `1px solid ${Colors.black}`,
    borderRadius: 30,
}));

const message = [
    "Read verified reviews by pet parents like you and choose a sitter who’s a great match for you and your pets.", "Schedule a free virtual or in-person Meet & Greet to find the perfect fit (Optional).", "We make it simple to book through our website or app.", "Your pets are in great hands with a loving sitter."
]

function StepIntro() {
    return (
        <BannerContainer >
            <ContentContainer>
            <Bodytext>
                <h1>Meet Local Sitters</h1>
            </Bodytext>
            <OptionBox>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Item>
                            <Filter1SharpIcon fontSize='large' />
                            <StepTitle>Search</StepTitle>
                            <Icontext><h5>{message[0]}</h5></Icontext>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Item>
                            <Filter2SharpIcon fontSize='large' />
                            <StepTitle>Meet</StepTitle>
                            <Icontext><h5>{message[1]}</h5></Icontext>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Item><Filter3SharpIcon fontSize='large' />
                            <StepTitle>Book</StepTitle>
                            <Icontext><h5>{message[2]}</h5></Icontext>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item><Filter4SharpIcon fontSize='large' />
                            <StepTitle>Relax</StepTitle>
                            <Icontext><h5>{message[3]}</h5></Icontext></Item>
                    </Grid>
                </Grid>
            </OptionBox>
            </ContentContainer>
        </BannerContainer>
    )
}

export default StepIntro
