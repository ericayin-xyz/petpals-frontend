import FindingSitter from '../components/parent/FindingSitter';
import StepIntro from '../components/parent/StepIntro';
import React, { useEffect } from "react";


const PetParent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div id="Petparent">
            <StepIntro />
            <FindingSitter />
        </div>
    )
}

export default PetParent