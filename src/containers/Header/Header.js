import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.scss';
function Header() {
    return (
      <div className={styles.header}>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as= {Link} to="/home" >天择</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">  
                    <Nav.Link as= {Link} to="/about">about</Nav.Link>
                    <Link className="nav-link" to="/">Home</Link>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
      </div>
    );
  }
  
export default Header;