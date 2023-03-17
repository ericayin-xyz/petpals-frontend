import { ServiceContainer, StyledContainer, ServiceBox, IconBox } from '../styled/StyledContainer'
import PinDropIcon from '@mui/icons-material/PinDrop';
import LightModeIcon from '@mui/icons-material/LightMode';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ParkIcon from '@mui/icons-material/Park';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ServiceText, Bodytext } from '../styled/Font'
import Intro from './SlidingAd'

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

export default function Service() {

    return (
        <StyledContainer>
            <Intro />
            <Bodytext variant='h1' style={{marginTop: 90, marginBottom: 50}}>
                Why Us ?
            </Bodytext>

            <ServiceContainer>
                {/* 1 */}
                <ServiceBox>
                    <IconBox><PinDropIcon sx={{ fontSize: 50 }} /></IconBox>
                    <ServiceText textAlign={{ sm: 'center', md: 'left' }}>
                        <h5>{Title[0]}</h5>
                        <h6>{message[0]}</h6>
                    </ServiceText>
                </ServiceBox>


                {/* 2 */}
                <ServiceBox>
                    <IconBox><LightModeIcon sx={{ fontSize: 50 }} /></IconBox>
                    <ServiceText textAlign={{ sm: 'center', md: 'left' }}>
                        <h5>{Title[1]}</h5>
                        <h6>{message[1]}</h6>
                    </ServiceText>
                </ServiceBox>

                {/* 3 */}
                <ServiceBox>
                    <IconBox><Brightness4Icon sx={{ fontSize: 50 }} /></IconBox>
                    <ServiceText textAlign={{ sm: 'center', md: 'left' }}>
                        <h4>{Title[2]}</h4>
                        <h6>{message[2]}</h6>
                    </ServiceText>
                </ServiceBox>

                {/* 4 */}
                <ServiceBox>
                    <IconBox><ParkIcon sx={{ fontSize: 50 }} /></IconBox>
                    <ServiceText textAlign={{ sm: 'center', md: 'left' }}>
                        <h4>{Title[3]}</h4>
                        <h6>{message[3]}</h6>
                    </ServiceText>
                </ServiceBox>

                {/* 5 */}
                <ServiceBox>
                    <IconBox><AirportShuttleIcon sx={{ fontSize: 50 }} /></IconBox>
                    <ServiceText textAlign={{ sm: 'center', md: 'left' }}>
                        <h4>{Title[4]}</h4>
                        <h6>{message[4]}</h6>
                    </ServiceText>
                </ServiceBox>

            </ServiceContainer>
        </StyledContainer >

    )
}
