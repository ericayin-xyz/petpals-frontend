import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { LinkedButton } from '../styled/Button';
import { TextField, InputAdornment } from '@mui/material';
import { Bodytext } from '../styled/Font';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Colors } from '../styled/Theme/index';
import Grid from '@mui/material/Grid';


export const FieldContainer = styled.span`
    width: 100%;
    // display: flex;
    // flex-direction: column; // Stack vertically on small screens
    // align-items: flex-start;
    // width: 100%;
    // margin-bottom: 10px;
    // @media screen and (max-width: 480px) {
    //     flex-direction: column; // Adjust if you initially have a different layout for larger screens
    // }
`;

function AddCard() {
    const [card, setCard] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        experience: '',
        description: '',
        image: null,
    })

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null);

    const images = [
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=PastelPink&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Happy&eyebrowType=Default&mouthType=Grimace&skinColor=Light",
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Side&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=Light",
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=Brown&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Heather&graphicType=Pizza&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Pale",
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Kurt&hairColor=SilverGray&facialHairType=Blank&clotheType=BlazerShirt&eyeType=WinkWacky&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Light",
        "https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hatColor=Black&clotheType=ShirtScoopNeck&clotheColor=Black&eyeType=Happy&eyebrowType=UpDown&mouthType=Smile&skinColor=Brown",
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=Overall&clotheColor=Heather&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Pale",
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairShavedSides&accessoriesType=Kurt&facialHairType=Blank&clotheType=Hoodie&clotheColor=Red&eyeType=Side&eyebrowType=UpDown&mouthType=Tongue&skinColor=Light",
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Sunglasses&hairColor=Blonde&facialHairType=BeardMajestic&facialHairColor=Blonde&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=WinkWacky&eyebrowType=Default&mouthType=Tongue&skinColor=Tanned",
        "https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Prescription02&hatColor=Blue03&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Side&eyebrowType=Angry&mouthType=Serious&skinColor=Light",
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Prescription01&hairColor=PastelPink&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Red&eyeType=WinkWacky&eyebrowType=UpDown&mouthType=Smile&skinColor=Brown",
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageSelect = (image) => {
        setSelectedImage((prevImage) => prevImage === image ? null : image);
        setCard({ ...card, image: image });
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Submited')
        // console.log(card)

        setSuccessMessage(null)

        //Validation
        if (!card.name) {
            setErrorMessage("Please enter your name.");
        } else if (!card.email) {
            setErrorMessage("Please enter your email.");
        } else if (!card.email.match((/^[A-Za-z._\-0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/))) {
            setErrorMessage("Please enter a valid email.");
            // setSuccessMessage(null)
        } else if (!(card.phone.match('^0\\d{9,10}$'))) {
            setErrorMessage("Please enter a valid phone number.");
        } else if (typeof card.experience !== 'string' || !/\D/.test(card.experience)) {
            setErrorMessage("Please describe your experience (like '2 years').");
        } else if (!card.address) {
            setErrorMessage("Please enter your address.");
        } else if (!card.description) {
            setErrorMessage("Please enter your description.");
        } else {
            setErrorMessage(null)
            axios.post("/petsitter", card)
                .then((res) => {
                    console.log(res.data);
                    setSuccessMessage("Form Submitted !");

                    setTimeout(() => {
                        navigate('/petparent', { state: { scrollTo: 'sitters' } });
                    }, 1500)
                })
                .catch((error) => {
                    console.error("There was an error submitting the form: ", error);
                    setErrorMessage("Error submitting form.");
                });
        }
    }

    const handleOnChange = (event) => {
        setCard((prevCard) => {
            // console.log(event.target.value)
            return {
                ...prevCard,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <Grid container justifyContent="center" spacing={2} sx={{ marginTop: '6rem' }} >
            <Grid item xs={12}>
                <Bodytext variant="h1">
                    Post a Job
                </Bodytext>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: '20px' }}component="form" onSubmit={handleSubmit} >
                <Grid container spacing={1} sx={{ maxWidth: 800, margin: 'auto', padding: '0 8%', gap: 2 }}>
                    <Grid item xs={12}>
                        <label htmlFor="name">Name:</label>
                        <TextField sx={{ maxWidth: '700px', display: 'flex', marginTop: '8px' }}
                            id="name" variant="filled" type='text' name='name' value={card.name} onChange={handleOnChange} />
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="email">Email:</label>
                        <TextField sx={{ maxWidth: '80vw', display: 'flex', marginTop: '8px' }}
                            id="email" variant="filled" type='email' name='email' value={card.email} onChange={handleOnChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end"> @ </InputAdornment>),
                            }} />
                    </Grid>
                    <Grid item xs={12}>
                        <label htmlFor="phone">Phone Number:</label>
                        <TextField sx={{ maxWidth: '80vw', display: 'flex', marginTop: '8px' }} 
                        id="phone" variant="filled" type='number' name='phone' value={card.phone} onChange={handleOnChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <label htmlFor="experience">Experience:</label>
                        <TextField sx={{ maxWidth: '80vw', display: 'flex', marginTop: '8px' }}
                            id="experience" variant="filled" type='text' name='experience' value={card.experience} placeholder="1 year" onChange={handleOnChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <label htmlFor="address">Address:</label>
                        <TextField sx={{ maxWidth: '80vw', display: 'flex', marginTop: '8px' }} 
                            variant="filled" type='text' name='address' value={card.address} placeholder="The Rocks 2000" onChange={handleOnChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <label htmlFor="description">Description:</label>
                        <TextField sx={{ maxWidth: '80vw', display: 'flex', marginTop: '8px' }}
                            id="description" variant="filled" type='text' name='description' value={card.description}
                            onChange={handleOnChange} multiline rows={3} />
                    </Grid>

                    <div
                        id="AvatarContainer"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '10px',
                            justifyContent: 'center',
                            margin: '10px auto',
                        }}
                    >
                        <label htmlFor="description" style={{ marginRight: '10px' }}>
                            Avatar:
                        </label>
                        {images.map((image, index) => (
                            <div key={index} style={{
                                // display: 'inline-block',
                                // padding: '3px',
                                // marginTop: '5px',
                                width: '40px', height: '40px'
                            }}>
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Selectable icon ${index + 1}`}
                                    style={{
                                        width: '100%', height: 'auto', display: 'block',
                                        cursor: 'pointer',
                                        opacity: selectedImage ? (selectedImage === image ? 1 : 0.6) : 1,
                                        transform: selectedImage ? (selectedImage === image ? 'scale(1.05)' : 'scale(1)') : 'scale(1.05)',
                                        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                                    }}
                                    onClick={() => handleImageSelect(image)}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                        ))}
                    </div>
                    <LinkedButton
                        type='submit'
                        style={{
                            width: '100%',
                            marginTop: '10px',
                        }} id='submitBtn' onClick={handleSubmit} >
                        Send</LinkedButton>
                    <div id='msg' style={{ marginBottom: '1rem' }}>
                        <h4 style={{ margin: '20px 0px', color: 'red', textAlign: 'center' }}>{successMessage}{errorMessage}</h4>
                        {successMessage && <Box sx={{ width: '100%' }}>
                            <LinearProgress color='inherit' sx={{ color: Colors.blue, marginTop: '2rem' }} />
                        </Box>}
                    </div>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default AddCard