import AddCard from '../components/sitter/AddCard';
import Intro from '../components/sitter/Intro'
import Login from '../components/utils/login'
import React, { useEffect } from "react";

const PetSitter = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div id='petsitter'>
            <Intro />
            <AddCard />
            <Login />
        </div>
    )
}

export default PetSitter