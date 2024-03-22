import { useEffect, forwardRef } from "react";
import Review from './Review';
import Stack from '@mui/material/Stack';
import { CardReviewWrapper, CardTitle, ReviewDescription, ReviewText } from '../styled/Card'
import { ReviewContainer } from '../../components/styled/StyledContainer';
import { Colors } from '../../components/styled/Theme'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const ClickedCard = forwardRef((props, ref) => {
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
        <ReviewContainer id='reviews' ref={ref} paddingTop={{ xs: '1.5rem', md: '5rem' }}>
            <CardReviewWrapper>
                {/* <Stack> */}
                <img style={{ marginTop: '30px', height: '7rem' }}
                    src={card.image}
                    alt={'sitter'} />
                {/* </Stack> */}
                <Stack padding={2} paddingLeft={5}>
                    {/* <CardReviewDetail> */}
                    <CardTitle style={{ paddingBottom: '15px', textAlign: 'left' }}>{card.name}</CardTitle>
                    <ReviewText>
                        <PhoneAndroidIcon style={{
                            marginTop: '6px',
                            marginRight: '0.7rem',
                            fontSize: '18px',
                            color: Colors.blue,
                        }} />
                        {card.email}
                    </ReviewText>
                    <ReviewText>
                        <AlternateEmailIcon style={{
                            marginTop: '5.5px',
                            marginRight: '0.7rem',
                            fontSize: '18px',
                            color: Colors.blue,
                        }} />
                        {card.phone}
                    </ReviewText>
                    {card.experience && <ReviewText style={{ marginLeft: '2px', marginTop: '5px' }}>Experience: {card.experience}</ReviewText>}
                    {card.city && <ReviewText style={{ textAlign: 'left' }}>City: {card.city}</ReviewText>}
                    {/* </CardReviewDetail> */}
                </Stack>
                <Stack padding={{ xs: '1rem', md: '3.2rem' }}>
                    <ReviewDescription>{card.description}</ReviewDescription>
                </Stack>
            </CardReviewWrapper>
            <Review />
        </ReviewContainer>
    )
})

export default ClickedCard