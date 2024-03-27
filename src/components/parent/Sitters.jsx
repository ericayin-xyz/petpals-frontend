import React, { useState } from 'react';
import CardList from './CardList';
import ClickedCard from './ClickedCard';


const Sitters = () => {

    const [clickedCard, setClickedCard] = useState(null)

    function setCard(card) {
        setClickedCard(card)
    }

    return (
        <div id="sitters">
            <CardList setCard={setCard} />
            <ClickedCard card={clickedCard} />
        </div>
    )
}

export default Sitters