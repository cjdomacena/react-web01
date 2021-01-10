import React from 'react'
import  { useState } from 'react';

import SideBar from '../Components/Sidebar/SideBar';
import Navbar from "../Components/Navbar/Navbar";


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () =>
    {
        setIsOpen(!isOpen);
    }

    return (
        <>
                <SideBar isOpen = {isOpen} handleClick={handleClick} />
                <Navbar handleClick={handleClick}/>
        </>
    )
}

export default Home
