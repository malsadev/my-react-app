import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./CollapsibleExample.css"
import features from "./FeatureSection"
import React, {useRef} from 'react';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CollapsibleExample() {

  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/explore');
  };

  const handleNav = () => {
    navigate("/");
  }
  

  const { t, i18n } = useTranslation();

  const changeLanguageToEn = () => {
    i18n.changeLanguage("en");
    window.location.reload();
    
    
   
  };

  const changeLanguageToFr = () => {
    // i18n.changeLanguage("fr");
    i18n.changeLanguage("fr");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
    <Container>
      <Navbar.Brand 
        onClick={handleNav}
         
        className="navbar-brand nav-link" 
        aria-label={t('navbar_brand')}
      >
        {t('navbar_brand')}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link 
            onClick={handleNav} 
            href="#features" 
            className="nav-link" 
            aria-label={t('navbar_features')}
          >
            {t('navbar_features')}
          </Nav.Link>
          <Nav.Link 
            onClick={handleNav} 
            href="#gallery" 
            className="nav-link" 
            aria-label={t('navbar_gallery')}
          >
            {t('navbar_gallery')}
          </Nav.Link>
          <Nav.Link 
            onClick={handleNav} 
            href="#team" 
            className="nav-link" 
            aria-label={t('navbar_team')}
          >
            {t('navbar_team')}
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link 
            eventKey={2} 
            onClick={handleClick} 
            className="nav-link" 
            aria-label={t('navbar_explore_projects')}
          >
            {t('navbar_explore_projects')}
          </Nav.Link>
          <NavDropdown title={t('navbar_language')} id="nav-dropdown">
            <NavDropdown.Item 
              onClick={changeLanguageToEn}
             
              aria-label={t('navbar_english')}
            >
              {t('navbar_english')}
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item 
              onClick={changeLanguageToFr} 
              aria-label={t('navbar_french')}
            >
              {t('navbar_french')}
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}

export default CollapsibleExample;