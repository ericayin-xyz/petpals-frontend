import React, { useEffect } from "react";
import { NavProvider } from '../components/Navbar/NavContext';
import Banner from '../components/Home/Banner';
import ButtonGroup from '../components/Home/ButtonGroup'
import Service from '../components/Home/Service';

const Mainpage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div maxWidth="1800px">
            <NavProvider>
                <Banner />
                <Service />
                <ButtonGroup />
            </NavProvider>
        </div >

    )
}

export default Mainpage