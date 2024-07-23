import React, { useState } from 'react';
import { MdOutlineMenu, MdPerson } from "react-icons/md";
import './index.css';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="header">
      <div className="desktop-header">
        <h1 className="company-name"><MdOutlineMenu className="menu-icon" />IndigoLearn</h1>
        <nav className="nav">
          <a href="#home" className="desktop-nav-link bold-nav-link current-page">Home</a>
          <a href="#about" className="desktop-nav-link">About</a>
          <a href="#courses" className="desktop-nav-link">Courses</a>
          <a href="#contact" className="desktop-nav-link">Contact</a>
        </nav>
        <div className="user-container">
          <MdPerson className="user-icon" />
          <button className="login-signup-button">Log In/Sign Up</button>
        </div>
      </div>
      <div className="mobile-header">
        <div className="icon-company-name">
        <span className="mobile-menu-icon" onClick={toggleMobileNav}><MdOutlineMenu /></span>
        <h1 className="mobile-company-name">IndigoLearn</h1>
        </div>
        <div className="user-container">
          <MdPerson className="user-icon" />
          <button className="login-signup-button">Log In/Sign Up</button>
        </div>
        {isMobileNavOpen && (
          <div className="mobile-nav">
            <nav className="mobile-nav-menu">
              <a href="#home" className="nav-link bold-nav-link current-page">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#courses" className="nav-link">Courses</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
