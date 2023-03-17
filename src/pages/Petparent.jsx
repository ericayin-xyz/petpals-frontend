import FindingSitter from '../components/parent/FindingSitter';
import StepIntro from '../components/parent/StepIntro';
import React, { useEffect } from "react";
import { styled, Stack } from '@mui/material';
import { Colors } from '../components/styled/Theme';

const Paper = styled(Stack)({
    backgroundColor: Colors.primary
})

const PetParent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Paper id="Petparent">
            <StepIntro />
            <FindingSitter />
        </Paper>
    )
}

export default PetParent