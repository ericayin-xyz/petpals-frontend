import styled from 'styled-components';
import React, { useState } from "react";
import axios from "axios";
import { AddCardContainer } from '../styled/StyledContainer';
import { LinkedButton } from '../styled/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { TextField, InputAdornment } from '@mui/material';
import { Bodytext } from '../styled/Font';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

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
        address: 'Sydney, 2000',
    })

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null);

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
        } else if (!card.description) {
            setErrorMessage("Please enter your description.");
            // setSuccessMessage(null)
        } else {
            setErrorMessage(null)
            axios.post("/petsitter", card)
                // .get(`/cards/${cardId}`)
                // .get("/petparent", card)
                // .get("/petparent/sitters", card)               
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
                    <label htmlFor="phone">Mobile Number:</label>
                    <TextField id="phone" variant="filled" type='number' name='phone' value={card.phone} onChange={handleOnChange} />

                    <label htmlFor="experience">Experience:</label>
                    <TextField id="experience" variant="filled" type='text' name='experience' value={card.experience} onChange={handleOnChange} />

                    <label htmlFor="address">Address:</label>
                    <TextField id="address" variant="filled" type='text' name='address' value={card.address} onChange={handleOnChange} />

                    <label htmlFor="description">Description:</label>
                    <TextField id="description" variant="filled" type='text' name='description' value={card.description}
                        onChange={handleOnChange} multiline rows={3} />

                    <div className="file-input">
                        <AccountCircle sx={{ mr: 2 }} />
                        <label htmlFor="photo" className="file-input-label">
                            Add photo
                        </label>
                        <input
                            id="photo"
                            type="file"
                            name="photo"
                            accept=".png, .jpg, .jpeg"
                            className="file-input-control"
                        />
                    </div>
                    <LinkedButton
                        style={{
                            width: '100%',
                            marginTop: '10px',
                        }} id='submitBtn' onClick={handleSubmit} >
                        SEND</LinkedButton>

                    <h4 style={{ margin: '10px 0px', color: 'red', textAlign: 'center' }}>{errorMessage}{successMessage}
                    </h4>
                    {successMessage && <Box sx={{ width: '100%' }}>
                        <LinearProgress color='inherit' />
                    </Box>}
                </InputWrapper>
            </form>
        </AddCardContainer>
    )
}

export default AddCard