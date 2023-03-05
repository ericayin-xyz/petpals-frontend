import React from 'react'
import { ContentContainer } from '../styled/StyledContainer';
import { Bodytext } from '../styled/Font';
import { Colors } from '../styled/Theme'
import { styled, Stack } from '@mui/material';
import { BannerContainer } from '../styled/Banner';

import Grid from '@mui/material/Grid';
import { Icontext, StepTitle } from '../styled/Font'
import Filter1SharpIcon from '@mui/icons-material/Filter1Sharp';
import Filter2SharpIcon from '@mui/icons-material/Filter2Sharp';
import Filter3SharpIcon from '@mui/icons-material/Filter3Sharp';


const Item = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        height: '300px',
        padding: '20px 20px',
    },
    padding: '40px 50px',
    spacing: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.black,
    border: `1px solid ${Colors.black}`,
    borderRadius: 30,
}));

const message = [
    "To get started, introduce about yourself and what services you provided.", "Post a job, review profiles, then message candidates who fit your needs.", "Conduct interviews, check references, and hire the one that works for you."
]

function Intro() {
    return (
        <BannerContainer>
            <ContentContainer>
                <Bodytext>
                    <h1>Get started in 3 easy steps</h1>
                </Bodytext>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    maxWidth: '1300px',
                    marginTop: '110px',
                    }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Item>
                                <Filter1SharpIcon fontSize='large' />
                                <StepTitle>Post Job</StepTitle>
                                <Icontext>{message[0]}</Icontext>
                            </Item>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Item>
                                <Filter2SharpIcon fontSize='large' />
                                <StepTitle>Connect</StepTitle>
                                <Icontext>{message[1]}</Icontext>
                            </Item>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Item><Filter3SharpIcon fontSize='large' />
                                <StepTitle>Hire</StepTitle>
                                <Icontext>{message[2]}</Icontext>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </ContentContainer>
        </BannerContainer>
    )
}

export default Intro
