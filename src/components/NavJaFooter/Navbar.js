import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import { CgMenu } from 'react-icons/cg';

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <nav className='Navbar'>
        <div className='Navbarcontent'>
          <ul className='NavbarList'>
            <li>
              <Link to='/'>Etusivu</Link>
            </li>
            <li>
              <Link to='/kitarat'>Kitarat</Link>
            </li>
            <li>
              <Link to='/vahvistimet'>Vahvistimet</Link>
            </li>
            <li>
              <Link to='/plektrat'>Plektrat</Link>
            </li>
            <li>
              <Link to='/yhteystiedot'>Yhteystiedot</Link>
            </li>
          </ul>
        </div>
        <div onClick={() => setShowMobileNav((b) => !b)} className='hampurger'>
          <CgMenu color='white' size={30} />
        </div>
      </nav>
      {showMobileNav && <NavLinks onClick={setShowMobileNav} />}
    </>
  );
};

export default NavBar;
