import CardList from '../components/parent/CardList';
import ClickedCard from '../components/parent/ClickedCard';
import React, { useState, useEffect } from "react";


const Sitters = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [clickedCard, setClickedCard] = useState(null)

    function setCard(card) {
        setClickedCard(card)
    }

    return (
        <div id="Sitters">
            <CardList setCard={setCard} />
            <ClickedCard card={clickedCard} /> 
        </div>
    )
}

export default Sitters