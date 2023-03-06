
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import LoginButton from '../login/loginButton/LoginButton';
import LogoutButton from '../login/logoutButton/LogoutButton';
import LanguageSelector from '../languageSelector/LanguageSelector';
import './NavBar.css';

const NavBar = () => {

  const { isAuthenticated } = useAuth0();
  const { t } = useTranslation();

  return (
    <header className="main-header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navlinks">
          <span className="navTitle">{t('title')}</span>
          <NavLink to="/">{t('menu.user_profile')}</NavLink>
          <NavLink to="/hello-world">{t('menu.hello_world')}</NavLink>
          <LanguageSelector />
        </div>
        { isAuthenticated ? (
        <>
          <LogoutButton/>  
        </>
        ) : (<LoginButton/>) }
      </nav>
    </header>
  );
};

export default NavBar;
