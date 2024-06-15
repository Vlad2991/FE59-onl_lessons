import React, { useState } from 'react';
import './MenuHamburger.css'; // Create a CSS file for styling

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className="menu-hamburger" onClick={toggleMenu}>
      {isOpen ? (
        <div className="menu-icon close">✖</div>
      ) : (
        <div className="menu-icon open">☰</div>
      )}
    </button>
  );
};

export default MenuHamburger;