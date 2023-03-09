import styled from 'styled-components';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from './Card';
import Review from './Review';


// const GridBox = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     padding: 10px;
// `
const DetailWapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function ClickedCard(props) {
    const [card, setCard] = useState(null)
    const { cardId } = useParams()
    // const card = props.card

    useEffect(() => {
        axios.get(`sitters/${cardId}`)
        .then((res) => res.data)
        .then((json) => {
            setCard({
                ...json,
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }, [cardId])

    if (!card) {
        return null;
    }
    return (
        <div id='clickedcard'>
            <DetailWapper>
                <h1>Card Details</h1>
                <Card cardInfo={card}/>
            </DetailWapper>
            <Review />
        </div>
    )
}
