import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../styled/Banner"

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src="./images/cat.jpeg" />
            <BannerContent>
                <BannerDescription>
                    <h1 style={{fontSize: '10rem', left: 0}}>"
                    </h1>This is a place where pet owners can easily find reliable and caring sitters, and where sitters can showcase their skills and passion for pet care.
                    <h1 style={{fontSize: '10rem', position: 'absolute', right: 3}}>"</h1>
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    )
} 