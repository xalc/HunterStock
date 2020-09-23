import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
function Header() {
  const [expanded, setExpanded] = useState(false);
    return (
      <div className={styles.header}>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as= {Link} to="/home" >天择</Navbar.Brand>
            <Navbar.Toggle onClick={() => setExpanded(!expanded)} />
            <Navbar.Collapse >
                <Nav className="mr-auto" onClick={() => setExpanded(false)}>  
                    <Nav.Link as= {Link} to="/about">about</Nav.Link>
                    <Nav.Link as= {Link} to="/home">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
      </div>
    );
  }
  
export default Header;