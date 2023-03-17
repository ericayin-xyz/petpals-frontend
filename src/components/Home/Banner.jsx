import { BannerContainer, BannerContent, BannerDescription, BannerImage } from "../styled/Banner"


export default function Banner() {
    return (
        <BannerContainer sx={{paddingTop: 10}}>
            <BannerImage src="./images/cat.jpeg" />
            <BannerContent>
                <BannerDescription>
                    <h1 style={{fontSize: '10rem', left: 0}}>"</h1>
                    <h3>
                    This is a place where pet owners can easily find reliable and caring sitters, and where sitters can showcase their skills and passion for pet care.
                    </h3>
                    <h1 style={{fontSize: '10rem', position: 'absolute', right: 3}}>"</h1>
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    )
} 