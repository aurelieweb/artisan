import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Importez l'icône de profil

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="menu">
      <button className="menu__burger" onClick={toggleMenu}>
        ☰
      </button>
      {menuOpen && (
        <button className="close-button" onClick={closeMenu}>
          ✕
        </button>
      )}
      <ul className={`menu__list ${menuOpen ? 'open' : ''}`}>
        <li className="menu__item">
          <Link to="/" className="menu__item-link" onClick={closeMenu}>
            Accueil
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/service" className="menu__item-link" onClick={closeMenu}>
            Nos services
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/nosProjets" className="menu__item-link" onClick={closeMenu}>
            Nos réalisations
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/demande-intervention" className="menu__item-link" onClick={closeMenu}>
            Demande d'intervention
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/contact" className="menu__item-link" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        {/* Remplacez le lien "interface" par l'icône de profil */}
        <li className="menu__item">
          <Link to="/interface-utilisateur" className="menu__item-link" onClick={closeMenu}>
            <FontAwesomeIcon icon={faUser} className="menu__item-icon" />
          </Link>
          
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
