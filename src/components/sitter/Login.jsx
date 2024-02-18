import styled from "styled-components"
import React, { useState } from "react";
import { AddCardContainer } from '../styled/StyledContainer';
import { LinkedButton } from "../styled/Button";
import { TextField } from '@mui/material';
import { Bodytext } from '../styled/Font';
import axios from "axios";
import { ContentContainer } from '../../components/styled/StyledContainer';

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

    const [errorMessage, setErrorMessage] = useState({
        username: null,
        password: null,
        aipError: null,
    })

    const [userFetched, setUserFetched] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submited')
        console.log(user)
        let haveError = false
        if (!user.username) {
            setErrorMessage((prevErrorMessage) => {
                return {
                    ...prevErrorMessage,
                    username: "Please enter your username"
                }
            })
            haveError = true
        }
        if (!user.password) {
            setErrorMessage((prevErrorMessage) => {
                return {
                    ...prevErrorMessage,
                    password: "Please enter your password"
                }
            })
            haveError = true
        }
        if (!haveError) {
            setErrorMessage({
                username: null,
                password: null,
                aipError: null
            })
            axios.post('https://fakestoreapi.com/auth/login', user)
                .then(res => res.data)
                .then((json) => {
                    setUserFetched(true)
                    localStorage.setItem("token", json.token)
                    console.log(json)
                })
                .catch(() => {
                    setErrorMessage((prevErrorMessage) => {
                        return {
                            ...prevErrorMessage,
                            aipError: "Username / Password is incorrect"
                        }
                    })
                })
        }
    }

    const handleOnChange = (event) => {
        // console.log(event.target.value)
        setUser((prevUser) => {
            return {
                ...prevUser,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <>
            {userFetched ? (
                <ContentContainer>
                    <Bodytext variant="h1"> Login Successful </Bodytext>
                </ContentContainer>
            ) : (
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
                            <TextField id="username" variant="filled" type='text' value={user.username} name='username' onChange={handleOnChange} />
                            <h4 style={{ margin: '10px 0px', color: 'red', textAlign: 'center' }}>{errorMessage.username}</h4>

                            <label htmlFor="password">Password:</label>
                            <TextField id="password" variant="filled" type='password' value={user.password} name='password' onChange={handleOnChange} />
                            <h4 style={{ margin: '10px 0px', color: 'red', textAlign: 'center' }}>{errorMessage.password}</h4>

                            <LinkedButton
                                style={{
                                    width: '100%',
                                    marginTop: '10px',
                                }}
                                id='submitBtn'
                                onClick={handleSubmit}
                            >
                                LOGIN
                            </LinkedButton>

                            <h4 style={{ margin: '10px 0px', color: 'red', textAlign: 'center' }}>{errorMessage.aipError}
                            </h4>
                        </InputWrapper>
                    </form>
                </AddCardContainer>
            )}
        </>
    )
}

export default Login