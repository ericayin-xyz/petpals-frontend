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
        padding: '40px 50px',

    },
    padding: '30px 50px',
    spacing: 3,
    alignItems: 'center',
    justifyContent: 'center',
    direction: 'column',
    color: Colors.black,
    border: `1px solid ${Colors.blue}`,
    borderRadius: 30,
}));

const Icons = [<Filter1SharpIcon style={{ color: Colors.blue }} />, <Filter2SharpIcon style={{ color: Colors.blue }} />, <Filter3SharpIcon style={{ color: Colors.blue }} />, <Filter4SharpIcon style={{ color: Colors.blue }} />]

const StepTitles = ['Search', 'Meet', 'Book', 'Relax']

const messages = [
    'Read verified reviews by pet parents like you and choose a sitter who’s a great match for you and your pets.', 
    'Schedule a free virtual or in-person Meet & Greet to find the perfect fit (Optional).', 
    'We make it simple to book through our website or app.', 'Your pets are in great hands with a loving sitter.'
]

function StepIntro() {
    return (
        <BannerContainer>
            <ContentContainer>
                <Bodytext variant='h1'>
                    Meet Local Sitters
                </Bodytext>
                <OptionBox>
                    <Grid container spacing={3}>
                        {StepTitles.map((title, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Item>
                                    {Icons[index]}
                                    <StepTitle style={{ color: Colors.blue }}>{title}</StepTitle>
                                    <Icontext>{messages[index]}</Icontext>
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                </OptionBox>
            </ContentContainer>
        </BannerContainer>
    )
}

export default StepIntro
