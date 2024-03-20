import StepIntro from '../components/parent/StepIntro';
import React, { useEffect } from "react";
import { Stack } from '@mui/material';
import Sitters from '../components/parent/Sitters';


const PetParent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Stack id="Petparent" sx={{
            minHeight: '100vh'
        }}>
            <StepIntro />
            <Sitters />
        </Stack>
    )
}

export default PetParent