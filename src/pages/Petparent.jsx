// import FindingSitter from '../components/parent/FindingSitter';
import StepIntro from '../components/parent/StepIntro';
import React, { useEffect } from "react";
import { styled, Stack } from '@mui/material';
import { Colors } from '../components/styled/Theme';
// import Review from '../components/parent/Review';
// import { CardReviewWrapper } from '../components/styled/Card'
// import CardList from '../components/parent/CardList';
// import ClickedCard from '../components/parent/ClickedCard';
import Sitters from '../components/parent/Sitters';

const Paper = styled(Stack)({
    backgroundColor: Colors.white
})

const PetParent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    // const [clickedCard, setClickedCard] = useState(null)

    // function setCard(card) {
    //     setClickedCard(card)
    // }

    return (
        <Paper id="Petparent" sx={{
            minHeight: '100vh'
        }}>
            <StepIntro />
            {/* <FindingSitter /> */}
            <Sitters />
                {/* <CardReviewWrapper>
                    <Review />
                </CardReviewWrapper>
                <CardList setCard={setCard} />
                <ClickedCard card={clickedCard} /> */}
        </Paper>
    )
}

export default PetParent