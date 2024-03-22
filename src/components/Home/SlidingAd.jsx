import { Slide } from "@mui/material";
import React, { useEffect, useState } from "react"
import { AdContainer } from "../styled/StyledContainer"
import styled from 'styled-components';


const LineB = styled.div`
    height: 1px;
    width: 100%;
    background-color: black;
    margin-top: 20px;
    // box-shadow: 0px 3px 6px rgba(0, 0, 0.6, 0.8);
    margin-bottom: 50px;
`;

const LineT = styled.div`
    height: 1px;
    background-color: black;
    margin-bottom: 20px;
    // box-shadow: 0px 20px 6px rgba(0, 0, 0, 0.6);
`;

const TextSlide = styled(Slide)`
    position: relative;
    z-index: 1; 
`;

const messages = [
    "Thousands of pet sitters in your area",
    "Match by needs and schedule",
    "Read references & reviews",
    "Contact directly",
    "Free virtual or in-person meetings before booking"
]

export default function Intro() {

    const [messagesIndex, setMessageIndex] = useState(0);
    const [showMessage, setshowMessage] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setshowMessage(false);
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, [])

    useEffect(() => {
        const intervalid = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length)

            setshowMessage(true);

            setTimeout(() => {
                setshowMessage(false)
            }, 3000);
        }, 4000)

        return () => {
            clearInterval(intervalid);
        }
    }, [])

    return (
        <AdContainer>
            <LineT />
            <TextSlide
                direction={showMessage ? "left" : "right"} in={showMessage} timeout={{ enter: 500, exit: 300 }}
            >
                <p style={{ textAlign: 'center', bond: 'light' }}>
                    {messages[messagesIndex]}
                </p>
            </TextSlide>
            <LineB />
        </AdContainer>
    )
}