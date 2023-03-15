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

    // const [value, setValue] = useState(2);

    // function newRating(value) {
    //     setValue(value)
    // }
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
        <ContentContainer id='reviews' style={{ backgroundColor: Colors.secondary, marginTop: 50, paddingBottom: 60 }}>
            
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
