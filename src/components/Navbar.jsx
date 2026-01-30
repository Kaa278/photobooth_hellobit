import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // We'll create this to keep styles clean

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">✨ HelloBit</Link>
            </div>

            {/* Desktop Links - Centered */}
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/frame" onClick={() => setIsOpen(false)}>Frame</Link>
                <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>

                {/* Mobile CTA inside menu */}
                <Link to="/frame" className="mobile-cta" onClick={() => setIsOpen(false)}>
                    Mulai Sekarang
                </Link>
            </div>

            {/* Desktop CTA - Right Aligned */}
            <div className="nav-cta">
                <Link to="/frame" className="btn-small">Mulai Sekarang</Link>
            </div>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span className={isOpen ? 'bar open' : 'bar'}></span>
                <span className={isOpen ? 'bar open' : 'bar'}></span>
                <span className={isOpen ? 'bar open' : 'bar'}></span>
            </div>
        </nav>
    );
};

export default Navbar;
