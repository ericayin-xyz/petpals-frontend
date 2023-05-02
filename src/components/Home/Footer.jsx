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
                    // borderTop: `.9px solid ${Colors.white}`,
                    position: 'sticky',
                    bottom: 0,
                    zIndex: 99,
                    // bgcolor: Colors.black,
                    mt: 'auto',
                    color: Colors.black,
                }}
            >
                <Footertext>@ 2023 PetPals</Footertext>
            </Box>
        </Box>
    )
}