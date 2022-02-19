import './Navbar.css';
import { Link } from 'react-router-dom';

const NavLinks = ({ onClick }) => {
  return (
    <ul onClick={() => onClick((b) => !b)} className='mobileNav'>
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
  );
};

export default NavLinks;
