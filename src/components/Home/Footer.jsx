import { Box } from "@mui/material"
import { Footertext } from '../styled/Font'


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
                    borderTop: '1px solid gray',
                    position: 'static',
                    zIndex: 99,
                }}
            >
                <Footertext>@ 2023 PetPals</Footertext>
            </Box>
        </Box>
    )
}