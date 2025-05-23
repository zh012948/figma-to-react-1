import React, { useState, useEffect } from 'react'
import '../styles/Navbar.css'
import logo from '../assets/images/logo.png'
function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            // scrolling down
            setShowNavbar(false);
        } else {
            // scrolling up
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);


    return (
        <>
            <nav className={showNavbar ? 'navbar-visible' : 'navbar-hidden'}>
                <div className="logo"><img src={logo} alt="logo" /></div>
                <div className="navbar">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a className='btnRegister' href="#">Register Now ➡</a></li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar