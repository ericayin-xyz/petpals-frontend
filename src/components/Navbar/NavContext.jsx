import { createContext, useState, useContext } from "react";
import { Link } from 'react-router-dom';

export const NavContext= createContext();
export const useNavContext = () => useContext(NavContext);


export const NavProvider = ({ children }) => {

    const[drawerOpen, setDrawerOpen] = useState(false);

    const value = { drawerOpen, setDrawerOpen };

    return <NavContext.Provider value={value}> {children} </NavContext.Provider>
}