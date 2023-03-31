import { Slide } from "@mui/material";
import { useEffect, useState } from "react"
import { AdContainer } from "../styled/StyledContainer"
import styled from 'styled-components';

const LineB = styled.div`
    height: 1px;
    width: 100vw;
    background-color: blue;
    margin-top: 50px;
`;

const LineT = styled.div`
    height: 1px;
    width: 100vw;
    background-color: blue;
    margin-bottom: 50px;
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
        setTimeout(() => {
            setshowMessage(false)
        })
        // eslint-disable-next-line 
    }, 3000);

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
                <Slide
                    direction={showMessage ? "left" : "right"} in={showMessage} timeout={{ enter: 500, exit: 300, border: "1px solid blue"}}
                >
                    <h1>
                        {messages[messagesIndex]}
                    </h1>
                </Slide>
                <LineB />
        </AdContainer>
    )
}