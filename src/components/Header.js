import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import { BiSun, BiMoon, BiCart, BiHeart } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";
import { useAuth0 } from "@auth0/auth0-react";

import { MainContext } from '../context';


const Header = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  const { favourites, setLanguage, language, contentLang, setContentLang } = useContext(MainContext);


  useEffect(() => {
    setThemeMode(darkMode);
  }, [darkMode]);

  const {
    isEmpty,
    totalItems,
  } = useCart();

  if (isLoading) {
    return (
      <Navbar collapseOnSelect expand="md"
        variant={darkMode ? 'dark' : 'light'}
        className={darkMode ? 'bg-light-black border-bottom' : ' border-bottom'}
        style={{ width: '100%', position: 'fixed', zIndex: 100, backgroundColor: '#fffbf0' }}
      >
        <Container>
          <Link to="/">
            <Navbar.Brand className={darkMode ? 'text-dark-primary' : 'text-light-primary'}>
              <img src={darkMode ? 'https://i.ibb.co/7kZrn4H/33342.png' : 'https://i.ibb.co/CtCRT92/Untitled-2.png'} width={200} />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className='load'><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };




  return (
    <Navbar collapseOnSelect expand="md"
      variant={darkMode ? 'dark' : 'light'}
      className={darkMode ? 'bg-light-black border-bottom' : ' border-bottom'}
      style={{ width: '100%', position: 'fixed', zIndex: 100, backgroundColor: '#fffbf0' }}
    >
      
      <Container>
        <Link to="/">
          <Navbar.Brand className={darkMode ? 'text-dark-primary' : 'text-light-primary'}>
            <img src={darkMode ? 'https://i.ibb.co/7kZrn4H/33342.png' : 'https://i.ibb.co/CtCRT92/Untitled-2.png'} width={200} />
          </Navbar.Brand>
        </Link>
        

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div>
        <select value={language} onChange={(e)=>{setLanguage(e.target.value)}} className='select'>
          <option>az</option>
          <option>en</option>
          <option>ru</option>
        </select>
        
      </div>
          <Nav className="ms-auto">
            {
              isAuthenticated && (
                <>
                  <p className={`d-flex align-items-center user-name ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}><span className={`${theme ? 'welcome' : 'no-welcome'}`}>{contentLang.welcome} &nbsp;</span> {user.email}</p>
                </>

              )
            }
            <Nav.Link
              className={darkMode ? 'text-dark-primary' : 'text-light-primary'}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <BiSun size="1.7rem" /> : <BiMoon size="1.7rem" />}
            </Nav.Link>
            <Link
              to="/cart"
              className={`${darkMode ? 'text-dark-primary' : 'text-light-primary'} d-flex align-items-center`}
            >
              <BiCart size="2rem" />
              {!isEmpty && <span style={{ position: 'relative', left: '3px', top: '0px' }}>{totalItems}</span>}
              <span style={{ marginLeft: !isEmpty ? '10px' : '10px' }}></span>
            </Link>
            <Link
              to="/wishlist"
              className={`${darkMode ? 'text-dark-primary' : 'text-light-primary'} d-flex align-items-center`}
            >
              <BiHeart size="2rem" />
              {!(favourites?.length == 0) && <span style={{ position: 'relative', left: '3px', top: '0' }}>{favourites?.length}</span>}
              <span style={{ marginLeft: !(favourites == []) ? '15px' : 0 }}></span>
            </Link>
            <Link
          to="/about"
          className={`${darkMode ? 'text-dark-primary' : 'text-light-primary'} d-flex align-items-center login-btn`}
          style={{ paddingRight: '20px', textDecoration: 'none' }}
        >
          {contentLang.aboutUs}
        </Link>
        <Link
          to="/contact"
          className={`${darkMode ? 'text-dark-primary' : 'text-light-primary'} d-flex align-items-center login-btn`}
          style={{ paddingRight: '20px', textDecoration: 'none' }}
        >
          {contentLang.contact}
        </Link>
            {
              isAuthenticated ? (
                <>

                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className={`login-btn ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
                    {contentLang.logOut}
                  </button>
                </>
              ) : (
                <>

                  <button onClick={() => loginWithRedirect()} className={`login-btn ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
                    {contentLang.logIn}
                  </button>
                </>
              )
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;