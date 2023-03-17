import styled from "styled-components"
import React, { useState } from "react";
import axios from "axios";
import { ContentContainer } from '../styled/StyledContainer';
import { LinkedButton } from "../styled/Button";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { TextField, InputAdornment } from '@mui/material';
import { Bodytext } from '../styled/Font';


const InputWrapper = styled.div`
    display: grid;
    grid-template-column: 1fr 1fr;
    width: 500px;
    gap: 9px;
    margin-bottom: 20px;
`

function AddCard() {

    const [card, setCard] = useState({
        first_name: '',
        last_name: '',
        description: '',
        email: '',
        phone: '',
    })

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submited')
        // console.log(card)
        //Validation
        if (!card.first_name) {
            setErrorMessage("Please enter your first name.");
            setSuccessMessage(null)
        } else if (!card.email) {
            setErrorMessage("Please enter your email.");
            setSuccessMessage(null)
        } else {
            setErrorMessage(null)
            setSuccessMessage("Form Submitted")
            axios
            // .get(`/cards/${cardId}`)
                .post("petsitters/cards", card)
                .then((res) => res.data)
                .then((json) => (console.log(json)))
        }
    }

    const handleOnChange = (event) => {
        setCard((preCard) => {
            console.log(event.target.value)
            return {
                ...preCard,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <ContentContainer>
            <div id='addCard'>
                <Bodytext variant="h1">
                    Post a Job
                </Bodytext>
                <form
                    style={{ display: 'flex', marginTop: '80px', flexDirection: 'column', alignItems: 'center' }}
                    onSubmit={handleSubmit}
                >
                    <InputWrapper>
                        <label htmlFor="first_name">Name:</label>
                        <TextField id="first_name" variant="filled" type='text' name='first_name' value={card.first_name} onChange={handleOnChange} />


                        <label htmlFor="email">Email:</label>
                        <TextField id="email" variant="filled" type='email' name='email' value={card.email} onChange={handleOnChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end"> @ </InputAdornment>),
                            }} />

                        <label htmlFor="phone">Mobile Number:</label>
                        <TextField id="phone" variant="filled" type='number' name='phone' value={card.phone} onChange={handleOnChange} />

                        <label htmlFor="experience">Experience:</label>
                        <TextField id="experience" variant="filled" type='number' name='experience' value={card.experience} onChange={handleOnChange} />

                        <label htmlFor="city">City:</label>
                        <TextField id="city" variant="filled" type='number' name='city' value={card.city} onChange={handleOnChange} />

                        <label htmlFor="description">Description:</label>
                        <TextField id="description" variant="filled" type='text' name='description' value={card.description} onChange={handleOnChange} multiline rows={3} />

                        <AccountCircle sx={{ color: 'action.active', mr: 1, mt: 2 }} />
                        <input id="photo" type='file' name='photo' accept='.png .jpg .jpeg' />
                    </InputWrapper>

                        <LinkedButton 
                        style={{
                            width: '100%',
                            marginTop: '20px',
                        }} id='submiBtn' onClick={handleSubmit}>SEND</LinkedButton>

                        <h4 style={{ marginTop: '30px', color: 'red'}}>{errorMessage}{successMessage}
                        </h4>

                </form>
            </div>
        </ContentContainer>
    )
}

export default AddCard