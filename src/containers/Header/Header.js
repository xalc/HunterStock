import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
function Header() {
    return (
      <div className={styles.header}>
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">

            <Navbar.Brand as= {Link} to="/home" >天择</Navbar.Brand>
            <Navbar.Toggle />

            <Navbar.Collapse >
                <Nav className="mr-auto">  
                    <Nav.Link as= {Link} to="/home" href='/'>Home</Nav.Link>
                    <Nav.Link as= {Link} to="/tech" href='/'>技术</Nav.Link>
                    <Nav.Link as= {Link} to="/blog" href='/'>文章</Nav.Link>
                    <Nav.Link as= {Link} to="/about" href='/'>关于</Nav.Link>
                    {/* if no hrer attr the collapseOnselect will not work... */}
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
      </div>
    );
  }
  
export default Header;