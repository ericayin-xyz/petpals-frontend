import CardRating from './Rating';
import { CardWrapper, CardText } from '../styled/Card'
import { useNavigate } from "react-router-dom"
import React, { useState } from "react";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Stack from '@mui/material/Stack';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import Divider from '@mui/material/Divider';
import { CardButton } from '../styled/Button';

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
    const navigate = useNavigate()

    function handleAddReview(e) {
        e.stopPropagation()
        navigate(`product/${card._id}`)
    }
    
    return (
        <CardWrapper onClick={() => handleCardClick(card.id)}>

            <img style={{ height: 180, marginBottom: '20px' }} src={card.image} alt={'sitter-card'} />

                <CardText>{card.name}</CardText>
                <CardText>{card.experience}</CardText>
                <CardText>{card.city}</CardText>
                {showDetails && (
                    <Stack direction="column" spacing={0.5}>
                        <Divider />
                        <Stack direction="row" spacing={1} sx={{ width: '200px' }}>
                            <PhoneAndroidIcon fontSize={'small'} />
                            <CardText>{card.phone}</CardText>
                        </Stack>
                        <Stack direction="row" spacing={1} sx={{ width: '200px' }}>
                            <MarkEmailUnreadIcon fontSize={'small'} />
                            <CardText>{card.email}</CardText>
                        </Stack>
                    </Stack>
                )}
                <CardText><h5>{card.description}</h5></CardText>
                <CardText><CardRating value={card.point} /></CardText>
                <CardButton onClick={handleAddReview}><h5>Review</h5></CardButton>

        </CardWrapper>
    )
}
