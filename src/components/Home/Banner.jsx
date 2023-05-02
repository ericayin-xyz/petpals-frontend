import { BannerContainer, BannerContent, BannerDescription, BannerImage } from "../styled/Banner"

export default function Banner() {
    return (
        <BannerContainer>
            <BannerImage src="./images/dog.jpg" />
            <BannerContent>
                <BannerDescription>
                    <h2 style={{fontSize: '7rem', fontFamily: "Indie Flower"}}>"</h2>
                    <h3 style={{fontSize: '1.8rem', fontFamily: "Indie Flower"}} >
                    This is a place where pet owners can easily find reliable and caring sitters, and where sitters can showcase their skills and passion for pet care.                                                               
                    </h3>
                    <h2 style={{fontSize: '7rem', fontFamily: "Indie Flower",position: 'absolute', right: 3}}>"</h2>
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    )
} 