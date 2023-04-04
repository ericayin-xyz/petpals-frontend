import { Box } from "@mui/material"
import { Footertext } from '../styled/Font'
import { Colors } from '../styled/Theme';

export default function Footer() {
    return (
        <Box className="footer-container" sx={{justifyContent: 'space-between'}}>
            <Box
                sx={{
                    height: { xs: '5rem', md: '4rem' },
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    borderTop: `1px solid ${Colors.white}`,
                    position: 'static',
                    zIndex: 99,
                    bgcolor: Colors.white,
                }}
            >
                <Footertext>@ 2023 PetPals</Footertext>
            </Box>
        </Box>
    )
}