import { CardWrapper, CardText, CardDescription, CardTitle } from '../styled/Card'
import React, { useState } from "react";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Stack from '@mui/material/Stack';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Divider from '@mui/material/Divider';
import { CardButton } from '../styled/Button';
import Rating from '@mui/material/Rating';
import { HashLink } from 'react-router-hash-link';
import { Colors } from '../styled/Theme/index';

export default function Card(props) {
    const [showDetails, setShowDetails] = useState(false);
    const [clickedCard, setClickedCard] = useState(null);

    const handleCardClick = (id) => {
        if (id === clickedCard) {
            setShowDetails(!showDetails);
        } else {
            setShowDetails(!showDetails);
            setClickedCard(id);
        }
    };

    const card = props.cardInfo

    function handleAddReview(e) {
        e.stopPropagation()
        handleCardClick(props.setCard(card))
    }

    return (
        <CardWrapper onClick={() => handleCardClick(card.id)}>
            <img
                // style={{  marginBottom: '20px' }}
                style={{ height: 110, position: 'absolute', top: '20px', marginBottom: '20px', zIndex: 1 }}
                src={card.image}
                alt={'sitter-card'}
            />
            <CardTitle>{card.name}</CardTitle>
            <CardText>Experience:  {card.experience}</CardText>
            <CardText>{card.address}</CardText>
            {showDetails && (
                <Stack spacing={0.5} paddingBottom={2.5}>
                    <Divider />
                    <Stack direction="row" spacing={1.5} paddingLeft={0.5}>
                        <PhoneAndroidIcon style={{
                            marginTop: '2px',
                            fontSize: '13px', 
                            color: Colors.black,
                        }} />
                        <CardText>{card.phone}</CardText>
                    </Stack>
                    <Stack direction="row" spacing={1.5} paddingLeft={0.5} paddingBottom={1}>
                        <AlternateEmailIcon style={{
                            marginTop: '3px',
                            fontSize: '13px', 
                            color: Colors.black,
                        }} />
                        <CardText>{card.email}</CardText>
                    </Stack>
                    <Divider />
                </Stack>
            )}
            {showDetails ? (
                <CardText>{card.description}</CardText>
            ) : (
                <CardDescription style={{
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
                >{card.description}</CardDescription>
            )}
            <CardText style={{ paddingTop: '15px' }}><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /></CardText>
            <HashLink to='#reviews' >
                <CardButton onClick={handleAddReview} >Reviews</CardButton>
            </HashLink>
        </CardWrapper>
    )
}
