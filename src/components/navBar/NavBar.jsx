
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';

import LoginButton from '../login/loginButton/LoginButton';
import LogoutButton from '../login/logoutButton/LogoutButton';

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <header className='main-header'>
      <h1 className='main-title'>
        <span className='title-content'>
          Title
        </span>
      </h1>
      <nav className='header-nav'>
        <div className='navlinks'>
          <NavLink to="/">User Profile</NavLink>
          <NavLink to="/hello-world">Hello World!</NavLink>
        </div>
        { isAuthenticated ? (
        <>
          <LogoutButton/>  
        </>
        ) : (<LoginButton/>) }
      </nav>
    </header>
  );
}

export default NavBar;
