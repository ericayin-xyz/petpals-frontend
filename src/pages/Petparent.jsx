import FindingSitter from '../components/parent/FindingSitter';
import StepIntro from '../components/parent/StepIntro';
import React, { useEffect, useState } from "react";
import { styled, Stack } from '@mui/material';
import { Colors } from '../components/styled/Theme';
import Review from '../components/parent/Review';
import { CardReviewWrapper } from '../components/styled/Card'
import CardList from '../components/parent/CardList';
import ClickedCard from '../components/parent/ClickedCard';


const Paper = styled(Stack)({
    backgroundColor: Colors.primary
})

const PetParent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [clickedCard, setClickedCard] = useState(null)

    function setCard(card) {
        setClickedCard(card)
    }

    return (
        <Paper id="Petparent" sx={{
            minHeight: '100vh'
        }}>
            <StepIntro />
            <FindingSitter />
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 8 }} style={{ maxWidth: '1000px' }}>
                <CardReviewWrapper>
                    <Review />
                </CardReviewWrapper>
                <CardList setCard={setCard} />
                <ClickedCard card={clickedCard} />
            </Stack>
        </Paper>
    )
}

export default PetParent