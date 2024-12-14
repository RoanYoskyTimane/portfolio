import React, { useState, useEffect } from 'react';
import './styles.css';

function Header() {
    const [isActive, setIsActive] = useState(false);

    const toggleNavBar = () => {
        setIsActive(!isActive);
    };

    return (
        <header className="header">
            <div className="logo">Roan Yosky Timane</div>
            <div className="hamburger" onClick={toggleNavBar}>
                <span className="material-icons">
                    {isActive ? 'close' : 'menu'}
                </span>
            </div>
            <nav className={`nav-bar ${isActive ? 'active' : ''}`}>
                <ul>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

