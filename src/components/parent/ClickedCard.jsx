import styled from 'styled-components';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from './Card';
import Review from './Review';
import Stack from '@mui/material/Stack';
import { CardReviewWrapper, CardText, CardTitle } from '../styled/Card'

const ReviewWapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: write;
`

export default function ClickedCard(props) {
    const card = props.card
    // const [card, setCard] = useState(null)
    // const { cardId } = useParams()

    // useEffect(() => {
    //     axios.get(`sitters/${cardId}`)
    //     .then((res) => res.data)
    //     .then((json) => {
    //         setCard({
    //             ...json,
    //         })
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }, [cardId])


    if (!card) {
        return null;
    }
    return (
        <div id='Reviews'>
            <ReviewWapper direction="row" spacing={2}>
                <h1>Reviews</h1>
                <Stack direction="row" spacing={8}>
                    <CardReviewWrapper>
                        <img style={{ height: 180, marginBottom: '20px' }}
                            src={card.image}
                            alt={'sitter-photo'} />

                        <CardTitle>{card.name}</CardTitle>
                        <CardText>Experience: {card.experience}</CardText>
                        <CardText>City: {card.city}</CardText>
                        <CardText>M: {card.phone}</CardText>
                        <CardText>E: {card.email}</CardText>
                        <CardText style={{ fontSize: '14px', marginTop: '15px', textAlign: 'left' }}>{card.description}</CardText>


                    </CardReviewWrapper>
                    <Review />

                </Stack>
            </ReviewWapper>
        </div>
    )
}
