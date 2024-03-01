import React, { useState } from 'react';

function NavBar() {
    const [selectedLink, setSelectedLink] = useState('portfolio');

    

    return (
        <nav className="navbar">
            <div className="brand">AGENCY</div>
            <div className="nav-links">
                <a href="#whyus" className={selectedLink === 'whyus' ? 'selected' : ''} onClick={() => setSelectedLink('whyus')}>Why Us</a>
                <a href="#about" className={selectedLink === 'about' ? 'selected' : ''} onClick={() => setSelectedLink('about')}>About</a>
                <a href="#services" className={selectedLink === 'services' ? 'selected' : ''} onClick={() => setSelectedLink('services')}>Services</a>
                <a href="#portfolio" className={selectedLink === 'portfolio' ? 'selected' : ''} onClick={() => setSelectedLink('portfolio')}>Portfolio</a>
                <a href="#process" className={selectedLink === 'process' ? 'selected' : ''} onClick={() => setSelectedLink('process')}>Process</a>
                <a href="#reviews" className={selectedLink === 'reviews' ? 'selected' : ''} onClick={() => setSelectedLink('reviews')}>Reviews</a>
                <a href="#ourskills" className={selectedLink === 'ourskills' ? 'selected' : ''} onClick={() => setSelectedLink('ourskills')}>Our Skills</a>
                <a href="#contactus" className={selectedLink === 'contactus' ? 'selected' : ''} onClick={() => setSelectedLink('contactus')}>Contact Us</a>
            </div>
        </nav>
    );
}

export default NavBar;
