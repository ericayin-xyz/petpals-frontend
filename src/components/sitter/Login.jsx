import styled from "styled-components"
import React, { useState } from "react";
import { AddCardContainer } from '../styled/StyledContainer';
import { LinkedButton } from "../styled/Button";
import { TextField } from '@mui/material';
import { Bodytext } from '../styled/Font';

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

function Login() {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.value)
    }

    const handleOnChange = (event) => {
        // console.log(event.target.value)
        setUser((prevUser) => {
            return {
                ...prevUser,
                [event.target.username]: event.target.value
            }
        })
    }

    return (
        <AddCardContainer>
            <Bodytext variant="h1">
                Login
            </Bodytext>
            <form
                style={{ display: 'flex', marginTop: '50px', flexDirection: 'column', alignItems: 'center', width: '70%', }}
                onSubmit={handleSubmit}
            >
                <InputWrapper style={{ padding: '0px 8%' }}>
                    <label htmlFor="username">Username:</label>
                    <TextField id="username" variant="filled" type='text' valye={user.username} name='username' />

                    <label htmlFor="password">Password:</label>
                    <TextField id="password" variant="filled" type='text' valye={user.password} name='password' />
                    <LinkedButton
                        style={{
                            width: '100%',
                            marginTop: '10px',
                        }}
                        id='submitBtn'
                        onClick={handleOnChange}
                    >
                        SEND
                    </LinkedButton>
                </InputWrapper>

            </form>
        </AddCardContainer>
    )
}

export default Login