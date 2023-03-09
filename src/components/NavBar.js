import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carrito from './CartWidget';
import ItemListContainer from './ItemListContainer';

function NavBar(){
    return(
    <>
    <Navbar bg="light" expand="lg" sticky="top">
        <Container>
        <Navbar.Brand href="#home">MangaZone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Novedades</Nav.Link>
                    <NavDropdown title="Manga" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1"><ItemListContainer greeting="Comedia"/></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"><ItemListContainer greeting="Drama"/></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"><ItemListContainer greeting="Aventura"/></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Seinen
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">
                        Shonen
                    </NavDropdown.Item>
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