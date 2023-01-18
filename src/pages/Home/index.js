import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import Sidebar from '../../components/SideBar'
import HeroSection from '../../components/HeroSection'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <HeroSection/>
        </>
    )
}

export default Home