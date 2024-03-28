import StepIntro from '../components/parent/StepIntro';
import React, { useEffect } from "react";
import { Stack } from '@mui/material';
import Sitters from '../components/parent/Sitters';
import { useLocation } from 'react-router-dom';


const PetParent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const location = useLocation();
    const scrollTo = location.state?.scrollTo;

    useEffect(() => {
        if (scrollTo) {
            const element = document.getElementById(scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [scrollTo]); 
    
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