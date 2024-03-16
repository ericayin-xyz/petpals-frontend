import { margin } from "polished";
import { MainPageBanner, BannerContent, BannerDescription, BannerImage } from "../styled/Banner"
import { Colors } from "../styled/Theme";
import Intro from "../Home/SlidingAd";

export default function Banner() {
    const quoteStyle = {
        fontSize: '7rem',
        fontFamily: "Indie Flower",
        color: Colors.blue,
        alignSelf: 'flex-start',
        // paddingTop: '10px',
    };

    const descriptionStyle = {
        fontSize: '1.3rem',
        fontFamily: "Indie Flower",
        padding: '0 0.5rem',
    };

    const closingQuoteStyle = {
        ...quoteStyle,
        // position: 'absolute',
        alignSelf: 'flex-end',
    };

    return (
        <MainPageBanner>
            <BannerImage src="./images/dog2.jpg" />
            <BannerContent>
                <BannerDescription>
                    <span style={quoteStyle}>“</span>
                    <div style={descriptionStyle}>
                        THIS IS A PLACE WHERE PET OWNERS CAN EASILY FIND RELIABLE AND CARING SITTERS, AND WHERE SITTERS CAN SHOWCASE THEIR SKILLS AND PASSION FOR PET CARE.
                    </div>
                    <span style={closingQuoteStyle}>”</span>   
                    <Intro />        
                </BannerDescription>
                
            </BannerContent>
        </MainPageBanner>
    )
} 