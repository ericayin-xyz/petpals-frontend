import { Divider, Drawer, List, ListItemButton, IconButton } from "@mui/material"
import { styled } from '@mui/system';
import { useNavContext } from './NavContext'
import { StyledDrawerLink } from '../styled/Navbar'
import { Colors } from '../styled/Theme'
import CloseIcon from '@mui/icons-material/Close';
import { lighten } from 'polished';
import DoorbellIcon from '@mui/icons-material/Doorbell';
import PetsIcon from '@mui/icons-material/Pets';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))``;

export default function AppDrawer() {

    const { drawerOpen, setDrawerOpen } = useNavContext();

    return (
        <div>
            {drawerOpen && (
                <div style={{
                    position: 'absolute',
                    right: '10px',
                    bottom: '360px',
                    zIndex: 1999,
                }}>
                    <IconButton onClick={() => setDrawerOpen(false)}>
                        <CloseIcon
                            sx={{
                                fontSize: '4.5rem',
                                color: Colors.black,
                                backgroundColor: Colors.white,
                                borderRadius: '50%',
                                padding: '1rem',
                                boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.3)',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'rotate(135deg)',
                                    backgroundColor: lighten(0.08, Colors.white),
                                },
                            }}/>
                    </IconButton>
                </div>
            )}
            
            <Drawer open={drawerOpen} anchor="bottom">
                <List>
                    <StyledDrawerLink to='/'>
                        <ListItemButton sx={{ padding: '25px 0px 25px 50px' }}>
                            <DoorbellIcon sx={{ marginRight: '50px', fontSize: '2.1rem' }} style={{ color: Colors.blue }} />Home
                        </ListItemButton>
                    </StyledDrawerLink>
                    <MiddleDivider />

                    <StyledDrawerLink to='/petparent'>
                        <ListItemButton sx={{ padding: '30px 0px 30px 50px' }}>
                            <PetsIcon sx={{ marginRight: '50px', fontSize: '2.1rem' }} style={{ color: Colors.blue }} />
                            Pet Parent
                        </ListItemButton>
                    </StyledDrawerLink>
                    <MiddleDivider />

                    <StyledDrawerLink to='/petsitter'>
                        <ListItemButton sx={{ padding: '30px 0px 30px 50px' }}>
                            <AssignmentIndIcon sx={{ marginRight: '50px', fontSize: '2.1rem' }} style={{ color: Colors.blue }} />Pet Sitter
                        </ListItemButton>
                    </StyledDrawerLink>
                </List>
            </Drawer>
        </div>
    )
}

