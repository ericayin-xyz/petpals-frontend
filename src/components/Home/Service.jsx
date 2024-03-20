import { ServiceContainer, StyledContainer, ServiceBox, IconBox } from '../styled/StyledContainer'
import PinDropIcon from '@mui/icons-material/PinDrop';
import LightModeIcon from '@mui/icons-material/LightMode';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ParkIcon from '@mui/icons-material/Park';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ServiceText, Bodytext } from '../styled/Font'


const message = [
    "Come to your home and take care of your pet while you're away. They will play with your pets, offer food and water, give potty breaks or clean the litter box, and provide any other necessary care.",
    "Spends the day at your sitter’s home. Drop them off in the morning and pick up a happy pup in the evening.",
    "Provide round-the-clock care for your pet, and stay overnight in your sitter’s home.",
    "Take your dog for a walk while you're away. Perfect for busy days and dogs with extra energy to burn.",
    "Provide transportation for your pet to and from appointments, such as vet visits."
]

const Title = [
    'Drop-In Visits', 'Day Care', 'Overnight Care', 'Dog Walking', 'Pet Taxi'
]

const icons = [<PinDropIcon sx={{ fontSize: 45 }} />, <LightModeIcon sx={{ fontSize: 45 }} />, <Brightness4Icon sx={{ fontSize: 45 }} />, <ParkIcon sx={{ fontSize: 45 }} />, <AirportShuttleIcon sx={{ fontSize: 45 }} />];

export default function Service() {
    return (
        <StyledContainer>            
            <Bodytext variant='h1' style={{ marginTop: 140, marginBottom: 20 }}>
                Customize Your Service
            </Bodytext>
            <ServiceContainer style={{ maxWidth: '700px'}}>
                {Title.map((title, index) => (
                    <ServiceBox key={index}>
                        <IconBox>{icons[index]}</IconBox>
                        <ServiceText>
                            <span>{title}: {message[index]}</span>
                        </ServiceText>
                    </ServiceBox>
                ))}
            </ServiceContainer>
        </StyledContainer>
    );
}