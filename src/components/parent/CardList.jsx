import { BannerContainer } from '../styled/Banner';
import { ContentContainer } from '../styled/StyledContainer';
import Grid from '@mui/material/Unstable_Grid2';
import Card from './Card';
import useApi from "../utils/useApi"
import { Colors } from '../../components/styled/Theme'

export default function CardList(props) {
    const [cardsWithoutReviewAndImage] = useApi('/petparent')
    const cards = cardsWithoutReviewAndImage.map((card, index) => {
        card.image = "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light"
        return card
    })

    return (
        <BannerContainer>
            <ContentContainer maxWidth={'1000px'} sx={{ flexGrow: 1, minHeight: '80vh' }}>
                <Grid container spacing={{ xs: 3, md: 5 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {
                        cards.map((card, index) => {
                            return (
                                <Grid item key={`${card.someUniqueProperty}-${index}`} xs={4} sm={4} md={4} >
                                    <Card
                                        cardInfo={card}
                                        setCard={props.setCard}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </ContentContainer>
        </BannerContainer >
    )
}