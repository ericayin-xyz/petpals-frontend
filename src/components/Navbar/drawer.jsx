import { Divider, Drawer, List, ListItemButton } from "@mui/material"
import { styled } from '@mui/system';
import { useNavContext } from './NavContext'
import { DrawerCloseButton,StyledDrawerLink } from '../styled/Navbar'
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

    const { drawerOpen, setDrawerOpen } = useNavContext()

    return (
        <div>
            {drawerOpen && (
                <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                    <CloseIcon
                        sx={{
                            fontSize: '4.5rem',
                            backgroundColor: lighten(0.08, Colors.primary),
                            color: Colors.black,
                            borderRadius: '50%',
                            padding: '1rem',
                            boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.3)',
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
                    <StyledDrawerLink to='/'>
                        <ListItemButton sx={{ padding: '25px 0px 25px 50px' }}>
                            <DoorbellIcon sx={{ marginRight: '50px', fontSize: '2.1rem' }} />Home
                        </ListItemButton>
                    </StyledDrawerLink>
                    <MiddleDivider />

                    <StyledDrawerLink to='/petparent'>
                        <ListItemButton sx={{ padding: '30px 0px 30px 50px' }}>
                            <PetsIcon sx={{ marginRight: '50px', fontSize: '2.1rem' }} />Pet Parent
                        </ListItemButton>
                    </StyledDrawerLink>
                    <MiddleDivider />

                    <StyledDrawerLink to='/petsitter'>
                        <ListItemButton sx={{ padding: '30px 0px 30px 50px' }}>
                            <AssignmentIndIcon sx={{ marginRight: '50px', fontSize: '2.1rem' }} />Pet Sitter
                        </ListItemButton>
                    </StyledDrawerLink>

                </List>
            </Drawer>
        </div>

    )
}

