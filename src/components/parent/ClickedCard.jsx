import { useEffect } from "react";
import Review from './Review';
import Stack from '@mui/material/Stack';
import { CardReviewWrapper, CardText, CardTitle, CardDescription } from '../styled/Card'
import { ContentContainer } from '../../components/styled/StyledContainer';
import { Colors } from '../../components/styled/Theme'

export default function ClickedCard(props) {
    const card = props.card

    useEffect(() => {
        const handleHashChange = () => {
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    if (!card) {
        return null;
    }
    return (
        <ContentContainer id='reviews' style={{ backgroundColor: Colors.secondary }}>
            
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 8 }} style={{maxWidth: '1000px'}}>
                <CardReviewWrapper>
                    <img style={{ height: 150, marginBottom: '30px' }}
                        src={card.image}
                        alt={'sitter'} />

                    <CardTitle>{card.name}</CardTitle>
                    <CardText>E: {card.email}</CardText>
                    <CardText>M: {card.phone}</CardText>
                    <CardText>Experience: {card.experience}</CardText>
                    <CardText>City: {card.city}</CardText>
                    <CardDescription>{card.description}</CardDescription>
                </CardReviewWrapper>
                <Review />
            </Stack>
        </ContentContainer>
    )
}
