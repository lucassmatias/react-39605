import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carrito from './CartWidget';
import { Link } from "react-router-dom";
import "./css/LinkFont-module.css";
import "./css/General.css"
function NavBar(){
    return(
    <>
    <Navbar expand="lg" sticky="top" className="navBar">
        <Container className="navBarContainer">
        <Link to="/" className="linkFont navbar-brand">MangaZone</Link>   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-container">
                <Link to="/" className="linkFont nav-link">Inicio</Link>
                <Link to="/" className="linkFont nav-link">Novedades</Link>
                    <NavDropdown title="Manga" id="basic-nav-dropdown" className="navDropdown">
                    <Link to="/category/seinen" className="linkFont nav-link">Seinen</Link>
                    <Link to="/category/shonen" className="linkFont nav-link">Shonen</Link>
                    </NavDropdown>
            </Nav>
            <Carrito/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}

export default NavBar;