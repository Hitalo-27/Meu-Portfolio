import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FiHome } from "react-icons/fi";
import { BsBriefcase, BsInfoCircle } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
              HCS_
              <i class="fab fa-galactic-republic" />
            </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <AnchorLink
                onClick={closeMobileMenu}
                href="#home" offset={100}
                className='nav-links'>
                <FiHome size={25} color="#ed145b" />
              </AnchorLink>
            </li>
            <li className='nav-item'>
              <AnchorLink
                onClick={closeMobileMenu}
                href="#sobre" offset={100}
                className='nav-links'>
                <BsInfoCircle size={25} color="#ed145b" />
              </AnchorLink>
            </li>
            <li className='nav-item'>
              <AnchorLink
                onClick={closeMobileMenu}
                href="#education" offset={100}
                className='nav-links'>
                <BsBriefcase size={25} color="#ed145b"/>
              </AnchorLink>
            </li>
            <li className='nav-item'>
              <AnchorLink
                onClick={closeMobileMenu}
                href="#skills" offset={100}
                className='nav-links'>
                <GiSkills size={25} color="#ed145b" />
              </AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
