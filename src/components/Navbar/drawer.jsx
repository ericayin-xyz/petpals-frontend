import { Divider, Drawer, List, ListItemButton } from "@mui/material"
import { styled } from '@mui/system';
import { useNavContext } from './NavContext'
import { DrawerCloseButton } from '../styled/Navbar'
import { Colors } from '../styled/Theme'
import CloseIcon from '@mui/icons-material/Close';
import { lighten } from 'polished';
import DoorbellIcon from '@mui/icons-material/Doorbell';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Link } from 'react-router-dom';

const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))``;


export default function AppDrawer() {

    const { drawerOpen, setDrawerOpen } = useNavContext()
    const linkStyle = { textDecoration: 'none', color: Colors.black }
    const handleItemClick = () => {
        drawerOpen(false);
    };

    return (
        <>
            {drawerOpen && (
                <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                    <CloseIcon
                        sx={{
                            fontSize: '4.3rem',
                            backgroundColor: lighten(0.1, Colors.primary),
                            color: Colors.black,
                            borderRadius: '50%',
                            padding: '1rem',
                            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'rotate(135deg)',
                            },
                        }}
                    />
                </DrawerCloseButton>
            )}

            <Drawer open={drawerOpen} anchor="bottom">
                <List>
                    <Link to='/' style={linkStyle} onClick={handleItemClick}>
                        <ListItemButton sx={{ padding: '20px 0px 30px 50px' }}>
                            <DoorbellIcon sx={{ marginRight: '30px', fontSize: '2.6rem' }} />
                            <Typography variant="h6">Home</Typography>
                        </ListItemButton>
                    </Link>
                    <MiddleDivider />

                    <Link to='/petparent' style={linkStyle} onClick={handleItemClick}>
                        <ListItemButton sx={{ padding: '30px 0px 30px 50px' }}>
                            <PetsIcon sx={{ marginRight: '30px', fontSize: '2.6rem' }} />
                            <Typography variant="h6">Pet Parent</Typography>
                        </ListItemButton>
                    </Link>
                    <MiddleDivider />

                    <Link to='/petsitter' style={linkStyle} onClick={handleItemClick}>
                        <ListItemButton sx={{ padding: '30px 0px 30px 50px' }}>
                            <AssignmentIndIcon sx={{ marginRight: '30px', fontSize: '2.6rem' }} />
                            <Typography variant="h6">Pet Sitter</Typography>
                        </ListItemButton>
                    </Link>

                </List>
            </Drawer>
        </>

    )
}

