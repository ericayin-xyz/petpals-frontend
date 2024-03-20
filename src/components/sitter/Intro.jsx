import React from 'react'
import { ContentContainer } from '../styled/StyledContainer';
import { Bodytext } from '../styled/Font';
import { Colors } from '../styled/Theme'
import { styled, Stack } from '@mui/material';
import { BannerContainer } from '../styled/Banner';
import { OptionBox } from '../styled/StyledContainer';
import Grid from '@mui/material/Grid';
import { Icontext, StepTitle } from '../styled/Font'
import Filter1SharpIcon from '@mui/icons-material/Filter1Sharp';
import Filter2SharpIcon from '@mui/icons-material/Filter2Sharp';
import Filter3SharpIcon from '@mui/icons-material/Filter3Sharp';


const Item = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        height: '270px',
        padding: '0px 25px',
    },
    padding: '50px 50px',
    spacing: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.black,
    border: `1px solid ${Colors.blue}`,
    borderRadius: 30,
}));

const StepTitles = ['Post Job', 'Connect', 'Hire']

const messages = [
    'To get started, introduce about yourself and what services you provided.', 'Post a job, review profiles, then message candidates who fit your needs.', 'Conduct interviews, check references, and hire the one that works for you.'
]

const Icons = [<Filter1SharpIcon style={{ color: Colors.blue }} />, <Filter2SharpIcon  style={{ color: Colors.blue }}/>, <Filter3SharpIcon style={{ color: Colors.blue }} />]

function Intro() {
    return (
        <BannerContainer>
            <ContentContainer>
                <Bodytext variant="h1">
                    Get Started In 3 Easy Steps
                </Bodytext>
                <OptionBox>
                    <Grid container spacing={3}>
                        {StepTitles.map((title, index) => (
                            <Grid item xs={12} md={4} key={index}>
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

export default Intro
