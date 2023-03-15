import { BannerContainer } from '../styled/Banner';
import { ContentContainer } from '../styled/StyledContainer';
import Grid from '@mui/material/Unstable_Grid2';
import Card from './Card';
import useApi from "../utils/useApi"


export default function CardList(props) {
    const [cardsWithoutReviewAndImage] = useApi('/cards')
    const cards = cardsWithoutReviewAndImage.map((card) => {
        card.image = "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light"
        return card
    })

    return (
        <BannerContainer >
            <ContentContainer maxWidth={'1200px'} sx={{ flexGrow: 1, minHeight: '90vh', padding: '20px 40px' }}>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        cards.map((card) => {
                            return (
                                <Grid xs={4} sm={4} md={4} >
                                    <Card
                                        key={"Sitter Card" + card.id}
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