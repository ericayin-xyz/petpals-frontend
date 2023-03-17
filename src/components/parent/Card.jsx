import { CardWrapper, CardText, CardTitle } from '../styled/Card'
import React, { useState } from "react";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Stack from '@mui/material/Stack';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Divider from '@mui/material/Divider';
import { CardButton } from '../styled/Button';
import Rating from '@mui/material/Rating';
import { HashLink } from 'react-router-hash-link';

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
    const linkStyle = { 
        textDecoration: 'none',
        width: '100%'
    }

    function handleAddReview(e) {
        e.stopPropagation()
        handleCardClick(props.setCard(card))
    }
    
    return (
        <CardWrapper onClick={() => handleCardClick(card.id)}>

            <img style={{ height: 180, marginBottom: '20px' }} 
            src={card.image} 
            alt={'sitter-card'} />

                <CardTitle>{card.name}</CardTitle>
                <CardText>{card.experience}</CardText>
                <CardText>{card.city}</CardText>
                {showDetails && (
                    <Stack direction="column" spacing={0.9} sx={{marginBottom: '15px'}}>
                        <Divider />
                        <Stack direction="row" spacing={1} sx={{ width: '200px' }}>
                            <PhoneAndroidIcon fontSize={'small'} />
                            <CardText>{card.phone}</CardText>
                        </Stack>
                        <Stack direction="row" spacing={1} sx={{ width: '200px' }}>
                            <AlternateEmailIcon fontSize={'small'} />
                            <CardText>{card.email}</CardText>
                        </Stack>
                        <Divider />
                    </Stack>
                )}
                <CardText style={{fontSize: '13px'}}>{card.description}</CardText>
                <CardText><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /></CardText>
                <HashLink to='#reviews' style={linkStyle}>
                    <CardButton onClick={handleAddReview}>REVIEWS</CardButton>
                </HashLink>

        </CardWrapper>
    )
}
