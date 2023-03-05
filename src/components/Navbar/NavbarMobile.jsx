import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { NavbarContainer, NavbarHeader, NavbarMobileWidth } from "../styled/Navbar";
import { useNavContext } from "./NavContext";
import { Colors } from '../styled/Theme'
import { Link } from 'react-router-dom';

export default function NavbarMobile({ matches }) {

    const { setDrawerOpen } = useNavContext()

    const linkStyle = {textDecoration: 'none'}
    
    return (
        <NavbarContainer>
            <NavbarMobileWidth>
                <Link to='/' style={linkStyle}>
                    <NavbarHeader variant="h5">Petpals</NavbarHeader>
                </Link>
                <IconButton size='large' onClick={() => setDrawerOpen(true)}>
                    <MenuIcon sx={{ fontSize: "2.1rem", color: Colors.black }} />
                </IconButton>
            </NavbarMobileWidth>
        </NavbarContainer>
    )
}