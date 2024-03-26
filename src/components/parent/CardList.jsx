import { BannerContainer } from '../styled/Banner';
import { SittersContainer } from '../styled/StyledContainer';
import Grid from '@mui/material/Grid';
import Card from './Card';
import useApi from "../utils/useApi"


export default function CardList(props) {
    const [ifCardsWithoutReviewAndImage] = useApi('/petparent')

    const defaultImageUrl = "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light"

    const cards = ifCardsWithoutReviewAndImage.map((card, index) => {
        if (!card.image) {
            return { ...card, image: defaultImageUrl };
        }
        return card;
    })

    return (
        <BannerContainer style={{boxShadow: 'none'}}>
            <SittersContainer maxWidth={'1300px'}  sx={{ flexGrow: 1, minHeight: '80vh' }}>
                <Grid container 
                    spacing={{ xs: 3, sm: 4, md: 6 }}  
                    columns={{ xs: 4, sm: 8, md: 16 }}
                >
                    {
                        cards.map((card, index) => {
                            return (
                                <Grid item key={`${card.someUniqueProperty}-${index}`} xs={4} sm={4} md={4} sx={{ mb: 3 }} >
                                    <Card
                                        cardInfo={card}
                                        setCard={props.setCard}
                                    />
                                </Grid>
                                
                            )
                        })
                    }
                </Grid>
            </SittersContainer>
        </BannerContainer >
    )
}