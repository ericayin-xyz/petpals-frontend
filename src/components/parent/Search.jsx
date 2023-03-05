import React from 'react';
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../styled/Banner';
import { ContentContainer } from '../styled/StyledContainer';
import { Bodytext } from '../styled/Font';
import { OptionBox } from '../styled/StyledContainer';
import { Box, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconLabelButtons from './IconButton'
import TextField from '@mui/material/TextField';
import { StyledLinkButton, LinkedButton } from '../styled/Button';
import CartList from './CardList'

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormPropsTextFields from './IconButton';



const steps = ['Step 1', 'Step 1', 'Step 3'];
const questions = ['What needs looking after ?', 'What does your dog need ?', 'What is your postcode ?']
const selections = ['a', 'b', 'c', 'd']

export default function Search() {

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 3;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const searching = () => {
        <OptionBox>
            <Box>
                <Bodytext>
                    <h3>What needs looking after?</h3>
                </Bodytext>
                <Stack
                    direction={'column'}
                    spacing={3}
                    marginTop={'40px'}
                    alignItems={'center'}
                    display={'flex'}
                    adjustPosition={'center'}
                >
                    <IconLabelButtons text={'Dogs'} />
                    <IconLabelButtons text={'Cats'} />
                </Stack>
            </Box>
        </OptionBox>
    }

    return (
        <BannerContainer>
            <Container maxWidth={'1200px'}>
                <ContentContainer>
                    <Bodytext>
                        <h1>Let's find your perfect pet sitter</h1>
                    </Bodytext>
                    <OptionBox width={'100%'}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                if (isStepSkipped(index)) {
                                    stepProps.completed = false;
                                }
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                            {/* {questions.map((question, index) => {
                                const questionProps = {};
                                if (isQuestionSkipped(index)) { 
                                    questionProps.completed = false;
                                }
                                return (
                                    <Q key={question} {...}

                                );
                            })

                            } */}
                        </Stepper>



                        {activeStep === steps.length ? (
                            <React.Fragment>

                                <CartList />
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: '35vh' }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <LinkedButton onClick={handleReset}>Back</LinkedButton>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>

                                {/* Step1---------------------------------------------------------------- */}


                                {/* Step2---------------------------------------------------------------- */}


                                {/* Step3---------------------------------------------------------------- */}
                                <OptionBox>
                                    <Bodytext>
                                        <h3>What's your postcode ?</h3>
                                    </Bodytext>
                                    <Stack
                                        direction={'column'}
                                        spacing={3}
                                        m={'40px'}
                                        alignItems={'center'}
                                        display={'flex'}
                                    >
                                        {/* Postcode Input Box */}
                                        <Box
                                            sx={{ '& .MuiTextField-root': { m: 5, width: '20rem' }, }} noValidate
                                        >
                                            <OptionBox>
                                                <Bodytext>
                                                    <h3>What does your dog need ?</h3>
                                                </Bodytext>
                                                <Stack
                                                    direction={'column'}
                                                    spacing={3}
                                                    marginTop={'40px'}
                                                    alignItems={'center'}
                                                    display={'flex'}
                                                    adjustPosition={'center'}
                                                >
                                                    <IconLabelButtons text={'Day Care'} />
                                                    <IconLabelButtons text={'Transportation'} />
                                                    <IconLabelButtons text={'Overnight Sitting'} />
                                                    <IconLabelButtons text={'Walking'} />
                                                    <IconLabelButtons text={'Grooming'} />

                                                </Stack>
                                            </OptionBox>

                                        </Box>

                                    </Stack>
                                </OptionBox>




                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: '5vh' }}>

                                    <LinkedButton onClick={handleReset} sx={{ mr: 2 }}> Reset</LinkedButton>
                                    <LinkedButton disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>Back</LinkedButton>

                                    <Box sx={{ flex: '1 1 auto' }} />
                                    {isStepOptional(activeStep) && (
                                        <LinkedButton onClick={handleSkip} sx={{ mr: 2 }}>Skip</LinkedButton>
                                    )}
                                    <LinkedButton onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</LinkedButton>
                                </Box>
                            </React.Fragment>
                        )}
                    </OptionBox>
                </ContentContainer>
            </Container>
        </BannerContainer>
    )
}







