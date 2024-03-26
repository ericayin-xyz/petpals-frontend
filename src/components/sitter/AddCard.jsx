import styled from 'styled-components';
import React, { useState } from "react";
import axios from "axios";
import { AddCardContainer } from '../styled/StyledContainer';
import { LinkedButton } from '../styled/Button';
import { TextField, InputAdornment } from '@mui/material';
import { Bodytext } from '../styled/Font';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Colors } from '../styled/Theme/index';


const InputWrapper = styled.div`
    display: grid;
    width: 100%;
    max-width: 800px;
    gap: 10px;
    margin-bottom: 20px;
    
    @media screen and (max-width: 800px) {
        width: 90vw;
    }
`

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
        "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Kurt&hairColor=SilverGray&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=PastelRed&graphicType=Bear&eyeType=Wink&eyebrowType=UnibrowNatural&mouthType=Vomit&skinColor=DarkBrown",
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

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Submited')
        console.log(card)

        setSuccessMessage(null) // Reset success message at the start

        //Validation
        if (!card.name) {
            setErrorMessage("Please enter your name.");
        } else if (!card.email) {
            setErrorMessage("Please enter your email.");
            // setSuccessMessage(null)
        } else if (!card.email.match((/^[A-Za-z._\-0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/))) {
            setErrorMessage("Please enter a valid email.");
            // setSuccessMessage(null)
        } else if (!(card.phone.match('^0\\d{9,10}$'))) {
            setErrorMessage("Please enter a valid phone number.");
        } else if (typeof card.experience !== 'string' || !/\D/.test(card.experience)) {
            setErrorMessage("Please describe your experience (like '2 years').");
        } else if (!card.address) {
            setErrorMessage("Please enter your address.");
            // setSuccessMessage(null)
        } else if (!card.description) {
            setErrorMessage("Please enter your description.");
            // setSuccessMessage(null)
        } else {
            setErrorMessage(null)
            axios.post("/petsitter", card)             
                .then((res) => {
                    console.log(res.data);
                    setSuccessMessage("Form Submitted !");
                    setTimeout(() => {
                        window.location.href = '/petparent'
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
        <AddCardContainer>
            <Bodytext variant="h1">
                Post a Job
            </Bodytext>
            <form
                style={{ display: 'flex', marginTop: '50px', flexDirection: 'column', alignItems: 'center', width: '70%', }}
                onSubmit={handleSubmit}
            >
                <InputWrapper style={{ padding: '0px 8%' }}>
                    <label htmlFor="name">Name:</label>
                    <TextField id="name" variant="filled" type='text' name='name' value={card.name} onChange={handleOnChange} />

                    <label htmlFor="email">Email:</label>
                    <TextField id="email" variant="filled" type='email' name='email' value={card.email} onChange={handleOnChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end"> @ </InputAdornment>),
                        }} />
                    <label htmlFor="phone">Phone Number:</label>
                    <TextField id="phone" variant="filled" type='number' name='phone' value={card.phone} onChange={handleOnChange} />

                    <label htmlFor="experience">Experience:</label>
                    <TextField id="experience" variant="filled" type='text' name='experience' value={card.experience} placeholder="1 year" onChange={handleOnChange} />

                    <label htmlFor="address">Address:</label>
                    <TextField id="address" variant="filled" type='text' name='address' value={card.address} placeholder="The Rocks 2000" onChange={handleOnChange} />

                    <label htmlFor="description">Description:</label>
                    <TextField id="description" variant="filled" type='text' name='description' value={card.description}
                        onChange={handleOnChange} multiline rows={3} />

                    <div id="image"
                        style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', height: '80px', paddingBottom: '10px' }}
                    >
                        <label htmlFor="description" style={{marginRight: '10px'}}>
                            Avatar:
                            </label>
                        {images.map((image, index) => (
                            <div key={index} style={{
                                display: 'inline-block',
                                padding: '3px',
                                marginTop: '5px',
                            }}>
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Selectable icon ${index + 1}`}
                                    style={{
                                        width: '40px',
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
                </InputWrapper>
            </form>
        </AddCardContainer>
    )
}

export default AddCard