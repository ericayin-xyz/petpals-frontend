import React, { useState, useEffect, useRef } from 'react';
import CardList from '../components/parent/CardList';
import ClickedCard from '../components/parent/ClickedCard';
import { useLocation } from 'react-router-dom';

const Sitters = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const location = useLocation();
    const sectionRef = useRef(null);

    useEffect(() => {
        if (location.search === 'reviews') {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.search]);

    const [clickedCard, setClickedCard] = useState(null)

    function setCard(card) {
        setClickedCard(card)
    }

    return (

        <div id="Sitters">
            <CardList setCard={setCard} />
            <ClickedCard card={clickedCard} ref={sectionRef} />
        </div>
    )
}

export default Sitters